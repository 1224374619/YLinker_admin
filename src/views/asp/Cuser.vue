<template>
  <div class="asp">
    <div class="asp-nav">C端用户管理</div>
    <div class="asp-content">
      <div class="asp-form">
        <el-form :inline="true" :model="formInline" label-width="120px" ref="formInline" class="demo-form-inline" style="background:#ffffff;">
          <div style="height:20px"></div>
          <el-form-item label="用户姓名">
            <el-input v-model="formInline.UserName" placeholder="用户姓名"></el-input>
          </el-form-item>
          <el-form-item label="手机账号">
            <el-input v-model="formInline.Phone" placeholder="手机账号"></el-input>
          </el-form-item>
          <el-form-item label="最高学历">
            <el-select v-model="formInline.Record" placeholder="最高学历">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="政治面貌">
            <el-select v-model="formInline.Politic" placeholder="政治面貌">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="用户ID">
            <el-input v-model="formInline.UserID" placeholder="用户ID"></el-input>
          </el-form-item>
          <el-form-item label="工作经验">
            <el-select v-model="formInline.WorkExperience" placeholder="工作经验">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="意向城市">
            <el-select v-model="formInline.City" placeholder="意向城市">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="简历完整度">
            <el-select v-model="formInline.ResumeWhole" placeholder="简历完整度">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="求职状态">
            <el-select v-model="formInline.JobWantedState" placeholder="求职状态">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="简历ID">
            <el-input v-model="formInline.ResumeID" placeholder="简历ID"></el-input>
          </el-form-item>
          <el-form-item label="海外工作经验">
            <el-select v-model="formInline.OverSeas" placeholder="海外工作经验">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="求职意向岗位">
            <el-select v-model="formInline.JobWantedPosition" placeholder="求职意向岗位">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="margin:0 90px 0 0;display: flex;justify-content:flex-end" >
            <el-button style="margin:0 0 30px 0" @click="resetForm()">重置</el-button>
            <el-button type="primary" @click="submitForm()">查询</el-button>
          </el-form-item>
        </el-form>
        <div class="asp-table">
          <div style="margin:30px 0 0 30px">
            <el-button @click="toggleSelection()">批量下载简历</el-button>
          </div>
          <div style="margin:20px 0 0 0">
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width:1084px;margin:0 auto"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="60"></el-table-column>
              <el-table-column label="日期" width="100">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="name" label="姓名" ></el-table-column>
              <el-table-column prop="address" label="用户ID" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="所在城市" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="求职状态" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address"  label="简历完整度" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address"  label="投递数量" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address"  label="最近登录时间" show-overflow-tooltip></el-table-column>
              <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">禁止登录</el-button>
                  <el-button type="text" size="small">禁止投递</el-button>
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
      formInline:{
        UserName:'',
        Phone:'',
        Record:'',
        Politic:'',
        UserID:'',
        WorkExperience:'',
        City:'',
        ResumeWhole:'',
        JobWantedState:'',
        ResumeID:'',
        OverSeas:'',
        JobWantedPosition:'',

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
      multipleSelection: []
    };
  },
  methods: {
    //重置
     resetForm() {
        this.formInline.UserName = "";
        this.formInline.Phone = "";
        this.formInline.Record = "";
        this.formInline.Politic = "";
        this.formInline.UserID = "";
        this.formInline.OverSeas = "";
        this.formInline.WorkExperience = "";
        this.formInline.City = "";
        this.formInline.ResumeWhole = "";
        this.formInline.JobWantedState = "";
        this.formInline.ResumeID = "";
        this.formInline.JobWantedPosition = "";
      },
    //查询
    submitForm() {
      this.$http
        .post("", {
          
        })
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
      this.$refs.multipleTable.toggleAllSelection();
      // if (rows) {
      //   rows.forEach(row => {
      //     alert(1121)
      //     this.$refs.multipleTable.toggleAllSelection(row);
      //   });
      // } else {
      //   alert(11211)
      //   this.$refs.multipleTable.clearSelection();
      // }
    },
    handleClick(tab, event) {
      console.log(tab, event);
     this.$router.push({path:'/Cteam/Resume'})
    },
    handleSelectionChange(val) {
      console.log(val)
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
  border:1px solid #F8F8F8;
  background: #ffffff;
  margin: 10px 0 0 0;
  .el-table th {
    background: #F0F0F0;
  }
}
.el-pagination{
    margin: 20px 0 0 0;
    padding: 0 0 20px 0;
    text-align:center 
}
</style>