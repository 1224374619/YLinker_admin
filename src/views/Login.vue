<template>
  <el-form
    :model="ruleForm2"
    :rules="rules2"
    ref="ruleForm2"
    label-position="left"
    label-width="0px"
    class="demo-ruleForm login-container"
  >
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button
        type="primary"
        style="width:95%;"
        @click.native.prevent="open()"
        :loading="logining"
      >登录</el-button>
      <!-- <el-button style="width:90%;" type="text" @click.native.prevent="handleReset2">注册</el-button> -->
    </el-form-item>
  </el-form>
</template>

<script>
import { requestLogin } from "../api/api";
import Cookies from 'js-cookie'
//import NProgress from 'nprogress'
export default {
  data() {
    return {
      logining: false,
      ruleForm2: {
        account: "",
        checkPass: ""
      },
      rules2: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" }
          //{ validator: validaePass }
        ],
        checkPass: [
          { required: true, message: "请输入密码", trigger: "blur" }
          //{ validator: validaePass2 }
        ]
      },
      checked: true
    };
  },
  methods: {
    open() {
      this.handleSubmit2();
      // this.$confirm(
      //   "检测到你的密码安全系数不高，请修改密码？",
      //   "确认信息",
      //   {
      //     distinguishCancelAndClose: true,
      //     confirmButtonText: "进行修改",
      //     cancelButtonText: "放弃修改"
      //   }
      // )
      //   .then(() => {
      //     // this.$message({
      //     //   type: "info",
      //     //   message: "放弃修改"
      //     // });
      //     this.$router.push({ path: "/cypher" })
      //   })
      //   .catch(action => {
      //     // this.$message({
      //     //   type: "info",
      //     //   message:
      //     //     action === "cancel" ? "放弃修改" : ""
      //     // });

      //   });
    },
    handleReset2() {
      this.$router.push({ path: "/cypher" });
    },
    handleSubmit2(ev) {
      //   this.$router.push({ path: "/JobAuait" });
      var _this = this;
      this.$refs.ruleForm2.validate(valid => {
        if (valid) {
          //_this.$router.replace('/table');
          // http://localhost:8080/api/reviewed/company/cert

          this.$_http
            .post(`/cms-user/login`, {
              username: this.ruleForm2.account,
              password: this.ruleForm2.checkPass
            })
            .then(res => {
              if (res.request.status == 200) {
                console.log(res.headers["auth-token"])
                let token = res.headers["auth-token"];
                Cookies.set("token",token);
                console.log('1311111')
                this.$router.push({ path: "/jobAuait" });
                console.log('1444444')
              } else {
                return false;
              }
            })
            .catch(error => {
              this.$message({
                showClose: true,
                message: "输入有误，请重新输入"
              });
            });

          // this.$_http
          //   .post(
          //     `/login?returnUrl=http://localhost:8080/api/reviewed/company/cert`,
          //     {
          //       username: this.ruleForm2.account,
          //       password: this.ruleForm2.checkPass
          //     }
          //   )
          //   .then(res => {
          //     if (res.data.code == 200) {
          //       let token = "asd1d5.0o9utrf7.12jjkht";
          //       this.$store.commit("SET_TOKEN", token);
          //       this.$router.push({ path: "/JobAuait" });
          //     } else {
          //     }
          //   })
          //   .catch(error => {
          //     // console.log(window.sessionStorage.getItem('token', data))
          //     // this.$message({
          //     //   message: error.response.data.message,
          //     //   type: "error"
          //     // });
          //   });
          //   this.logining = true;
          //   //NProgress.start();
          //   requestLogin(loginParams).then(data => {
          //     this.logining = false;
          //     //NProgress.done();
          //     let { msg, code, user } = data;
          //     if (code !== 200) {
          //       this.$message({
          //         message: msg,
          //         type: "error"
          //       });
          //     } else {
          //       sessionStorage.setItem("user", JSON.stringify(user));
          //       this.$router.push({ path: "/RecordCenter" });
          //     }
          //   });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 20px;
  }
}
</style>