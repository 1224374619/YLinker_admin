<template>
  <div class="record-center">
    <div class="record-nav">数据中心</div>
    <div class="record-article">
      <div class="article-card">
        <div class="card-first">
          <img
            :src="require('../../assets/tou.png')"
            class="image"
          />
          <div>
            <span style="color:#373737;margin:0 0 0 20px;font-size:26px">123456</span>
            <span style="font-size:16px;margin:0 0 0 10px;">C端用户数</span>
          </div>
          <div style="margin:0 0 0 40px">
            <span style="font-size:18px;">今日</span>
            <span>+123</span>
          </div>
        </div>
        <div class="card-second" style="margin: 20px 0 0 40px;">
          <img
            :src="require('../../assets/zhi.png')"
            class="image"
          />
          <div class="reums">
            <div class="reums-first">
              <div>
                <span style="color:#373737;margin:0 0 0 20px;font-size:26px">123456</span>
                <span style="font-size:16px;margin:0 0 0 10px;">
                  在线简历
                  <el-tooltip
                    style="font-size:14px;color:#909090"
                    class="item"
                    effect="dark"
                    placement="top"
                  >
                    <div slot="content">完整度在0%以上的简历</div>
                    <span>
                      <i style="color:white;font-size:20px" class="el-icon-warning-outline"></i>
                    </span>
                  </el-tooltip>
                </span>
              </div>
              <div style="margin:0 0 0 20px">
                <span style="font-size:18px;">今日</span>
                <span>+123</span>
              </div>
            </div>
            <div class="reums-first" style="margin:-35px 0 0 0">
              <div>
                <span style="color:#373737;margin:0 0 0 20px;font-size:26px">123456</span>
                <span style="font-size:16px;margin:0 0 0 10px;">附件简历</span>
              </div>
              <div style="margin:0 0 0 55px">
                <span style="font-size:18px;">今日</span>
                <span>+123</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-second">
          <img
            :src="require('../../assets/a.png')"
            class="image"
          />
          <div class="reums">
            <div class="reums-first">
              <div>
                <span style="color:#373737;margin:0 0 0 20px;font-size:26px">123456</span>
                <span style="font-size:16px;margin:0 0 0 10px;">已审核企业</span>
              </div>
              <div style="margin:0 0 0 40px">
                <span style="font-size:18px;">今日</span>
                <span>+123</span>
              </div>
            </div>
            <div class="reums-first" style="margin:-35px 0 0 0">
              <div>
                <span style="color:#373737;margin:0 0 0 20px;font-size:26px">123456</span>
                <span style="font-size:16px;margin:0 0 0 10px;">待审核企业</span>
              </div>
              <div style="margin:0 0 0 40px">
                <span style="font-size:18px;">今日</span>
                <span>+123</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card-third">
          <img
            :src="require('../../assets/b.png')"
            class="image"
          />
          <div class="reums">
            <div class="reums-first" style="margin:10px 0 0 0">
              <div>
                <span style="color:#373737;margin:0 0 0 20px;font-size:26px">123456</span>
                <span style="font-size:16px;margin:0 0 0 10px;">
                  在职职位
                  <el-tooltip
                    style="font-size:14px;color:#909090"
                    class="item"
                    effect="dark"
                    placement="top"
                  >
                    <div slot="content">当前状态为在线的，支持投递的职位</div>
                    <span>
                      <i style="color:white;font-size:20px" class="el-icon-warning-outline"></i>
                    </span>
                  </el-tooltip>
                </span>
              </div>
              <div style="margin:0 0 0 20px">
                <span style="font-size:18px;">今日</span>
                <span>+123</span>
              </div>
            </div>
            <div class="reums-first" style="margin:-15px 0 0 0">
              <div>
                <span style="color:#373737;margin:0 0 0 20px;font-size:26px">123456</span>
                <span style="font-size:16px;margin:0 0 0 10px;">待审核职位</span>
              </div>
              <div style="margin:0 0 0 40px">
                <span style="font-size:18px;">今日</span>
                <span>+123</span>
              </div>
            </div>
            <div class="reums-first" style="margin:-15px 0 0 0">
              <div>
                <span style="color:#373737;margin:0 0 0 20px;font-size:26px">123456</span>
                <span style="font-size:16px;margin:0 0 0 10px;">已下线职位</span>
              </div>
              <div style="margin:0 0 0 40px">
                <span style="font-size:18px;">今日</span>
                <span>+123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="article-echarts">
        <el-tabs v-model="activeName" @tab-click="handleClick" class='tabs-echarts'>
          <el-tab-pane :lazy=true label="登录用户数" name="first">
            <div id="chartLine" style="width:96%;height:400px;"></div>
            <div style="float:right;margin:0 50px 30px 0">
              <el-button type="primary">过去7天</el-button>
              <el-button type="primary">过去30天</el-button>
              <el-button type="primary">过去90天</el-button>
              <el-button type="primary">过去180天</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane :lazy=true label="登录企业数" name="second">
            <div id="chartLineOne" style="width:96%; height:400px;"></div>
            <div style="float:right;margin:0 50px 30px 0">
              <el-button type="primary">过去7天</el-button>
              <el-button type="primary">过去30天</el-button>
              <el-button type="primary">过去90天</el-button>
              <el-button type="primary">过去180天</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane :lazy=true label="投递简历数" name="third">
            <div id="chartLineTwo" style="width:96%; height:400px;"></div>
            <div style="float:right;margin:0 50px 30px 0">
              <el-button type="primary">过去7天</el-button>
              <el-button type="primary">过去30天</el-button>
              <el-button type="primary">过去90天</el-button>
              <el-button type="primary">过去180天</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane :lazy=true label="岗位发布数" name="fourth">
            <div id="chartLineThree" style="width:96%; height:400px;"></div>
            <div style="float:right;margin:0 50px 30px 0">
              <el-button type="primary">过去7天</el-button>
              <el-button type="primary">过去30天</el-button>
              <el-button type="primary">过去90天</el-button>
              <el-button type="primary">过去180天</el-button>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      activeName: "first",
      chartLine: null,
      chartLineOne: null,
      chartLineTwo: null,
      chartLineThree: null
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab.label, event);
      window.onresize();
    },
    //登陆用户数折线图
    drawLineChart() {
      this.chartLine = echarts.init(document.getElementById("chartLine"));
      this.chartLine.setOption({
        title: {
          textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                fontSize: 15,
            },
          top:20,
          text: "登录用户数"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "搜索引擎"]
        },
        grid: {
          left: "1%",
          right: "1%",
          bottom: "7%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["0", "10", "15", "20", "25", "30"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            type: "line",
            stack: "总量",
            data: [110, 132, 101, 174, 90, 230]
          }
        ]
      });
    },
    drawLineoneChart() {
      this.chartLineOne = echarts.init(document.getElementById("chartLineOne"));
      this.chartLineOne.setOption({
        title: {
          text: "登录用户数"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "搜索引擎"]
        },
        grid: {
          left: "1%",
          right: "1%",
          bottom: "7%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["0", "10", "15", "20", "25", "30"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230]
          }
        ]
      });
    },
    drawLinetwoChart() {
      this.chartLineTwo = echarts.init(document.getElementById("chartLineTwo"));
      this.chartLineTwo.setOption({
        title: {
          text: "登录用户数"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "搜索引擎"]
        },
        grid: {
          left: "1%",
          right: "1%",
          bottom: "7%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["0", "10", "15", "20", "25", "30"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230]
          }
        ]
      });
    },
    drawLinethreeChart() {
      this.chartLineThree = echarts.init(document.getElementById("chartLineThree"));
      this.chartLineThree.setOption({
        title: {
          text: "登录用户数"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "搜索引擎"]
        },
        grid: {
          left: "1%",
          right: "1%",
          bottom: "7%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["0", "10", "15", "20", "25", "30"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230]
          }
        ]
      });
    },
    drawCharts() {
      this.drawLineChart();
      this.drawLineoneChart();
      this.drawLinetwoChart();
      this.drawLinethreeChart();
    }
  },
  mounted: function() {
    this.drawCharts();
  },
  updated: function() {
    this.drawCharts();
  }
};
</script>

