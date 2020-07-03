<template>
  <div class="asp">
    <div class="asp-nav">公司列表</div>
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
          <el-form-item label="社会统一信用代码">
            <el-input v-model="formInline.Uniform" placeholder="社会统一信用代码"></el-input>
          </el-form-item>
          <el-form-item label="企业名称">
            <el-input v-model="formInline.companyName" placeholder="企业名称"></el-input>
          </el-form-item>
          <el-form-item label="所属行业">
            <el-cascader
              style="width:234px;height:34px"
              :options="industryList"
              :props="propsOne"
              :show-all-levels="false"
              v-model="formInline.industry"
            ></el-cascader>
          </el-form-item>
          <el-form-item style="margin:0 90px 0 0;display: flex;justify-content:flex-end">
            <el-button style="margin:0 0 30px 0" @click="resetForm()">重置</el-button>
            <el-button type="primary" @click="submitForm()">查询</el-button>
          </el-form-item>
        </el-form>
        <div class="asp-table">
          <div style="margin:30px 0 30px 30px">
            <!-- <el-upload
              class="avatar-upload"
              action="#"
              style="margin-left:0px"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :http-request="uploadFile"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            >
              <el-button size="small" type="primary" @click="handlePreview">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传Excel文件</div>
            </el-upload>-->
            <!-- <el-upload action="/api/backend-manager/positions/import" :headers="myHeaders">导入公司</el-upload> -->
            <el-button type="primary" @click="toggleSelection()">导入公司</el-button>
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
              <el-table-column prop="id" label="企业ID" show-overflow-tooltip></el-table-column>
              <el-table-column prop="fullName" label="企业名称" show-overflow-tooltip></el-table-column>
              <el-table-column
                prop="uniformSocialCreditCode"
                label="统一社会信用代码"
                show-overflow-tooltip
              ></el-table-column>
              <el-table-column prop="updatedTime" label="提交时间" show-overflow-tooltip>
                <template slot-scope="scope">{{ scope.row.updatedTime | formatDate}}</template>
              </el-table-column>
              <el-table-column prop="resumeNum" label="投递简历" show-overflow-tooltip></el-table-column>
              <el-table-column prop="positionNum" label="在招职位" show-overflow-tooltip></el-table-column>
              <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                  <el-button @click="position(scope.row)" type="text" size="small">职位</el-button>
                  <el-button type="text" size="small">简历</el-button>
                  <el-button type="text" @click="message(scope.row)" size="small">设置</el-button>
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
  </div>
</template>
<script>
let token = Cookies.get("token");
import industrys from "../../assets/industry.json";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      dialogVisible: false,
      dialogVisibles: false,
      industryList: [],
      myHeaders: { "Auth-Token": token },
      propsOne: {
        value: "code",
        label: "tag",
        children: "children",
        emitPath: false
      },
      page: {
        total: 0,
        pageSize: 10,
        current: 1,
        pageSizeOpts: [10, 20, 30]
      },
      formInline: {
        Uniform: "",
        companyName: "",
        industry: [
          {
            code: ""
          }
        ]
      },
      currentPage: 4,
      tableData: [],
      multipleSelection: []
    };
  },
  methods: {
    //设置
    message() {
      this.$router.push({ path: "/intercalate" });
    },
    //重置
    resetForm() {
      this.formInline.Uniform = "";
      this.formInline.companyName = "";
      this.formInline.industry = "";
    },
    //查询
    submitForm() {
      console.log(this.formInline.industry[0].code);
      let params = {
        companyName: this.formInline.companyName
          ? this.formInline.companyName
          : null,
        industryCode: this.formInline.industry[0].code
          ? this.formInline.industry
          : null,
        pageNum: 1,
        pageSize: 10,
        sortBy: null,
        sortOder: null,
        uniformSocialCreditCode: this.formInline.Uniform
          ? this.formInline.Uniform
          : null
      };
      this.$http
        .post("/backend-manager/companies/search", params)
        .then(res => {
          if (res.data.code == 200) {
            this.tableData = res.data.data.list;
            this.page.total = res.data.data.total;
          } else {
          }
        })
        .catch(error => {
          console.log(error);
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
      this.$router.push({ path: "/CompanyDetail",query:{companyID:tab.id,resumeNum:tab.resumeNum}});
    },
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      this.page.pageSize = val;
      this.page.current = 1;
      let params = {
        companyName: null,
        industryCode: null,
        pageNum: this.page.current,
        pageSize: this.page.pageSize,
        sortBy: null,
        sortOder: null,
        uniformSocialCreditCode: null
      };
      this.$http
        .post("/backend-manager/companies/search", params)
        .then(res => {
          if (res.data.code == 200) {
            this.tableData = res.data.data.list;
          } else {
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleCurrentChange(val) {
      this.page.current = val;
      let params = {
        companyName: null,
        industryCode: null,
        pageNum: this.page.current,
        pageSize: this.page.pageSize,
        sortBy: null,
        sortOder: null,
        uniformSocialCreditCode: null
      };
      this.$http
        .post("/backend-manager/companies/search", params)
        .then(res => {
          if (res.data.code == 200) {
            this.tableData = res.data.data.list;
          } else {
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleAvatarSuccess(res, file) {
      // this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res);
      // this.file = res.data;
    }
    // 自定义上传 导入数据
    // uploadFile(item) {
    //   const formData = new FormData();
    //   formData.append("file",item.file);
    //   console.log(item.file)
    //   formData.append("sheetId",1);
    //   formData.append("startNum",2);
    //   console.log(formData);
    //   this.$http
    //     .post("/backend-manager/companies/import",formData)
    //     .then(res => {
    //       console.log(res);
    //       let data = res.data;
    //       if (data.code == 200) {
    //         this.$message({
    //           type: "success",
    //           message: "导入成功!"
    //         });
    //         this.getUser(); //导入成功刷新列表
    //         this.addFormVisible = false;
    //       } else {
    //         this.$message({
    //           type: "error",
    //           message: data.msg
    //         });
    //       }
    //     })
    //     .catch(err => {});
    // }
  },
  computed: {
    uploadUrlOne() {
      // const {VUE_APP_SECRET,VUE_APP_DEV_MODE} = process.env
      return "/api/backend-manager/positions/import";
    }
  },
  mounted: function() {},
  updated: function() {},
  created() {
    this.submitForm();
    this.industryList = industrys.data;
  }
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