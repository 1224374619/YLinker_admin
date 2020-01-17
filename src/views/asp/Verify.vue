<template>
  <div class="asp">
    <div class="asp-nav">审核详情页</div>
    <el-dialog
      title="请填写通过理由"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <div>
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
        <span slot="footer" class="dialog-footer" >
          <el-button style="margin:40px 0 0 0" @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click='DialogAffirm()'>确 定</el-button>
        </span>
      </div>
    </el-dialog>
    <div class="asp-content">
      <div class="verify">
        <h2>企业资质审核</h2>
        <div class="verify-nav">
          <div>
            企业名称：
            <span>{{this.companyName}}</span>
          </div>
          <div>
            企业注册地：
            <span>{{this.registeredAddress}}</span>
            <!-- <span>
              <el-tooltip class="item" effect="dark" content="不合适" placement="right">
                <img src="../../assets/wen.svg" style="height:15px;">
              </el-tooltip>
            </span> -->
          </div>
          <div>
            统一社会信用代码：
            <span>{{this.uniformSocialCreditCode}}</span>
          </div>
          <div>
            企业类别：
            <span>{{this.enterpriseForm}}</span>
          </div>
          <div>
            证件原件照片：
            <img src />
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
                  @click="Define"
                  style="width:50px;height:20px;font-size:10px;padding:0 0"
                >确认</el-button>
              </div>
            </div>
            <el-button v-if="this.reviewedState === 3?false:true" type="danger" style="margin: 0 0 20px 10px">不通过</el-button>
          </el-tooltip>
          <el-button type="success" v-if="this.reviewedState === 2?false:true" @click="DefineFirst" style="margin: 0 0 20px 10px">通过</el-button>
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
      companyName:'',
      registeredAddress:'',
      uniformSocialCreditCode:'',
      enterpriseForm:'',
      reviewedState:'',
      textarea:'',
      dialogVisible:false
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    //弹框确认
    DialogAffirm() {
      this.$http.put(`/reviewed/company/${this.thisId}/cert/${this.companId}/rePass`,{reason:this.textarea
        }).then(res => {
          if (res.data.code == 200) {
            this.dialogVisible = false;
          }
        }).catch(error =>{
          // this.$message({
          //       message:error.response.data.message,
          //       type: 'error'
          //     })
        });
    },
    //详细信息
    Detail() {
      this.$http.get(`/reviewed/company/${this.thisId}/cert/${this.companId}`).then(res => {
          if (res.data.code == 200) {
            let NewContent = res.data.data
            this.companyName = NewContent.companyName
            this.registeredAddress = NewContent.registeredAddress
            this.uniformSocialCreditCode = NewContent.uniformSocialCreditCode
            this.enterpriseForm = NewContent.enterpriseForm
            this.reviewedState = NewContent.reviewedState
          }
        }).catch(error =>{
          // this.$message({
          //       message:error.response.data.message,
          //       type: 'error'
          //     })
        });
    },
    //未审核未通过
    Define() {
      this.$http.put(`/reviewed/company/${this.thisId}/cert/${this.companId}/notPass`,{reason:this.checkList[0]}).then(res => {
          if (res.data.code == 200) {
          }
        }).catch(error =>{
          // this.$message({
          //       message:error.response.data.message,
          //       type: 'error'
          //     })
        });
    },
    //未审核通过
    DefineFirst() {
      this.dialogVisible = true;
    },
  },
  mounted: function() {},
  updated: function() {},
  created() {
    this.companId = this.$route.query.thisId
    this.thisId = this.$route.query.thatId
    this.Detail()
  }
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
.verify {
  width: 98%;
  margin: 20px 1% 0 1%;
  background: #ffffff;
}
h2 {
  margin: 0 0 0 35px;
  padding: 30px 0 0 0;
}
.verify-nav {
  margin: 10px 0 0 0;
}
.verify-nav div {
  margin: 0 0 0 35px;
  padding: 25px 0 0 0;
  font-size:18px
}
.el-divider {
  width: 300px;
  margin: 100px 0 0 100px;
}
.verify-article div {
  margin: 0 0 0 100px;
  padding: 25px 0 0 0;
}
.verify-button {
  padding: 70px 0 50px 200px;
}
.el-checkbox {
  margin: 10px 0 0 0;
}
</style>