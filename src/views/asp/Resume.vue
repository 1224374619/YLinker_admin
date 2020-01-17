<template>
  <div class="enterdetail">
    <div class="enterdetail-nav">
      <div class="nav-image">
        <div style="margin:30px 0 0 30px">
          <el-image style="width:150px;height:150px;border-radius:75px;" :src="url" :fit="fit"></el-image>
          <div style="margin:10px 0 0 67px">姓名</div>
        </div>
        <div class="enter">
          <span style="margin-top:10px">注册手机号:121212121211</span>
          <span>用户ID:132313123</span>
          <span>简历ID:132313123</span>
          <span>公司名称:上海xx有限公司</span>
          <span>附件简历ID:132313123</span>
        </div>
      </div>
      <div class="nav-time">
        <div>
          <span style="margin:55px 0 0 0;font-size:15px">上次登录时间</span><br>
          <span style="font-size:25px;margin:5px 0 0 0">2019-09-09</span>
        </div><br>
        <div>
          <span style="margin:55px 0 0 0;font-size:15px">用户注册时间</span><br>
          <span style="font-size:25px;margin:5px 0 0 0">2019-09-09</span>
        </div>
      </div>
      <div class="nav-button">
        <el-button class="el-button" type="danger">禁止登录</el-button><br>
        <el-button class="el-button" type="warning   ">禁止投递</el-button><br>
        <el-button class="el-button" type="primary">模拟登录</el-button>
      </div>
    </div>
    <div class="resume-article">
      <div style="width:70%;margin:-25px 0 0 0;">
        <div class="resume-nav">
          <div style="height:5px"></div>
          <div class="asp-nav">用户行为日志</div>
          <div class="asp-table">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="width:94%;margin:20px auto">
              <el-tab-pane label="全部" name="first">
                <div class="block">
                  <el-timeline :reverse="reverse">
                    <el-timeline-item
                      v-for="(activity, index) in activities"
                      :key="index"
                      :timestamp="activity.timestamp"
                    >{{activity.content}}</el-timeline-item>
                  </el-timeline>
                </div>
                <div style="margin:20px 0 20px 45%">
                  <el-button type="primary">查看更多</el-button>
                </div>
              </el-tab-pane>
              <el-tab-pane label="职位相关" name="second"></el-tab-pane>
              <el-tab-pane label="登录日志" name="third"></el-tab-pane>
              <el-tab-pane label="其他操作" name="fourth"></el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div class="resume-section">
          <div class="section-nav">
            <span>附件简历</span>
            <span>
              <el-button type="primary">下载简历</el-button>
            </span>
          </div>
          <div class="resume-line"></div>
          <div class="resume-span">
            <span>哈哈哈.pdf</span>
            <span>更新时间：2019-09-03 13：30</span>
            <span>备注：无</span>
          </div>
          <div class="section-table"></div>
        </div>
        <div class="resume-footer">
          <div class="section-nav">
            <span>用户简历</span>
            <span>
              <el-button type="primary">下载简历</el-button>
            </span>
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
          <div class="jotension">
            <div class="title">自我评价</div>
            <div class="train-content">
              <div style="width:700px;">暂未填写自我评价</div>
            </div>
          </div>
        </div>
      </div>
      <div class="aside">
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
<style scoped lang="scss">
.enterdetail {
  width: 100%;
  background: #F8F8F8;
  border:1px solid #F8F8F8;
}
.enterdetail-nav {
  display: flex;
  flex-direction: row;
  margin: 70px 20px 0 20px;
  background: #ffffff;
  height:330px;
}
.nav-time {
  margin: 9% 0 0 50px;
  display: flex;
  flex-direction: column;
  text-align: right;
  width:150px
}
.nav-button {
  margin:70px 0 0 200px;
}
.el-button {
  margin:20px 0 0 0
}
.nav-image {
  display: flex;
  flex-direction: row;
}
.enter {
  font-size: 20px;
  color: #7e7e7e;
  display: flex;
  flex-direction: column;
  width:300px;
  margin:0 0 0 30px
}
.enter span {
  padding: 25px 0 0 0;
}
.resume-article {
  display: flex;
  margin: 20px 20px 0 20px;
  flex-direction: row;
}
.resume-nav {
  width: 100%;
  background: white;
  margin:20px 0 0 0
}
.asp-nav {
  margin: 25px 0 20px 25px;
  font-size: 17px;
  font-weight: 550;
}
.asp-table {
  width: 100%;
  background: #ffffff;
}
.resume-section {
  width: 100%;
  background: white;
  margin:20px 0 0 0
}
.section-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.section-nav span:nth-child(1) {
  font-size: 17px;
  margin:20px 0 0 25px
}
.section-nav span:nth-child(2) {
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
  margin: 0 0 15px 25px;
}
.resume-span span:nth-child(1) {
  margin: 15px 0 15px 25px;
}
.resume-footer {
  width: 100%;
  border: 1px solid white;
  background: white;
  margin: 20px 0 0 0
}
.block {
  margin: 25px 0 0 25px;
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
  font-size:20px
}
.infor div:nth-child(2) span {
  padding:0 0 0 10px
}
.infor div:nth-child(3) span {
  padding:0 0 0 10px
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
  font-size:20px;
  width: 600px;
}
.jotension-content div:nth-child(2) {
  font-size:20px;
  width: 300px;
}
.train-content {
  margin: 20px 0 0 35px;
  display: flex;
  flex-direction: row;
}
.train-content div:nth-child(1) {
  width: 150px;
  font-size:20px;
}
.train-content div:nth-child(2) {
  margin: 0 0 0 0;
  width: 150px;
  font-size:20px;
}
.train-content div:nth-child(3) {
  margin: 0 0 0 0;
  font-size:20px;
}
.train-content div:nth-child(4) {
  margin: 0 0 0 100px;
  font-size:20px;
}
.aside {
  width:28%;
  margin: -5px 0 0 2%;
  background: white;
}
</style>