<template>
  <div class="enterdetails">
    <div class="resume-article">
      <div>
        <div class="resume-footer">
          <div class="section-nav">
            <span>简历审核详情页</span>
          </div>
          <div class="resume-line"></div>
          <div class="resume">
            <div class="block">
              <el-avatar style="border-radius:50px" shape="square" :size="100" :src="squareUrl"></el-avatar>
            </div>
            <div class="infor">
              <div style="font-size:25px;margin:0 0 0 10px">姓名</div>
              <div>
                <span>现居上海</span>
                <span>|</span>
                <span>本科</span>
                <span>|</span>
                <span>3-5年工作经验</span>
                <span>|</span>
                <span>23岁（1995-09-01）</span>
              </div>
              <div>
                <span>团员</span>
                <span>|</span>
                <span>15569658695</span>
                <span>|</span>
                <span>122534@qq.com</span>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="jotension">
            <div class="title">求职意向</div>
            <div class="jotension-content">
              <div>职位类型：产品经理/产品助理/用户体验设计师</div>
              <div>工作城市：杭州</div>
            </div>
            <div class="jotension-content">
              <div>企业行业：互联网金融/公关</div>
              <div style>薪资范围：4k-6k</div>
            </div>
            <div class="jotension-content">
              <div>求职状态：离职-延时到岗（2019年06月）</div>
              <div style>工作类型：实力</div>
            </div>
          </div>
          <div class="line"></div>
          <div class="jotension">
            <div class="title">教育经历</div>
            <div class="jotension-content">
              <div>华东理工大学</div>
              <div>工作城市：杭州</div>
            </div>
            <div class="jotension-content">
              <div>工业设计 | 硕士 | 统招</div>
            </div>
          </div>
          <div class="jotension">
            <div class="title">工作经历</div>
            <div class="jotension-content">
              <div>公司名称</div>
              <div>2018-01/至今</div>
            </div>
            <div class="jotension-content">
              <div>产品经理 | 4k-6k</div>
            </div>
            <div class="jotension-content">
              <div>工作内容：文案文案文案文案文案文案</div>
            </div>
            <br />
            <div class="jotension-content">
              <div>公司名称</div>
              <div>2018-01/至今</div>
            </div>
            <div class="jotension-content">
              <div>产品经理 | 4k-6k</div>
            </div>
            <div class="jotension-content">
              <div>工作内容：文案文案文案文案文案文案</div>
            </div>
          </div>
          <div class="jotension">
            <div class="title">项目经历</div>
            <div class="jotension-content">
              <div>项目名称 | 公司名称</div>
              <div>2018-01/至今</div>
            </div>
            <div class="jotension-content">
              <div>个人职责：文案文案文案文案文案文案</div>
            </div>
            <div class="jotension-content">
              <div>项目介绍：文案文案文案文案文案文案</div>
            </div>
          </div>
          <div class="jotension">
            <div class="title">培训经历</div>
            <div class="train-content">
              <div>培训课程</div>
              <div>培训机构</div>
              <div style="margin:0 0 0 95px">2018-01/至今</div>
            </div>
          </div>
          <div class="jotension">
            <div class="title">职称等级</div>
            <div class="train-content">
              <div>职称等级</div>
            </div>
          </div>
          <div class="jotension">
            <div class="title">专业技能</div>
            <div class="train-content">
              <div>技能名称</div>
              <div>熟练</div>
              <div>证书附件，点击查看大图</div>
              <div>2018/12</div>
            </div>
          </div>
          <div class="jotension">
            <div class="title">荣誉奖项</div>
            <div class="train-content">
              <div>获奖名称</div>
              <div>熟练</div>
              <div>证书附件，点击查看大图</div>
              <div>2018/12</div>
            </div>
          </div>
          <div style="margin:70px 0 50px 70%">
            <el-button>返回</el-button>
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
                  <el-input style="margin-bottom:20px" type="textarea" :rows="2" placeholder="(选填)请简要填写不通过原因，原因会反馈给客户，请注意措辞" v-model="textarea"></el-input>
                  <el-button style="width:50px;height:20px;font-size:10px;padding:0 0">取消</el-button>
                  <el-button
                    style="width:50px;height:20px;font-size:10px;padding:0 0"
                    type="primary"
                  >确认</el-button>
                </div>
              </div>
              <el-button type="danger">未通过</el-button>
            </el-tooltip>

            <el-button type="success">通过</el-button>
          </div>
        </div>
      </div>
      <div class="aside" style="width:20%;">
        <div class="asp-nav">后台操作日志</div>
        <div class="resume-line" style="margin:20px 0 0 0"></div>
        <div class="block">
          <el-timeline :reverse="reverse">
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp"
            >{{activity.content}}</el-timeline-item>
        </el-timeline>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      activeName: "first",
      active: "first",
      value: "",
      textarea:'',
      chartLine: null,
      activities: [
        {
          content: "活动按期开始",
          timestamp: "2018-04-15"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "创建成功",
          timestamp: "2018-04-11"
        }
      ],
      checkList: ["复选框 A"]
    };
  },
  methods: {},
  mounted: function() {},
  updated: function() {}
};
</script>
<style scoped>
.enterdetails {
  width: 100%;
  margin: 10px 0 0 0;
}
.resume-article {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.resume-nav {
  width: 100%;
  border: 1px solid white;
  background: white;
  margin: 20px 0 0 20px;
}
.asp-nav {
  margin: 10px 0 0 10px;
  font-size: 17px;
  font-weight: 550;
}
.asp-table {
  width: 98%;
  background: #ffffff;
  margin: 10px 0 0 1%;
}
.resume-section {
  width: 98%;
  border: 1px solid white;
  background: white;
  margin: 5px 0 0 20px;
}
.section-nav {
  margin: 20px 0 0 10px;
  font-size: 17px;
  font-weight: 550;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.section-nav span:nth-child(1) {
  margin: -10px 20px 10px 0;
}
.resume-line {
  width: 100%;
  border: 0.5px solid #e5e5e5;
}
.resume-span {
  display: flex;
  flex-direction: column;
}
.resume-span span {
  margin: 10px 0 0 10px;
}
.resume-footer {
  width: 98%;
  border: 1px solid white;
  background: white;
  margin: 5px 0 0 20px;
}
.block {
  margin: 20px 0 0 10px;
}
.resume {
  display: flex;
  flex-direction: row;
}
.infor {
  margin: 12px 0 0 20px;
}
.infor div {
  padding: 8px 0 0 0;
  font-size: 20px;
}
.infor div:nth-child(2) span {
  padding: 0 0 0 10px;
}
.infor div:nth-child(3) span {
  padding: 0 0 0 10px;
}
.line {
  width: 98%;
  border: 0.5px solid #e5e5e5;
  margin: 20px 0 0 1%;
}
.title {
  font-size: 20px;
  font-weight: bold;
  margin: 25px 0 0 35px;
}
.jotension {
  font-size: 15px;
  display: flex;
  flex-direction: column;
  margin: 0 0 20px 0;
}
.jotension-content {
  margin: 20px 0 0 35px;
  display: flex;
  flex-direction: row;
}
.jotension-content div:nth-child(1) {
  font-size: 20px;
  width: 600px;
}
.jotension-content div:nth-child(2) {
  font-size: 20px;
  width: 300px;
}
.train-content {
  margin: 20px 0 0 35px;
  display: flex;
  flex-direction: row;
}
.train-content div:nth-child(1) {
  width: 150px;
  font-size: 20px;
}
.train-content div:nth-child(2) {
  margin: 0 0 0 0;
  width: 150px;
  font-size: 20px;
}
.train-content div:nth-child(3) {
  margin: 0 0 0 0;
  font-size: 20px;
}
.train-content div:nth-child(4) {
  margin: 0 0 0 100px;
  font-size: 20px;
}
.aside {
  width: 28%;
  background: white;

  margin: 5px 0 0 20px;
}
</style>