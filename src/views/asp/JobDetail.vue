<template>
  <div class="asp">
    <div class="asp-nav">职位审核详情页</div>
    <div class="asp-content">
      <div class="verify">
        <h2>职位审核</h2>
        <div class="verify-nav">
          <div>
            职位ID：
            <span>{{detailinfo.positionId}}</span>
          </div>
          <div>
            职位名称：
            <span>{{detailinfo.positionName}}</span>
          </div>
          <div>
            工作性质：
            <span>{{detailinfo.jobType|jobType}}</span>
          </div>
          <div>
            职位分类：
            <span>{{detailinfo.positionCatalog}}</span>
          </div>
          <div>
            月薪范围：
            <span>{{detailinfo.salaryMin}}-{{detailinfo.salaryMax}}k</span>
          </div>
          <div>
            最低学历：
            <span>{{detailinfo.degreeMin}}</span>
          </div>
          <div>
            工作年限：
            <span>{{detailinfo.workAgeMin}}-{{detailinfo.workAgeMax}}年</span>
          </div>
          <div>
            工作地址：
            <span>{{detailinfo.address}}</span>
          </div>
          <div>
            职位描述：
            <span>{{detailinfo.description}}</span>
          </div>
          <div>
            任职要求：
            <span style="white-space pre-line">{{detailinfo.requirement}}</span>
          </div>
          <div>
            负责HR：
            <span>{{detailinfo.managerUid}}</span>
          </div>
          <div>
            投递邮箱：
            <span>{{detailinfo.addedEmailList}}</span>
          </div>
          <div>
            未通过原因：
            <span>{{detailinfo.addedEmailList}}</span>
          </div>
          <div>
            操作日志：
            <div>
              
              <div class="block">
                <el-timeline>
                  <el-timeline-item timestamp="" placement="top">
                    <el-card>
                      <h4></h4>
                      <p></p>
                    </el-card>
                  </el-timeline-item>
                </el-timeline>
              </div>
            </div>
          </div>
        </div>
        <el-divider content-position="left"></el-divider>
        <div class="verify-button">
          <el-button @click="back">返回</el-button>
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
                  style="width:50px;height:20px;font-size:10px;padding:0 0"
                  @click="Define"
                >确认</el-button>
              </div>
            </div>
            <el-button v-if="this.reviewedState === 3?false:true" type="danger">不通过</el-button>
          </el-tooltip>
          <el-button
            type="success"
            v-if="this.reviewedState === 2?false:true"
            @click="DefineFirst"
            style="margin: 0 0 20px 10px"
          >通过</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkList: [],
      detailinfo: {
        positionId: "",
        positionName: "",
        jobType: "",
        positionCatalog: "",
        salaryMin: "",
        salaryMax: "",
        degreeMin: "",
        workAgeMin: "",
        workAgeMax: "",
        addressId: "",
        description: "",
        requirement: "",
        managerUid: "",
        addedEmailList: ""
      },
      reviewedState: "",
      textarea: ""
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    //未通过
    Define() {
      this.$http
        .put(
          `/reviewed/position/${this.thisId}/info/${this.companId}/notPass`,
          { reason: this.checkList[0] }
        )
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
    //详细信息
    Detail() {
      this.$http
        .get(`/reviewed/position/${this.thisId}/info/${this.companId}`)
        .then(res => {
          if (res.data.code == 200) {
            let NewContent = res.data.data;
            this.detailinfo = NewContent;
            this.reviewedState = NewContent.reviewedState;
          }
        })
        .catch(error => {
          // this.$message({
          //       message:error.response.data.message,
          //       type: 'error'
          //     })
        });
    },
    //通过
    DefineFirst() {
      this.DialogAffirm()
    },
    //弹框确认
    DialogAffirm() {
      this.$http
        .put(
          `/reviewed/position/${this.thisId}/info/${this.companId}/pass`,
        )
        .then(res => {
          if (res.data.code == 200) {
            this.dialogVisible = false;
          }
        })
        .catch(error => {
          // this.$message({
          //       message:error.response.data.message,
          //       type: 'error'
          //     })
        });
    }
  },
  mounted: function() {},
  updated: function() {},
  filters: {
    jobType(jobType) {
      const map = ["全职", "兼职", "实习"];
      return map[jobType];
    }
  },
  created() {
    this.companId = this.$route.query.thisId;
    this.thisId = this.$route.query.thatId;
    this.Detail();
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
.verify {
  width: 98%;
  margin: 20px 1% 0 1%;
  background: #ffffff;
}
.verify-nav {
  margin: 10px 0 0 0;
}
h2 {
  margin: 0 0 0 35px;
  padding: 30px 0 0 0;
}
.verify-nav div {
  margin: 0 0 0 35px;
  padding: 25px 0 0 0;
  font-size: 18px;
}
.el-divider {
  width: 300px;
  margin: 60px 0 0 100px;
}
.verify-article div {
  margin: 0 0 0 100px;
  padding: 25px 0 0 0;
}
.verify-button {
  padding: 50px 0 50px 200px;
}
.el-checkbox {
  margin: 10px 0 0 0;
}
</style>