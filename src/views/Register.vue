<template>
  <el-form
    :model="ruleForm2"
    :rules="rules2"
    ref="ruleForm2"
    label-position="left"
    label-width="0px"
    class="demo-ruleForm login-container"
  >
    <h3 class="title">系统注册</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <div class="captcha">
        <el-input class="input" style="margin:0 5px 0 0" type="captcha" v-model="captchaInput" placeholder="请输入验证码"></el-input>
        <el-button class="btn" @click="getCaptcha" :disabled="frozen">{{ captchaStatusText }}</el-button>
      </div>
    </el-form-item>
    <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
    <el-form-item style="width:100%;">
      <el-button
        type="primary"
        style="width:95%;"
        @click.native.prevent="handleSubmit2"
        :loading="logining"
      >注册</el-button>
      <el-button style="width:90%;" type="text" @click.native.prevent="handleReset2">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { requestLogin } from "../api/api";
const captchaLabel = "获取验证码";
const countNumber = 60;
//import NProgress from 'nprogress'
export default {
  data() {
    return {
      logining: false,
      frozen: false,
      counter: countNumber,
      captchaInput: "",
      captchaStatusText: captchaLabel,
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
    getCaptcha() {
      this.frozen = true;
      const handler = setInterval(() => {
        this.captchaStatusText = `${captchaLabel}(${--this.counter}s)`;
        if (this.counter === 0) {
          clearInterval(handler);
          this.counter = countNumber;
          this.captchaStatusText = captchaLabel;
          this.frozen = false;
        }
      }, 1000);
      this.$http.post("/account/phone/vcode", {
        phone: this.ruleForm2.account
      });
    },
    handleReset2() {
      this.$router.push({ path: "/login" })
    },
    handleSubmit2(ev) {
      //   this.$router.push({ path: "/JobAuait" });
      var _this = this;
      this.$refs.ruleForm2.validate(valid => {
        if (valid) {
          //_this.$router.replace('/table');
          this.$http
            .post("/account/register", {
              phone: this.ruleForm2.account,
              password: this.ruleForm2.checkPass,
              vcode: this.captchaInput,
              agree: true
            })
            .then(res => {
              if (res.data.code == 200) {
                this.$router.push({ path: '/login' });
              }
            })
            .catch(error => {
              this.$message({
                message: error.response.data.message,
                type: "error"
              });
            });
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
  .captcha {
    display: flex;
    flex-direction: row;
  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
}
</style>