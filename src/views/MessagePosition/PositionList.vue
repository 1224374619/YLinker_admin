<template>
  <div class="asp">
    <div class="asp-nav">职位列表</div>
    <div class="asp-content">
      <el-dialog
        title
        :show-close="false"
        :append-to-body="true"
        :visible.sync="dialogVisible"
        width="25%"
        :before-close="handleClose"
      >
        <div style="display:none">
          <div class="loading">
            <i style="font-size:60px;color:#20A0ff;" class="el-icon-loading"></i>
          </div>
          <div class="loading-text">正在导入中...</div>
        </div>
        <div style="display:none">
          <div class="loading">
            <i style="font-size:60px;color:#00C243;" class="el-icon-success"></i>
          </div>
          <div class="loading-text">公司/职位导入成功</div>
          <div style="text-align:center">
            <el-button style="width:93px;height:33px;line-height:0px" type="primary">确定</el-button>
          </div>
        </div>
      </el-dialog>
      <el-dialog
        title="导入失败"
        :show-close="false"
        :append-to-body="true"
        :visible.sync="dialogVisibles"
        width="25%"
        :before-close="handleClose"
      >
        <div>
          <div>
            <i style="font-size:19px;color:#ff503b" class="el-icon-circle-close"></i>
            <span style="color:#373737;font-size:16px;margin:0 0 0 6px">以下公司职位导入失败：</span>
          </div>
          <div class="outcompany">
            <div style="font-size:16px">1.腾讯公司</div>
            <div style="font-size:16px">2.腾讯公司</div>
            <div style="font-size:16px">3.腾讯公司</div>
            <div style="font-size:16px">4.腾讯公司</div>
          </div>
          <div style="text-align:center;margin:30px 0 0 0">
            <el-button style="width:93px;height:33px;line-height:0px" type="primary">确定</el-button>
          </div>
        </div>
      </el-dialog>
      <div class="asp-form">
        <el-form
          :inline="true"
          :model="formInline"
          label-width="130px"
          ref="formInline"
          class="demo-form-inline"
          style="background:#ffffff;"
        >
          <div style="height:20px"></div>
          <el-form-item label="职位名称">
            <el-input v-model="formInline.positionName" placeholder="职位名称"></el-input>
          </el-form-item>
          <el-form-item label="职位状态">
            <el-select v-model="formInline.state" placeholder="职位状态">
              <el-option label="已上线" value="shanghai"></el-option>
              <el-option label="招聘中" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发布人">
            <el-select filterable v-model="formInline.popName" placeholder="发布人">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="公司名称">
            <el-input v-model="formInline.companyName" placeholder="公司名称"></el-input>
          </el-form-item>
          <el-form-item label="薪资范围">
            <el-select v-model="formInline.salary" placeholder="薪资范围">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="margin:0 90px 0 0;display: flex;justify-content:flex-end">
            <el-button style="margin:0 0 30px 0" @click="resetForm()">重置</el-button>
            <el-button type="primary" @click="submitForm()">查询</el-button>
          </el-form-item>
        </el-form>
        <div class="asp-table">
          <div style="margin:30px 0 30px 30px">
            <el-button type="primary" @click="toggleSelection()">导入职位</el-button>
          </div>
          <div>
            <el-table
              :data="tableData"
              tooltip-effect="dark"
              style="width:1084px;margin:0 auto"
              @selection-change="handleSelectionChange"
            >
              <!-- <el-table-column type="selection" width="60"></el-table-column> -->
              <!-- <el-table-column label="日期" width="100">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>-->
              <!-- <el-table-column prop="name" label="姓名"></el-table-column> -->
              <el-table-column prop="address" label="职位名称" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="职位性质" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="公司名称" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="工作地点" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="薪资范围" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="投递数量" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="状态" show-overflow-tooltip></el-table-column>
              <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                  <el-button
                    style="color:#FF4F4E"
                    @click="position(scope.row)"
                    type="text"
                    size="small"
                  >删除</el-button>
                  <el-button style="color:#FF4F4E" type="text" size="small">上架</el-button>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      dialogVisibles: false,
      formInline: {
        positionName: "",
        state: "",
        popName: "",
        companyName:'',
        salary:''
      },
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
      options: [
        {
          value: "0",
          label: "1K以下"
        },
        {
          value: "1",
          label: "1K-2K"
        },
        {
          value: "2",
          label: "2K-4K"
        },
        {
          value: "3",
          label: "4K-6K"
        },
        {
          value: "4",
          label: "6K-8K"
        },
        {
          value: "5",
          label: "6K-8K"
        },
        {
          value: "6",
          label: "8K-10K"
        },
        {
          value: "7",
          label: "10K-15K"
        },
        {
          value: "8",
          label: "15K-25K"
        },
        {
          value: "9",
          label: "25K-35K"
        },
        {
          value: "10",
          label: "35K以上"
        },
      ],
      multipleSelection: []
    };
  },
  methods: {
    //重置
    resetForm() {
      this.formInline.positionName = "";
      this.formInline.state = "";
      this.formInline.popName = "";
      this.formInline.companyName = "";
      this.formInline.salary = "";
    },
    //查询
    submitForm() {
      this.$http
        .post("", {})
        .then(res => {
          if (res.data.code == 200) {
          } else {
          }
        })
        .catch(error => {
          this.$message(error.response.data.message);
        });
    },
    toggleSelection() {
      this.dialogVisibles = true;
      this.$refs.multipleTable.toggleAllSelection();
    },
    position() {
      this.$router.push({ path: "/MePosition" });
    },
    handleClick(tab, event) {
      console.log(tab, event);
      this.$router.push({ path: "/Cteam/Resume" });
    },
    handleSelectionChange(val) {
      console.log(val);
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
  updated: function() {}
};
</script>
<style lang="scss">
.asp {
  width: 100%;
  background: #f8f8f8;
  border: 1px solid #f8f8f8;
}
.asp-nav {
  margin: 40px 0 0 20px;
  font-size: 18px;
  color: #2a2a2a;
  text-align: left;
}
.asp-content {
  width: 100%;
  margin: 20px 0 20px 0;
  background: #f8f8f8;
}
.asp-form {
  width: 98%;
  margin: 10px 0 0 1%;
  border: 1px solid #f8f8f8;
}
.el-form-item {
  padding: 10px 0 0 20px;
}
.el-select {
  width: 203px;
}
.asp-table {
  width: 100%;
  border: 1px solid #f8f8f8;
  background: #ffffff;
  margin: 10px 0 0 0;
  .el-table th {
    background: #f0f0f0;
  }
}
.el-pagination {
  margin: 20px 0 0 0;
  padding: 0 0 20px 0;
  text-align: center;
}
.loading {
  text-align: center;
  margin: -40px 0 0 0;
}
.loading-text {
  font-size: 24px;
  color: #222222;
  text-align: center;
  margin: 30px 0 30px 0;
  font-weight: bold;
}
.el-dialog__header {
  padding: 20px 20px 10px;
  text-align: center;
  color: #222;
  font-size: 22px;
  font-weight: bold;
}
.outcompany {
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 20px 0 0 0;
  overflow-x: hidden;
}
.outcompany div {
  padding: 10px 0 0 10px;
}
</style>