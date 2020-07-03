<template>
  <div class="enterdetail">
    <div class="asp-nav">企业详情</div>
    <div class="enterdetail-nav">
      <el-dialog
        title="职位基本信息编辑"
        :show-close="false"
        :append-to-body="true"
        :visible.sync="dialogVisible"
        width="29%"
      >
        <div>
          <el-form ref="form" :model="form" label-width="90px" class="formDatt">
            <el-form-item label="公司简称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="企业规模">
              <el-select v-model="form.scale" placeholder="请选择活动区域">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所属行业">
              <el-cascader
                style="width:203px;"
                :options="industryList"
                :props="propsOne"
                :show-all-levels="false"
                v-model="form.industry"
              ></el-cascader>
            </el-form-item>
            <el-form-item label="企业地点">
              <el-input v-model="form.city"></el-input>
            </el-form-item>
            <el-form-item label="企业LOGO"></el-form-item>
            <el-form-item label="企业简介">
              <el-input style="width:360px" type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                style="width:93px;height:33px;line-height:0px;margin:0 20px 0 40px"
                @click="dialogVisible = false"
              >取消</el-button>
              <el-button
                style="width:93px;height:33px;line-height:0px;margin:0 0 0 40px"
                type="primary"
                @click="submitForm('ruleForm')"
              >确定</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-dialog>
      <div class="nav-image">
        <div>
          <el-image style="margin: 0 0 30px 30px;" :src="url"></el-image>
        </div>
        <div class="enter">
          <div style="display: flex;flex-direction: row;">
            <div>{{companyDetaillist.fullName}}</div>
            <div>企业规模：{{companyDetaillist.size}}</div>
            <div>入驻时间：{{companyDetaillist.createdTime | formatDate}}</div>
            <div>今日投递：{{this.resumeNum}}</div>
          </div>
          <div style="display: flex;flex-direction: row;margin:20px 0 0 0">
            <div>企业ID：{{companyDetaillist.id}}</div>
            <div>公司类别：{{$CodeToTag.CodeToTag([parseInt(companyDetaillist.industryCode/100)*100,companyDetaillist.industryCode],industryList)[0]}}</div>
          </div>
        </div>
        <!-- <div style="margin:0 0 0 10px;">
          <el-button
            style="height:25px;width:100px;padding:0 0;margin:5px 0 0 0"
            type="primary"
            round
          >审核已通过</el-button>
        </div>-->
      </div>
    </div>
    <div class="enterdetail-article">
      <div class="enterdetail-echarts">
        <div style="font-size:18px;font-weight:bold;margin:0 0 0 30px;padding:30px 0 0 0">数据统计</div>
        <div class="echart-nav">
          <el-tabs v-model="activeName" style="margin:20px 0 0 30px">
            <el-tab-pane :lazy="true" label="发布职位数量" name="first">
              <div class="tab-first">
                <div>
                  <el-link class="chose" :underline="false">今年</el-link>
                </div>
                <div>
                  <el-link class="chose" :underline="false">本月</el-link>
                </div>
                <div>
                  <el-link class="chose" :underline="false">本周</el-link>
                </div>
                <div>
                  <el-link class="chose" :underline="false">今天</el-link>
                </div>
                <div>
                  <el-date-picker
                    v-model="valueTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  ></el-date-picker>
                </div>
              </div>
              <div id="chartLine" style="width:100%; height:490px"></div>
            </el-tab-pane>
            <el-tab-pane label="接受简历数量" name="second">接受简历数量</el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="echarts-second">
        <el-badge
          class="item"
          style="font-size:18px;font-weight:bold;margin:20px 0 0 20px;color:#2A2A2A "
        >在招职位</el-badge>
        <span
          style="font-size:14px;margin:5px 0 0 0;float:right;margin:20px 20px 0 0;color:#222222"
        >更多</span>
        <div style="margin:30px 0 0 0;">
          <span style="margin:0 0 0 20px;color:#373737;font-size:16px">产品经理</span>
          <span style="float:right;margin-right:20px;color:#373737;font-size:14px">2019-09-01 19：30</span>
        </div>
        <div style="margin:20px 0 0 0">
          <span style="margin:0 0 0 20px;color:#373737;font-size:16px">产品经理</span>
          <span style="float:right;margin-right:20px;color:#373737;font-size:14px">2019-09-01 19：30</span>
        </div>
        <div style="margin:20px 0 0 0">
          <span style="margin:0 0 0 20px;color:#373737;font-size:16px">产品经理</span>
          <span style="float:right;margin-right:20px;color:#373737;font-size:14px">2019-09-01 19：30</span>
        </div>
        <div style="margin:20px 0 0 0">
          <span style="margin:0 0 0 20px;color:#373737;font-size:16px">产品经理</span>
          <span style="float:right;margin-right:20px;color:#373737;font-size:14px">2019-09-01 19：30</span>
        </div>
        <div style="margin:20px 0 0 0">
          <span style="margin:0 0 0 20px;color:#373737;font-size:16px">产品经理</span>
          <span style="float:right;margin-right:20px;color:#373737;font-size:14px">2019-09-01 19：30</span>
        </div>
      </div>
    </div>
    <div class="enterdetail-article">
      <div class="enterdetail-echarts">
        <div style="display: flex;
  flex-direction: row;">
          <div style="font-size:18px;font-weight:bold;margin:0 0 0 30px;color:#373737">基本信息</div>
          <div
            style="font-size:16px;margin:0 0 0 30px;color:#373737;line-height:26px"
            @click="edit()"
          >
            编辑
            <i style="margin:0 0 0 5px" class="el-icon-edit"></i>
          </div>
        </div>
        <div class="echart-nav">
          <div class="infor">
            <span>企业简称：{{companyDetaillist.shortName}}</span>
            <span>企业规模：{{companyDetaillist.size}}</span>
            <span>所属行业：{{$CodeToTag.CodeToTag([parseInt(companyDetaillist.industryCode/100)*100,companyDetaillist.industryCode],industryList)[0]}}</span>
            <span>企业地点：{{companyDetaillist.address.detail}}</span>
            <span>企业logo：</span>
            <span style="margin-bottom:50px">企业简介：{{companyDetaillist.description}}</span>
          </div>
        </div>
      </div>
      <div class="echarts-second">
        <el-badge
          class="item"
          style="font-size:18px;font-weight:bold;margin:20px 0 0 20px;color:#2A2A2A "
        >公司管理人员</el-badge>
        <span
          style="font-size:14px;margin:5px 0 0 0;float:right;margin:20px 20px 0 0;color:#222222"
        >更多</span>
        <div style="margin:30px 0 0 0;">
          <span style="margin:0 0 0 20px;color:#373737;font-size:16px">产品经理</span>
          <span style="float:right;margin-right:20px;color:#373737;font-size:14px">2019-09-01 19：30</span>
        </div>
        <div style="margin:20px 0 0 0">
          <span style="margin:0 0 0 20px;color:#373737;font-size:16px">产品经理</span>
          <span style="float:right;margin-right:20px;color:#373737;font-size:14px">2019-09-01 19：30</span>
        </div>
        <div style="margin:20px 0 0 0">
          <span style="margin:0 0 0 20px;color:#373737;font-size:16px">产品经理</span>
          <span style="float:right;margin-right:20px;color:#373737;font-size:14px">2019-09-01 19：30</span>
        </div>
        <div style="margin:20px 0 0 0">
          <span style="margin:0 0 0 20px;color:#373737;font-size:16px">产品经理</span>
          <span style="float:right;margin-right:20px;color:#373737;font-size:14px">2019-09-01 19：30</span>
        </div>
        <div style="margin:20px 0 0 0">
          <span style="margin:0 0 0 20px;color:#373737;font-size:16px">产品经理</span>
          <span style="float:right;margin-right:20px;color:#373737;font-size:14px">2019-09-01 19：30</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import industrys from "../../assets/industry.json";
