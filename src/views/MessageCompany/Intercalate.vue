<template>
  <div class="asp">
    <div class="asp-nav">设置</div>
    <div class="asp-content">
      <div class="asp-form">
        <div class="asp-tables">
          <div style="margin:20px 0 0 0">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="允许登录">
                <el-radio v-model="form.radio1" label="1" border>允许</el-radio>
                <el-radio v-model="form.radio1" label="2" border>禁止</el-radio>
              </el-form-item>
              <el-form-item label="线上展示">
                <el-radio v-model="form.radio2" label="1" border>允许</el-radio>
                <el-radio v-model="form.radio2" label="2" border>禁止</el-radio>
              </el-form-item>
            </el-form>
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
      form: {
        radio1: "",
        radio2: ""
      }
    };
  },
  methods: {
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
.asp-tables {
  width: 100%;
  height: 400px;
  border: 1px solid #f8f8f8;
  background: #ffffff;
  margin: 10px 0 0 0;
}
.el-radio {
    height:30px;
    width: 110px;
    text-align: center
}
</style>