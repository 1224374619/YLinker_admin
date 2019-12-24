<template>
  <div class="asp">
    <!-- <div class="asp-nav">C端用户管理</div>
    <div class="asp-content">
      <div class="asp-form">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="用户姓名">
            <el-input placeholder="用户姓名"></el-input>
          </el-form-item>
          <el-form-item label="手机账号">
            <el-input placeholder="手机账号"></el-input>
          </el-form-item>
          <el-form-item label="最高学历">
            <el-select placeholder="最高学历">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="政治面貌">
            <el-select placeholder="政治面貌">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="用户ID">
            <el-input placeholder="用户ID"></el-input>
          </el-form-item>
          <el-form-item label="工作经验">
            <el-select placeholder="工作经验">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="意向城市">
            <el-select placeholder="意向城市">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="简历完整度">
            <el-select placeholder="简历完整度">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="求职状态">
            <el-select placeholder="求职状态">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="简历ID">
            <el-input placeholder="简历ID"></el-input>
          </el-form-item>
          <el-form-item label="海外工作经验">
            <el-select placeholder="海外工作经验">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="求职意向岗位">
            <el-select placeholder="求职意向岗位">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="float:right;margin:0 90px 0 0">
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
          </el-form-item>
        </el-form>
        <div class="asp-table">
          <div style="margin:10px 0 0 0">
            <el-button>批量下载简历</el-button>
          </div>
          <div style="margin:20px 0 0 0">
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="120"></el-table-column>
              <el-table-column label="日期" width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="name" label="姓名" ></el-table-column>
              <el-table-column prop="address" label="用户ID" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="所在城市" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="求职状态" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" sortable label="简历完整度" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" sortable label="投递数量" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" sortable label="最近登录时间" show-overflow-tooltip></el-table-column>
              <el-table-column label="操作" width="220">
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
    </div> -->
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
     this.$router.push({path:'/Cteam/Resume'})
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
  updated: function() {}
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
.el-pagination{
    margin: 20px 0 0 400px;
    padding: 0 0 20px 0 
}
</style>