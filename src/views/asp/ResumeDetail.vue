<template>
  <div class="enterdetail">
    <div class="resume-article">
      <div style="width:80%;">
        <div class="resume-footer">
          <div class="section-nav">
            <span>简历审核详情页</span>
          </div>
          <div class="resume-line"></div>
          <div class="resume">
            <div class="block">
              <el-avatar shape="square" :size="100" :src="squareUrl"></el-avatar>
            </div>
            <div class="infor">
              <div style="font-size:18px">姓名</div>
              <div>
                <span>无经验 | 硕士学历 | 23岁 | (1996/09/03)</span>
              </div>
              <div>
                <span>政治面貌：群众</span>
                <span>1-3年海外工作经验</span>
              </div>
              <div>
                <span>1232323323</span>
                <span style="margin:0 0 0 10px">12312312@qq.com</span>
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
              <div>2018-01/至今</div>
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
              <div><i class="el-icon-message"></i></div>
            </div>
            <div class="train-content">
              <div>证书名称</div>
              <div>2018/12</div>
            </div>
          </div>
          <div class="jotension">
            <div class="title">荣誉奖项</div>
            <div class="train-content">
              <div>获奖名称</div>
              <div>熟练</div>
              <div><i class="el-icon-message"></i></div>
            </div>
          </div>
          <div class="jotension">
            <div class="title">自我评价</div>
            <div class="train-content">
              <div>暂未填写自我评价</div>
            </div>
          </div>
          <div style="margin:0 0 0 70%">
               <el-button>返回</el-button>
               <el-button type="primary">不通过</el-button>
               <el-button type="primary">通过</el-button>
          </div>
        </div>
      </div>
      <div class="aside" style="width:20%;">
        <!-- <div class="asp-nav">后台操作日志</div>
        <div class="resume-line" style="margin:20px 0 0 0"></div>
        <div class="block">
          <el-timeline :reverse="reverse">
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp"
            >{{activity.content}}</el-timeline-item>
          </el-timeline> -->
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
<style scoped>
.enterdetail {
  width: 100%;
  margin: 10px 0 0 0
}
.resume-article {
  width: 100%;
  background: #efeff3;
  display: flex;
  flex-direction: row;
}
.resume-nav {
  width: 98%;
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
  margin: 12px 0 0 50px;
}
.infor div {
  padding: 8px 0 0 0;
}
.line {
  width: 98%;
  border: 0.5px solid #e5e5e5;
  margin: 20px 0 0 1%;
}
.title {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0 0 10px;
}
.jotension {
  font-size: 15px;
  display: flex;
  flex-direction: column;
  margin: 0 0 20px 0;
}
.jotension-content {
  margin: 20px 0 0 50px;
  display: flex;
  flex-direction: row;
}
.jotension-content div:nth-child(1) {
  width: 400px;
}
.jotension-content div:nth-child(2) {
  margin: 0 0 0 300px;
  width: 200px;
}
.train-content {
  margin: 20px 0 0 50px;
  display: flex;
  flex-direction: row;
}
.train-content div:nth-child(1) {
  width: 200px;
}
.train-content div:nth-child(2) {
  margin: 0 0 0 150px;
  width: 200px;
}
.train-content div:nth-child(3) {
  margin: 0 0 0 140px;
}
.aside {
  width: 28%;
  background: white;

  margin: 5px 0 0 20px;
}
</style>