<template>
  <div class="asp">
    <div class="asp-nav">消息中心</div>
    <el-dialog
      title="请填写通过理由"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <div>
        <div style="margin:-40px 0 0 0"></div>

        <el-input
          type="textarea"
          style="margin:30px 0 0 0"
          :rows="2"
          placeholder="请输入内容"
          v-model="textarea"
        ></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false" style="margin:30px 0 0 0">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </div>
    </el-dialog>
    <div class="asp-content">
      <div class="asp-form">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="消息ID">
            <el-input placeholder="消息ID"></el-input>
          </el-form-item>
          <el-form-item label="消息标题">
            <el-select placeholder="消息标题" filterable>
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="操作员">
            <el-select placeholder="操作员">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="float:right;margin:0 5% 0 0">
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
          </el-form-item>
        </el-form>
        <div style="float:right;margin:0 5% 0 0"><el-button type="primary" @click="newsInfor">新建消息</el-button></div>
        <div class="asp-table">
          <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="100px"></el-table-column>
                <el-table-column prop="name" label="消息ID"></el-table-column>
                <el-table-column prop="name" label="消息标题"></el-table-column>
                <el-table-column prop="address" label="操作员" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="操作时间" show-overflow-tooltip></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button @click="CheckhandleClick(scope.row)" type="text" size="small">查看</el-button>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkList: ["复选框 A"],
      dialogVisible: false,
      activeName: "first",
      currentPage: 4,
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    //初始化列表数据
    tidings() {
     
    },
    newsInfor() {
      this.$router.push({path:'/NewsMessage'})
    },
    keep() {
      this.dialogVisible = true;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //查看
    CheckhandleClick() {
      this.$router.push({path:'/MessageDetail'})
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
    }
  },
  mounted: function() {},
  updated: function() {},
  created() {
    this.$axios.get('/sysmsg').then(res => {
          if (res.data.code == 200) {
          }
        }).catch(error =>{
          this.$message({
                message:error.response.data.message,
                type: 'error'
              })
        });
  }
};
</script>
<style scoped>
.asp {
  width: 100%;
}
.asp-nav {
  margin: 10px 0 0 0;
  font-size: 17px;
  font-weight: 550;
}
.asp-content {
  width: 100%;
  margin: 20px 0 0 0;
  border: 1px solid #efeff3;
  background: #efeff3;
}
.asp-form {
  width: 98%;
  background: #ffffff;
  margin: 10px 0 0 1%;
  border: 1px solid #efeff3
}
.el-form-item {
  padding: 10px 0 0 20px;
}
.el-select {
  width: 203px;
}
.el-pagination {
  width: 525px;
  margin: 20px auto;
}
.asp-table {
  width: 98%;
  background: #ffffff;
  margin: 10px 0 0 1%;
}
.el-checkbox__label {
  font-size: 10px;
}
.el-checkbox {
  margin: 10px 0 0 20px;
}
</style>