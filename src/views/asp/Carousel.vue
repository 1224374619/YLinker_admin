<template>
  <div class="asp">
    <div class="asp-nav">首页轮播管理</div>
    <div class="asp-content">
      <div class="asp-form">
        <div class="asp-table">
          <el-form :inline="true" :model="formInline" class="demo-form-inline" style="margin:20px 0 0 10px">
            <el-form-item label="轮播状态">
              <el-select placeholder="轮播状态" v-model="state">
                <el-option label="全部" value="全部"></el-option>
                <el-option label="已下架" value="已下架"></el-option>
                <el-option label="已上架" value="已上架"></el-option>
                <el-option label="待上架" value="待上架"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item style="float:right;margin:0 30px 0 0">
              <el-button  type="primary" @click="dialogVisible = true">新建轮播</el-button>
            </el-form-item>
          </el-form>
          <el-table
            :data="tableData"
            tooltip-effect="dark"
            style="width:1084px;margin:20px auto"
            @selection-change="handleSelectionChange"
          >
            <el-table-column prop="name" label="ID" width="120"></el-table-column>
            <el-table-column prop="date" label="标题" width="120"></el-table-column>
            <el-table-column prop="img" label="图片" show-overflow-tooltip>
              <template>
                <el-image
                  style="width: 100px; height: 100px"
                  :src="this.url"
                  :preview-src-list="srcList"
                ></el-image>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="调转地址" show-overflow-tooltip></el-table-column>
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
    <el-dialog title="新建轮播" :visible.sync="dialogVisible" width="480px" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="轮播标题" prop="name">
          <el-input v-model="form.name" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="配图">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div>建议尺寸100*100 px (待定)</div>
        </el-form-item>
        <el-form-item label="跳转内容">
          <el-select v-model="form.region" @change="move" style="width:300px" placeholder="请选择跳转内容">
            <el-option label="不跳转" value="不跳转"></el-option>
            <el-option label="职位" value="职位"></el-option>
            <el-option label="企业" value="企业"></el-option>
            <el-option label="链接URL" value="链接URL"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职位ID" v-if="position" prop="position">
          <el-input v-model="form.position" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="企业ID" v-if="company" prop="company">
          <el-input v-model="form.company" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="链接" v-if="link" prop="link">
          <el-input v-model="form.link" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogVisible = false">关 闭</el-button>
          <el-button type="primary" @click="submitForm('form')">保 存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="编辑轮播" :visible.sync="dialogVisibleOne" width="480px" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="轮播标题" prop="name">
          <el-input v-model="form.name" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="配图">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div>建议尺寸100*100 px (待定)</div>
        </el-form-item>
        <el-form-item label="跳转内容">
          <el-select v-model="form.region" @change="move" style="width:300px" placeholder="请选择跳转内容">
            <el-option label="不跳转" value="不跳转"></el-option>
            <el-option label="职位" value="职位"></el-option>
            <el-option label="企业" value="企业"></el-option>
            <el-option label="链接URL" value="链接URL"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职位ID" v-if="position" prop="position">
          <el-input v-model="form.position" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="企业ID" v-if="company" prop="company">
          <el-input v-model="form.company" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="链接" v-if="link" prop="link">
          <el-input v-model="form.link" style="width:300px"></el-input>
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
      state:'',
      position: "",
      company: "",
      link: "",
      checkList: ["复选框 A"],
      dialogVisible: false,
      dialogVisibleOne:false,
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
          { required: true, message: "请填写职位ID", trigger: "blur" }
        ],
        company: [{ required: true, message: "请填写企业ID", trigger: "blur" }],
        link: [{ required: true, message: "请填写URL", trigger: "blur" }],
        name: [{ required: true, message: "请填写标题", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
        this.dialogVisible = false
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    submitFormOne(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
        this.dialogVisibleOne = false
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    move() {
      if (this.form.region == "职位") {
        this.position = true;
        this.company = false;
        this.link = false;
      } else if (this.form.region == "企业") {
        this.position = false;
        this.company = true;
        this.link = false;
      } else if (this.form.region == "链接URL") {
        this.position = false;
        this.company = false;
        this.link = true;
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
    }
  },
  mounted: function() {},
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
  margin: 10px 0 0 0;
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