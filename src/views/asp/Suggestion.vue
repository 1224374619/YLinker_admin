<template>
  <div class="asp">
    <div class="asp-nav">投诉建议管理</div>
    <div class="asp-content">
      <div class="asp-form">
        <el-form :inline="true" :model="formInline" class="demo-form-inline" style="background:#ffffff;width:98%;margin:0 0 0 13px">
          <div style="height:15px"></div>
          <el-form-item label="来源">
            <el-select placeholder="轮播状态">
              <el-option label="全部" value="全部"></el-option>
              <el-option label="B端" value="B端"></el-option>
              <el-option label="C端" value="C端"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态">
            <el-select placeholder="轮播状态">
              <el-option label="全部" value="全部"></el-option>
              <el-option label="待处理" value="待处理"></el-option>
              <el-option label="已处理" value="已处理"></el-option>
              <el-option label="处理中" value="处理中"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="asp-table">
          <el-table
            :data="tableData"
            tooltip-effect="dark"
            style="width:1084px;margin:20px auto"
            @selection-change="handleSelectionChange"
            @row-click="next" 
          >
            <el-table-column prop="name" label="ID"></el-table-column>
            <el-table-column prop="date" label="投诉建议内容"></el-table-column>
            <el-table-column prop="address" label="反馈人" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="来源" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="状态" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="反馈时间" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="最近处理时间" show-overflow-tooltip></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">处理</el-button>
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
    <el-dialog :visible.sync="dialogVisibleOne" width="750px" :before-close="handleClose">
      <div class="sugg">
        <div class="suggestion">
          <div>ID:123123</div>
          <div>反馈人:123123</div>
          <div>来源:123123</div>
          <div>反馈时间:2019-09-01 16：40：09</div>
          <div>投诉建议:字数太多字数太多字数太多字数太多字数太多字数太多字数太多字数太多字数太多字数太多字数太多字数太多字数太多字数太多字数太多字数太多字数太多</div>
          <div>
            <el-image style="width: 100px; height: 100px;" :preview-src-list="srcList" :src="url" :fit="fit"></el-image>
            <el-image style="width: 100px; height: 100px;margin:0 0 0 40px" :preview-src-list="srcList" :src="url" :fit="fit"></el-image>
            <el-image style="width: 100px; height: 100px;margin:0 0 0 40px" :preview-src-list="srcList" :src="url" :fit="fit"></el-image>
          </div>
          <el-form ref="ruleForm" :model="ruleForm" label-width="100px" :rules="rulesOne">
            <div style="margin:0 0 0 0">处理跟进</div>
            <el-form-item label="处理状态:" prop="state" style="margin:-0 0 0 -20px">
              <el-select v-model="ruleForm.state" style="width:400px;margin:-10px 0 0 0">
                <el-option label="待处理" value="待处理"></el-option>
                <el-option label="已处理" value="已处理"></el-option>
                <el-option label="处理中" value="处理中"></el-option>
              </el-select>
            </el-form-item><br>
            <el-form-item label="备注:" prop="remarks" style="margin:-0 0 0 -20px">
              <el-input
                type="textarea"
                v-model="ruleForm.remarks"
                style="width:400px;margin:-10px 0 0 0"
                placeholder="请输入处理内容"
              ></el-input>
            </el-form-item><br>
            <el-form-item>
              <el-button type="primary" @click="submitFormOne('ruleForm')">保 存</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div style="margin:-5px 0 0 20px;width:200px;height:500px;overflow-y:scroll;">
          <div>跟进记录：</div>
          <br />
          <div style="font-size:12px">
            <span>2019-09-22 12：22：39</span>
            <br />
            <span>陈熠 修改状态为 待处理</span>
            <br />
            <span>并备注 "hahhhhhha"</span>
          </div>
          <br />
          <div style="font-size:12px">
            <span>2019-09-22 12：22：39</span>
            <br />
            <span>陈熠 修改状态为 待处理</span>
            <br />
            <span>并备注 "hahhhhhha"</span>
          </div>
          <br />
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        remarks: "",
        state:''
      },
      restaurants: [],
      timeout: null,
      dialogVisibleOne: false,
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
      rulesOne: {
        state: [{ required: true, message: "请选择处理状态", trigger: "blur" }],
        remarks: [
          { required: true, message: "请填写备注消息", trigger: "blur" },
          { min: 0, max: 500, message: "最多输入500", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    next() {
      this.dialogVisibleOne = true;
    },
    submitFormOne(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message('保存成功');
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
  text-align: left;
}
.asp-content {
  width: 100%;
  margin: 20px 0 20px 0;
  background: #F8F8F8;
}
.asp-form {
  width: 100%;
  margin: 10px 0 0 0;
  border:1px solid #F8F8F8
}
.el-form-item {
  padding: 10px 0 0 20px;
}
.el-select {
  width: 203px;
}
.asp-table {
  width: 98%;
  background: #ffffff;
  margin: 10px 0 0 1%;
}
.el-pagination {
  text-align: center; 
  margin:30px auto 0;
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
.suggestion {
  width: 500px;
  margin: -25px 0 0 25px;
}
.suggestion div {
  padding: 10px 0 0 0;
}
.sugg {
  display: flex;
  flex-direction: row;
}
</style>