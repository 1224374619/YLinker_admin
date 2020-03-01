<template>
  <div class="asp">
    <div class="asp-nav">企业基础信息审核</div>
    <el-dialog
      title="请填写通过理由"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div>
        <div style="margin:-40px 0 0 0"></div>
        <el-divider></el-divider>
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
        <el-divider style="margin:0 0 0 0"></el-divider>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="DialogAffirm()">确 定</el-button>
        </span>
      </div>
    </el-dialog>
    <div class="asp-content">
      <div class="asp-form">
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
          style="background:#ffffff;width:98%;margin:0 0 0 13px"
        >
          <div style="height:15px"></div>
          <el-form-item label="企业名称">
            <el-input v-model="formInline.CompanyName" placeholder="企业名称"></el-input>
          </el-form-item>
          <el-form-item label="统一社会信用代码">
            <el-input v-model="formInline.CreditCode" placeholder="统一社会信用代码"></el-input>
          </el-form-item>
          <el-form-item style="float:right;margin:0 5% 0 0">
            <el-button @click="Ressetting()">重置</el-button>
            <el-button type="primary" @click="Inquiry()">查询</el-button>
          </el-form-item>
        </el-form>
        <div class="asp-table">
          <el-tabs
            v-model="activeName"
            type="card"
            @tab-click="handleClicktab"
            style="width:1084px;margin:20px auto"
          >
            <el-tab-pane :label="`待审核（${this.page.total}）`" name="first">
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="100"></el-table-column>
                <el-table-column prop="companyId" label="企业ID"></el-table-column>
                <el-table-column prop="fullName" label="企业名称"></el-table-column>
                <el-table-column prop  label="所属行业" show-overflow-tooltip></el-table-column>
                <el-table-column prop="updatedTime"  label="提交时间" show-overflow-tooltip>
                  <template slot-scope="scope">{{ scope.row.updatedTime | formatDate}}</template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <!-- <el-button @click="DefineFirst(scope.row)" type="text" size="small">通过</el-button>
                    <el-tooltip class="item" effect="light" placement="bottom-start">
                      <div slot="content">
                        <span>
                          <i style="color:#faad14;margin:0 5px 0 0" class="el-icon-warning-outline"></i>
                        </span>
                        <span>请选择不通过的原因</span>
                        <div style="font-size:10px">
                          <el-checkbox-group v-model="checkList">
                            <el-checkbox label="含虚假信息"></el-checkbox>
                            <br />
                            <el-checkbox label="含违法信息"></el-checkbox>
                            <br />
                            <el-checkbox label="非法传销"></el-checkbox>
                            <br />
                            <el-checkbox label="涉黄"></el-checkbox>
                            <br />
                            <el-checkbox label="涉嫌诈骗"></el-checkbox>
                          </el-checkbox-group>
                          <br />
                          <el-button style="width:50px;height:20px;font-size:10px;padding:0 0">取消</el-button>
                          <el-button
                            @click="Define(scope.row)"
                            style="width:50px;height:20px;font-size:10px;padding:0 0"
                            type="primary"
                          >确认</el-button>
                        </div>
                      </div>
                      <el-button type="text" size="small">未通过</el-button>
                    </el-tooltip>-->
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
            </el-tab-pane>
            <el-tab-pane :label="`通过（${this.page1.total}）`" name="second">
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="100"></el-table-column>
                <el-table-column prop="id" label="企业ID"></el-table-column>
                <el-table-column prop="fullName" label="企业名称"></el-table-column>
                <el-table-column prop="address" sortable label="所属行业" show-overflow-tooltip></el-table-column>
                <el-table-column prop="updatedTime" sortable label="提交时间" show-overflow-tooltip>
                  <template slot-scope="scope">{{ scope.row.updatedTime | formatDate}}</template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
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
            </el-tab-pane>
            <el-tab-pane :label="`不通过（${this.page2.total}）`" name="third">
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="100"></el-table-column>
                <el-table-column prop="id" label="企业ID"></el-table-column>
                <el-table-column prop="fullName" label="企业名称"></el-table-column>
                <el-table-column prop="address" sortable label="所属行业" show-overflow-tooltip></el-table-column>
                <el-table-column prop="updatedTime" sortable label="提交时间" show-overflow-tooltip>
                  <template slot-scope="scope">{{ scope.row.updatedTime | formatDate}}</template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <!-- <el-button type="text" @click="keep(scope.row)" size="small">通过</el-button> -->
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
            </el-tab-pane>
          </el-tabs>
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
        CompanyName: "",
        CreditCode: ""
      },
      page: {
        total: 0,
        pageSize: 10,
        current: 1,
        pageSizeOpts: [10, 20, 30]
      },
      page1: {
        total: 0,
        pageSize: 10,
        current: 1,
        pageSizeOpts: [10, 20, 30]
      },
      page2: {
        total: 0,
        pageSize: 10,
        current: 1,
        pageSizeOpts: [10, 20, 30]
      },
      checkList: [],
      dialogVisible: false,
      activeName: "first",
      currentPage: 4,
      textarea: "",
      tableData: [
        {
          id: "2016-05-03",
          fullName: "王小虎123",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: [],
      companyId: "",
      id: ""
    };
  },
  methods: {
    //未审核未通过
    Define(tab, event) {
      this.$http
        .put(`/reviewed/company/${tab.companyId}/info/${tab.id}/notPass`, {
          reason: this.checkList[0]
        })
        .then(res => {
          if (res.data.code == 200) {
            this.ReviewCompany();
          }
        })
        .catch(error => {
          // this.$message({
          //       message:error.response.data.message,
          //       type: 'error'
          //     })
        });
        
    },
    //未审核通过
    DefineFirst(tab, event) {
      this.$http
        .put(`/reviewed/company/${tab.companyId}/info/${tab.id}/pass`)
        .then(res => {
          if (res.data.code == 200) {
            this.ReviewCompany();
          }
        })
        .catch(error => {
          // this.$message({
          //       message:error.response.data.message,
          //       type: 'error'
          //     })
        });
    },
    //企业基本信息审核
    ReviewCompany() {
      this.$http
        .get("/reviewed/company/info", { params: { reviewedState: 1 } })
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
        this.$http
        .get("/reviewed/company/info", { params: { reviewedState: 2 } })
        .then(res => {
          if (res.data.code == 200) {
            this.tableData = res.data.data.list;
            this.page1.total = res.data.data.total;
          }
        })
        .catch(error => {
          // this.$message({
          //       message:error.response.data.message,
          //       type: 'error'
          //     })
        });
        this.$http
        .get("/reviewed/company/info", { params: { reviewedState: 3 } })
        .then(res => {
          if (res.data.code == 200) {
            this.tableData = res.data.data.list;
            this.page2.total = res.data.data.total;
          }
        })
        .catch(error => {
          // this.$message({
          //       message:error.response.data.message,
          //       type: 'error'
          //     })
        });
    },
    //tabs 查看
    handleClicktab(tab, event) {
      let tabValue = tab.name;
      if (tabValue === "first") {
        this.$http
          .get("/reviewed/company/info", { params: { reviewedState: 1 } })
          .then(res => {
            if (res.data.code == 200) {
              this.tableData = res.data.data.list;
              this.page.total = res.data.data.total;
            }
          })
          .catch(error => {
            this.$message({
              message: error.response.data.message,
              type: "error"
            });
          });
      } else if (tabValue === "second") {
        this.$http
          .get("/reviewed/company/info", { params: { reviewedState: 2 } })
          .then(res => {
            if (res.data.code == 200) {
              this.tableData = res.data.data.list;
              this.page1.total = res.data.data.total;
            }
          })
          .catch(error => {
            this.$message({
              message: error.response.data.message,
              type: "error"
            });
          });
      } else {
        this.$http
          .get("/reviewed/company/info", { params: { reviewedState: 3 } })
          .then(res => {
            if (res.data.code == 200) {
              this.tableData = res.data.data.list;
              this.page2.total = res.data.data.total;
            }
          })
          .catch(error => {
            this.$message({
              message: error.response.data.message,
              type: "error"
            });
          });
      }
    },
    //重置
    Ressetting() {
      this.formInline.CompanyName = "";
      this.formInline.CreditCode = "";
    },
    //查询
    Inquiry() {
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
    //弹框确认
    DialogAffirm() {
      this.$http
        .put(`/reviewed/company/${this.companyId}/info/${this.id}/rePass`, {
          reason: this.textarea
        })
        .then(res => {
          if (res.data.code == 200) {
            this.dialogVisible = false;
            this.$http
              .get("/reviewed/company/info", { params: { reviewedState: 3 } })
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
          } else {
          }
        })
        .catch(error => {
          this.$message(error.response.data.message);
        });
    },
    keep(tab, event) {
      this.companyId = tab.companyId;
      this.id = tab.id;
      this.dialogVisible = true;
    },
    handleClick(tab, event) {
      this.$router.push({
        path: "/CompanyInformation/InformationVerify",
        query: {
          thisId: tab.id,
          thatId: tab.companyId
        }
      });
    },
    handle(tab, event) {
      console.log(tab, event);
      this.$router.push({ path: "/Bteam/Enterdetail" });
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
    this.ReviewCompany();
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
.asp-table {
  width: 98%;
  background: #ffffff;
  margin: 10px 0 0 1%;
}
.el-pagination {
  text-align: center;
  margin: 30px auto 0;
}
.el-checkbox__label {
  font-size: 10px;
}
.el-checkbox {
  margin: 10px 0 0 20px;
}
</style>