<style lang="scss"> 
.record-center {
  background: #F8F8F8;
  border:1px solid #F8F8F8;
}
.record-nav {
  margin: 40px 0 0 20px;
  font-size: 18px;
  color:#2A2A2A;
  text-align: left;
}
.record-article {
  width: 100%;
  margin: 10px 0 0 0;
}
.article-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.card-first {
  width: 542px;
  height: 150px;
  margin: 20px 0 0 20px;
  background: #FFFFFF;
  box-shadow: 0px 3px 10px 0px rgba(208,208,208,0.50);
  display: flex;
  flex-direction: row;
  line-height: 150px;
  font-size: 18px;
}
.card-first span {
  padding: 0 0 0 10px;
  font-size: 25px;
}
.card-second {
  width: 542px;
  height: 150px;
  margin: 20px 0 0 20px;
  background: #FFFFFF;
  box-shadow: 0px 3px 10px 0px rgba(208,208,208,0.50);
  display: flex;
  flex-direction: row;
  line-height: 71.5px;
}
.card-second span {
  padding: 0 0 0 10px;
  font-size: 25px;
}
.reums {
  display: flex;
  flex-direction: column;
}
.reums-first {
  display: flex;
  flex-direction: row;
  margin:17px 0 0 0;
}
.card-third {
  width: 542px;
  height: 150px;
  margin: 20px 0 0 40px;
  background: #FFFFFF;
  display: flex;
  flex-direction: row;
  line-height: 50px;
}
.card-third span {
  padding: 0 0 0 10px;
  font-size: 25px;
}
.image {
  width: 63px;
  height: 63px;
  margin: 43px 0 0 49px;
}
.article-echarts {
  margin: 40px 0 0 20px;
  border:1px solid #ffffff;
  background: #ffffff;
  width:1124px;
  .tabs-echarts {
    margin: 20px 0 0 40px;
    .el-tabs {
      background: white;
    }
    .el-tabs__item {
      font-size: 16px;
      font-weight: 600;
    }
  }
}

.demo-block .source {
  padding: 0 0 0 10px;
}
</style>