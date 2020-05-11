<template>
  <div class="asp">
    <div class="asp-nav">角色管理</div>
    <el-dialog
      title="请填写通过理由"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
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
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
          ref="formInline"
          style="background:#ffffff;width:98%;margin:0 0 0 13px"
        >
          <div style="height:15px"></div>
          <el-form-item label="角色" prop="role">
            <el-input v-model="formInline.role" placeholder="请输入角色"></el-input>
          </el-form-item>
          <el-form-item style="margin:0 5% 0 0">
            <el-button @click="resetForm('formInline')">重置</el-button>
            <el-button type="primary" @click="submitForm('formInline')">查询</el-button>
          </el-form-item>
          <br />
          <el-form-item style="display: flex;justify-content:flex-end;margin:0 0 30px 0">
            <el-button style="margin:0 90px 30px 0" type="primary" @click="newsInfor">新建角色</el-button>
          </el-form-item>
        </el-form>
        <div class="asp-table">
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width:1084px;margin:20px auto"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="100px"></el-table-column>
            <el-table-column prop="id" label="角色类型"></el-table-column>
            <el-table-column prop="title" label="权限摘要"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button @click="CheckhandleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button @click="CheckhandleClick(scope.row)" type="text" size="small">编辑</el-button>
                <el-button @click="open" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.current"
            :page-sizes="page.pageSizeOpts"
            :page-size="page.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="page.total"
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
      formInline: {
        role: ""
      },
      page: {
        total: 0,
        pageSize: 10,
        current: 1,
        pageSizeOpts: [10, 20, 30]
      },
      checkList: ["复选框 A"],
      dialogVisible: false,
      activeName: "first",
      currentPage: 4,
      tableData: [
        {
          id: "1312",
          title: "1312"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    open() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    newsInfor() {
      this.$router.push({ path: "/NewRole" });
    },
    keep() {
      this.dialogVisible = true;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //查看
    CheckhandleClick(e) {
      this.$router.push({
        path: "/roleDetail",
        // query: {
        //   thisId: e.id
        // }
      });
    },
    //全部
    Message() {
      this.$http
        .get("/sysmsg")
        .then(res => {
          if (res.data.code == 200) {
            this.tableData = res.data.data.list;
            this.page.total = res.data.data.total;
          }
        })
        .catch(error => {
          // this.$message({
          //       message:error.response.data.message,
          //       type: 'error'
          //     })
        });
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
      this.page.current = val;
      let params = {
        pageNum: this.page.current,
        pageSize: this.page.pageSize
      };
      this.$http
        .get("/sysmsg", { params: params })
        .then(res => {
          if (res.data.code == 200) {
            this.tableData = res.data.data.list;
            this.page.total = res.data.data.total;
          }
        })
        .catch(error => {
          // this.$message({
          //       message:error.response.data.message,
          //       type: 'error'
          //     })
        });
      positionlist(this.companId, params).then(res => {
        if (res.data.code == 200) {
          this.tableData = res.data.data.list;
          this.page.total = res.data.data.total;
          var time = this.tableData[0].publishedTime;
          this.changeTime(time);
        }
      });
    },
    submitForm() {
      this.$http
        .get("/sysmsg", {
          params: {
            title:
              this.formInline.Infortitle === ""
                ? null
                : this.formInline.Infortitle,
            accept:
              this.formInline.person === "" ? null : this.formInline.person
          }
        })
        .then(res => {
          if (res.data.code == 200) {
            this.tableData = res.data.data.list;
            this.page.total = res.data.data.total;
          }
        })
        .catch(error => {
          // this.$message({
          //       message:error.response.data.message,
          //       type: 'error'
          //     })
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted: function() {},
  updated: function() {},
  created() {
    // this.Message()
  }
};
</script>
<style scoped>
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
  width: 100%;
  margin: 10px 0 0 0;
  border: 1px solid #f8f8f8;
}
.el-form-item {
  padding: 10px 0 0 20px;
}
.el-select {
  width: 203px;
}
.el-pagination {
  text-align: center;
  margin: 30px auto 0;
}
.asp-table {
  width: 98%;
  background: #ffffff;
  margin: -10px 0 0 1%;
}
.el-checkbox__label {
  font-size: 10px;
}
.el-checkbox {
  margin: 10px 0 0 20px;
}
</style>