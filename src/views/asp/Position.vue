<template>
  <div class="asp">
    <div class="asp-nav">热门企业管理</div>
    <div class="asp-content">
      <div class="asp-form">
        <div class="asp-table">
          <el-form :inline="true" :model="formInline" class="demo-form-inline" style="margin:20px 0 0 10px">
            <el-form-item label="热门企业状态">
              <el-select placeholder="轮播状态" v-model="carousel">
                <el-option label="全部" value="全部"></el-option>
                <el-option label="已下架" value="已下架"></el-option>
                <el-option label="待上架" value="待上架"></el-option>
                <el-option label="已上架" value="已上架"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item style="float:right;margin:0 30px 0 0">
              <el-button type="primary" @click="dialogVisible = true">新建热门企业</el-button>
            </el-form-item>
          </el-form>
          <el-table
            :data="tableData"
            tooltip-effect="dark"
            style="width:1084px;margin:20px auto"
            @selection-change="handleSelectionChange"
          >
            <el-table-column prop="name" label="ID" width="120"></el-table-column>
            <el-table-column prop="date" label="企业简称" width="120"></el-table-column>
            <el-table-column prop="img" label="图片" show-overflow-tooltip>
              <template>
                <el-image
                  style="width: 100px; height: 100px"
                  :src="this.url"
                  :preview-src-list="srcList"
                ></el-image>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="企业ID" show-overflow-tooltip></el-table-column>
            <el-table-column label="操作(素材排序)">
              <template slot-scope="scope">
                <el-button size="mini" type="text" @click="sortUp(scope.$index, scope.row)">
                  <i style="font-size:20px" class="el-icon-arrow-up"></i>
                </el-button>
                <el-button size="mini" type="text" @click="sortDown(scope.$index, scope.row)">
                  <i style="font-size:20px" class="el-icon-arrow-down"></i>
                </el-button>
              </template>
            </el-table-column>
            <el-table-column prop="address" sortable label="广告位" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" sortable label="状态" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" sortable label="时间" show-overflow-tooltip></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                <el-button type="text" size="small">下架</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          ></el-pagination>
        </div>
      </div>
    </div>
    <el-dialog title="新建热门企业" :visible.sync="dialogVisible" width="480px" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="企业">
          <el-autocomplete
            style="width:300px"
            v-model="form.name"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入企业名称，企业ID进行搜索"
            @select="move"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item label="企业简称" v-if="position" prop="position">
          <el-input v-model="form.position" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="logo" v-if="company" prop="logo">
          <el-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList"></el-image>
        </el-form-item>
        <el-form-item label="广告位" prop="link">
          <el-select v-model="form.link" style="width:300px" placeholder>
            <el-option label="热门企业第4位" value="热门企业第4位"></el-option>
            <el-option label="热门企业第7位" value="热门企业第7位"></el-option>
            <el-option label="热门企业第10位" value="热门企业第10位"></el-option>
            <el-option label="热门企业第13位" value="热门企业第13位"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogVisible = false">关 闭</el-button>
          <el-button type="primary" @click="submitForm('form')">保 存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="编辑热门企业"
      :visible.sync="dialogVisibleOne"
      width="480px"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="企业">
          <el-autocomplete
            style="width:300px"
            v-model="form.name"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入企业名称，企业ID进行搜索"
            @select="move"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item label="企业简称">
          <el-input :disabled="true" v-model="form.position" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="logo">
          <el-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList"></el-image>
        </el-form-item>
        <el-form-item label="广告位" prop="link">
          <el-select v-model="form.link" style="width:300px" placeholder>
            <el-option label="热门企业第4位" value="热门企业第4位"></el-option>
            <el-option label="热门企业第7位" value="热门企业第7位"></el-option>
            <el-option label="热门企业第10位" value="热门企业第10位"></el-option>
            <el-option label="热门企业第13位" value="热门企业第13位"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogVisibleOne = false">关 闭</el-button>
          <el-button type="primary" @click="submitFormOne('form')">保 存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        position: "",
        company: "",
        link: ""
      },
      carousel:'',
      restaurants: [],
      timeout: null,
      position: "",
      company: "",
      link: "",
      checkList: ["复选框 A"],
      dialogVisible: false,
      dialogVisibleOne: false,
      activeName: "first",
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"
      ],
      currentPage: 10,
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎123",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎232",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎3343",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎dfd",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎dfdf",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎bvbv",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎klk",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      rules: {
        position: [
          { required: true, message: "请填写企业简称", trigger: "blur" }
        ],
        logo: [{ required: true, message: "请传入LOGO", trigger: "blur" }],
        link: [{ required: true, message: "请选择广告位", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.dialogVisible = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    submitFormOne(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.dialogVisibleOne = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    move() {
      if (this.form.name !== "") {
        this.position = true;
        this.company = true;
      } else if (this.form.name == "") {
        this.position = false;
        this.company = false;
      }
    },
    // 上移按钮
    sortUp(index, row) {
      var that = this;
      console.log("上移", index, row);
      console.log(that.tableData[index]);
      if (index > 0) {
        let upDate = that.tableData[index - 1];
        that.tableData.splice(index - 1, 1);
        that.tableData.splice(index, 0, upDate);
      } else {
        alert("已经是第一条，不可上移");
      }
    },
    // 下移按钮
    sortDown(index, row) {
      var that = this;
      console.log("下移", index, row);
      if (index + 1 === that.tableData.length) {
        alert("已经是最后一条，不可下移");
      } else {
        console.log(index);
        let downDate = that.tableData[index + 1];
        that.tableData.splice(index + 1, 1);
        that.tableData.splice(index, 0, downDate);
      }
    },
    keep() {
      this.dialogVisible = true;
    },
    handleClick() {
      this.dialogVisibleOne = true;
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号"
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
        },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        {
          value: "豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1685号"
        },
        {
          value: "茶芝兰（奶茶，手抓饼）",
          address: "上海市普陀区同普路1435号"
        },
        { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
        { value: "星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
        { value: "阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
        { value: "新麦甜四季甜品炸鸡", address: "嘉定区曹安公路2383弄55号" },
        {
          value: "Monica摩托主题咖啡店",
          address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
        },
        {
          value: "浮生若茶（凌空soho店）",
          address: "上海长宁区金钟路968号9号楼地下一层"
        },
        { value: "NONO JUICE  鲜榨果汁", address: "上海市长宁区天山西路119号" },
        { value: "CoCo都可(北新泾店）", address: "上海市长宁区仙霞西路" },
        {
          value: "快乐柠檬（神州智慧店）",
          address: "上海市长宁区天山西路567号1层R117号店铺"
        },
        {
          value: "Merci Paul cafe",
          address: "上海市普陀区光复西路丹巴路28弄6号楼819"
        },
        {
          value: "猫山王（西郊百联店）",
          address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
        },
        { value: "枪会山", address: "上海市普陀区棕榈路" },
        { value: "纵食", address: "元丰天山花园(东门) 双流路267号" },
        { value: "钱记", address: "上海市长宁区天山西路" },
        { value: "壹杯加", address: "上海市长宁区通协路" },
        {
          value: "唦哇嘀咖",
          address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
        },
        { value: "爱茜茜里(西郊百联)", address: "长宁区仙霞西路88号1305室" },
        {
          value: "爱茜茜里(近铁广场)",
          address:
            "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
        },
        {
          value: "鲜果榨汁（金沙江路和美广店）",
          address: "普陀区金沙江路2239号金沙和美广场B1-10-6"
        },
        {
          value: "开心丽果（缤谷店）",
          address: "上海市长宁区威宁路天山路341号"
        },
        { value: "超级鸡车（丰庄路店）", address: "上海市嘉定区丰庄路240号" },
        { value: "妙生活果园（北新泾店）", address: "长宁区新渔路144号" },
        { value: "香宜度麻辣香锅", address: "长宁区淞虹路148号" },
        {
          value: "凡仔汉堡（老真北路店）",
          address: "上海市普陀区老真北路160号"
        },
        { value: "港式小铺", address: "上海市长宁区金钟路968号15楼15-105室" },
        { value: "蜀香源麻辣香锅（剑河路店）", address: "剑河路443-1" },
        { value: "北京饺子馆", address: "长宁区北新泾街道天山西路490-1号" },
        {
          value: "饭典*新简餐（凌空SOHO店）",
          address: "上海市长宁区金钟路968号9号楼地下一层9-83室"
        },
        {
          value: "焦耳·川式快餐（金钟路店）",
          address: "上海市金钟路633号地下一层甲部"
        },
        { value: "动力鸡车", address: "长宁区仙霞西路299弄3号101B" },
        { value: "浏阳蒸菜", address: "天山西路430号" },
        { value: "四海游龙（天山西路店）", address: "上海市长宁区天山西路" },
        {
          value: "樱花食堂（凌空店）",
          address: "上海市长宁区金钟路968号15楼15-105室"
        },
        { value: "壹分米客家传统调制米粉(天山店)", address: "天山西路428号" },
        {
          value: "福荣祥烧腊（平溪路店）",
          address: "上海市长宁区协和路福泉路255弄57-73号"
        },
        {
          value: "速记黄焖鸡米饭",
          address: "上海市长宁区北新泾街道金钟路180号1层01号摊位"
        },
        { value: "红辣椒麻辣烫", address: "上海市长宁区天山西路492号" },
        {
          value: "(小杨生煎)西郊百联餐厅",
          address: "长宁区仙霞西路88号百联2楼"
        },
        { value: "阳阳麻辣烫", address: "天山西路389号" },
        {
          value: "南拳妈妈龙虾盖浇饭",
          address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
        }
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted: function() {
    this.restaurants = this.loadAll();
  },
  updated: function() {}
};
</script>
<style scoped>
.asp {
  width: 100%;
  background: #F8F8F8;
  border:1px solid #F8F8F8;
}
.asp-nav {
  margin: 40px 0 0 20px;
  font-size: 18px;
  color:#2A2A2A;
  text-align: left
}
.asp-content {
  width: 100%;
  margin: 20px 0 0 0;
  background: #F8F8F8;
}
.asp-form {
  width: 98%;
  margin: 10px 0 0 1%;
  border:1px solid #F8F8F8;
}
.el-form-item {
  padding: 10px 0 0 20px;
}
.el-select {
  width: 203px;
}
.asp-table {
  width: 100%;
  background: #ffffff;
  margin: 10px 0 0 0
}
.el-checkbox__label {
  font-size: 10px;
}
.el-checkbox {
  margin: 10px 0 0 20px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>
<style>
.el-pagination {
  padding: 0 0 20px 0;
  text-align: center
}
</style>