import { CodeToTag } from "../../cookie.js";
export default {
  data() {
    return {
      form: {
        name: "",
        scale: "",
        industry: [],
        city: [],
        desc: ""
      },
      propsOne: {
        value: "code",
        label: "tag",
        children: "children",
        emitPath: false
      },
      industryList: [],
      options: [
        {
          value: 0,
          label: "500人以上"
        },
        {
          value: 1,
          label: "100-500人"
        },
        {
          value: 2,
          label: "10-100人"
        },
        {
          value: 3,
          label: "小于10人"
        }
      ],
      dialogVisible: false,
      companyDetaillist: "",
      companyID: "",
      resumeNum: "",
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      activeName: "first",
      active: "first",
      valueTime: "",
      chartLine: null
    };
  },
  methods: {
    drawLineChart() {
      this.chartLine = echarts.init(document.getElementById("chartLine"));
      this.chartLine.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "搜索引擎"]
        },
        grid: {
          left: "1%",
          right: "4%",
          bottom: "17%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            type: "line",
            stack: "总量",
            data: [110, 132, 101, 174, 90, 230, 110, 132, 101, 174, 90, 230]
          }
        ]
      });
    },
    drawCharts() {
      this.drawLineChart();
    },
    edit() {
      this.dialogVisible = true;
    },
    submitForm() {
      let sizeName;
      switch (this.form.scale) {
        case 0:
          sizeName = "500人以上";
          break;
        case 1:
          sizeName = "100-500人";
          break;
        case 2:
          sizeName = "10-100人";
          break;
        case 3:
          sizeName = "小于10人";
          break;
      }
      let industryCode = this.form.industry;
      console.log(this.form.industry[1]);
      if ((this.form.industry[1] === undefined)) {
        industryCode = this.form.industry;
      } else {
        industryCode = this.form.industry[1];
      }
      let params = {
        addressId: null,
        cert: null,
        description: this.form.desc,
        fullName: this.form.name,
        industryCode: industryCode,
        industryFirst: CodeToTag(
          [parseInt(this.form.industry / 100) * 100, this.form.industry],
          this.industryList
        )[0],
        industrySecondary: CodeToTag(
          [parseInt(this.form.industry / 100) * 100, this.form.industry],
          this.industryList
        )[1],
        logo: null,
        nature: null,
        natureCode: null,
        shortName: this.form.name,
        size: sizeName,
        sizeCode: this.form.scale
      };
      this.$http
        .put(`/backend-manager/companies/${this.companyID}`, params)
        .then(res => {
          let data = res.data;
          if (data.code == 200) {
            this.dialogVisible = false;
            this.companyDetail();
          } else {
            this.$message({
              type: "error",
              message: data.msg
            });
          }
        })
        .catch(err => {});
    },
    companyDetail() {
      this.$http
        .get(`/backend-manager/companies/${this.companyID}`)
        .then(res => {
          let data = res.data;
          if (data.code == 200) {
            this.companyDetaillist = data.data;
            this.form = {
              name: data.data.shortName,
              scale: data.data.sizeCode,
              industry: [
                parseInt(data.data.industryCode / 100) * 100,
                data.data.industryCode
              ],
              city: [data.data.provinceCode, data.data.cityCode],
              desc: data.data.description
            };
          } else {
            this.$message({
              type: "error",
              message: data.msg
            });
          }
        })
        .catch(err => {});
    }
  },
  mounted: function() {
    this.drawCharts();
  },
  updated: function() {
    this.drawCharts();
  },
  created() {
    this.companyID = this.$route.query.companyID;
    this.resumeNum = this.$route.query.resumeNum;
    this.industryList = industrys.data;
    this.companyDetail();
  }
};
</script>
<style>
.enterdetail {
  width: 100%;
  background: #f8f8f8;
  border: 1px solid #f8f8f8;
}
.enterdetail-nav {
  display: flex;
  flex-direction: row;
  margin: 70px 20px 0 20px;
  background: #ffffff;
  height: 180px;
}
.nav-time {
  margin: 0 0 0 620px;
  display: flex;
  flex-direction: column;
}
.nav-image {
  display: flex;
  flex-direction: row;
  width: 98.5%;
  background: #ffffff;
  margin: 30px 0 0 0;
}
.el-image {
  width: 120px;
  height: 120px;
  border-radius: 60px;
}
.enter {
  display: flex;
  flex-direction: column;
  margin: 32px 0 0 0;
}
.enter div {
  padding: 0 0 0 40px;
  color: #4b4b4b;
  font-size: 16px;
}
.enterdetail-article {
  margin: 20px 20px 0 20px;
  width: 96.5%;
  background: #ffffff;
  border: 1px solid #ffffff;
  display: flex;
  flex-direction: row;
}
.enterdetail-echarts {
  width: 70%;
  background: white;
  margin: 20px 0 0 20px;
}
.el-tabs__nav-wrap:after {
  width: 97%;
}
.tab-first {
  display: flex;
  flex-direction: row;
  margin: 0 0 0 170px;
}
.tab-first div {
  padding: 0 25px 0 0;
}
.el-link.el-link--primary {
  font-size: 17px;
  line-height: 40px;
}
.echarts-second {
  width: 26%;
  margin: 20px 0 0 1.5%;
  background: white;
  border: 1px solid white;
}
.echart-nav {
  width: 100%;
  height: 100%;
}
.echarts-line {
  width: 100%;
  border: 0.5px solid #e5e5e5;
  margin: 10px 0 0 0;
}
.infor {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.infor span {
  margin: 20px 0 0 10px;
  color: #5a5a5a;
  font-size: 16px;
}
.riz {
  display: flex;
  flex-direction: row;
}
.el-tabs__nav-wrap::after {
  background: #fff;
}
.el-tabs__active-bar {
  background: #fff;
}
.el-tabs__item {
  font-size: 16px;
  color: #373737;
}
.chose {
  font-size: 14px;
  color: #a9a9a9;
  margin: 10px 0 0 0;
}
.formDatt .el-input {
  width: 360px;
  height: 40px;
}
.formDatt .el-select {
  width: 360px;
  height: 40px;
}
</style>