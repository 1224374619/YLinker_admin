<template>
  <div class="asp">
    <div class="asp-nav">消息详情</div>
    <div class="asp-content">
      <div class="asp-form">
        <div>消息标题：服务暂停通知</div>
        <div>接受对象：所以用户</div>
        <div>提醒方式：站内信</div>
        <div>有效期：</div>
        <div style="width:700px">
          消息内容：
          <span>
            文案文案文案文案文文案文案文案文案文案文文案文文案文文
            案文案文案文案文案文文案文案文案文案文文案文案文案文案文案文文案文案文案文文文案文文案文案
            文案文案文案文文案文案文案文案文文案文案文案文案文案文文案文案文案文文案文案文案文文案文案
            文案文案文案文文案文案文案文文案文案文案文案文案文文案文案文案文案文案文文案
          </span>
        </div>
        <div v-if="isshow">
            <!-- <el-button style="margin:0 0 0 550px" type="primary">返回</el-button> -->
            <el-button type="primary" @click="Back()">返回</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        isshow:true,
        message:'1'
    };
  },
  methods: {
    //返回
    Back() {
      this.$router.go(-1)
    },
  },
  mounted: function() {},
  updated: function() {},
  created() {
      if(this.message == '1') {
          this.isshow = true
      }else{
          this.isshow = false
      }
  }
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
  margin: 10px 0 10px 1%;
}
.asp-form div:nth-child(1) {
  padding: 50px 0 20px 50px;
}
.asp-form div {
  padding: 10px 0 20px 50px;
}
</style>