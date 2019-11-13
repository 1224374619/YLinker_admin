<template>
  <div class="asp">
    <div class="asp-nav">审核详情页</div>
    <div class="asp-content">
      <div class="verify">
        <h3>企业资质审核</h3>
        <div class="verify-nav">
          <div>
            企业名称：
            <span>上海市xx有限公司</span>
          </div>
          <div>
            企业注册地：
            <span style="color:red">上海徐汇</span>
            <span>
              <el-tooltip class="item" effect="dark" content="不合适" placement="right">
                <img src="../../assets/wen.svg" style="height:15px;">
              </el-tooltip>
            </span>
          </div>
          <div>
            统一社会信用代码：
            <span>123456789</span>
          </div>
          <div>
            企业类别：
            <span>事业单位</span>
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
                  style="width:50px;height:20px;font-size:10px;padding:0 0"
                  type="primary"
                >确认</el-button>
              </div>
            </div>
            <el-button type="primary">不通过</el-button>
          </el-tooltip>
          <el-button type="primary" style="margin: 0 0 20px 10px">通过</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkList: ["复选框 A"]
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
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
.verify {
  width: 98%;
  margin: 20px 1% 0 1%;
  background: #ffffff;
}
h3 {
  margin: 0 0 0 100px;
  padding: 70px 0 0 0;
}
.verify-nav {
  margin: 10px 0 0 0;
}
.verify-nav div {
  margin: 0 0 0 100px;
  padding: 25px 0 0 0;
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
  padding: 70px 0 0 200px;
}
.el-checkbox {
  margin: 10px 0 0 0;
}
</style>