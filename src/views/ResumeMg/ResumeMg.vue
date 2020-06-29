<template>
  <div class="asp">
    <div class="asp-nav">简历库</div>
    <div class="asp-content">
      <el-dialog
        title="下载简历"
        :show-close="true"
        :append-to-body="true"
        :visible.sync="dialogVisibleDialog"
        width="25%"
        :before-close="handleClose"
      >
        <div>
          <div>
            <el-radio style="margin:0 0 0 38%;" v-model="radio" label="1">已选简历(0)</el-radio>
            <br />
            <el-radio style="margin:20px 0 0 38%;" v-model="radio" label="2">全部简历(100)</el-radio>
          </div>
        </div>
        <div style="text-align:center;margin:30px 0 20px 0">
          <el-button style="width:93px;height:33px;line-height:0px" @click="dialogVisibleDialog = false">取 消</el-button>
          <el-button style="width:93px;height:33px;line-height:0px;margin:0 0 0 30px" type="primary" @click="dialogVisibleDialog = false">确 定</el-button>
        </div>
      </el-dialog>
      <div class="asp-form">
        <el-form
          :inline="true"
          :model="formInline"
          label-width="120px"
          ref="formInline"
          class="demo-form-inline"
          style="background:#ffffff;"
        >
          <div style="height:20px"></div>
          <el-form-item label="企业">
            <el-input v-model="formInline.company" placeholder="企业"></el-input>
          </el-form-item>
          <el-form-item label="职位">
            <el-input v-model="formInline.position" placeholder="职位"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="formInline.state" placeholder="状态">
              <el-option label="未下载" value="shanghai"></el-option>
              <el-option label="已下载" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="时间">
            <el-date-picker
              v-model="formInline.valueTime"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>
          <el-form-item style="margin:0 90px 0 0;display: flex;justify-content:flex-end">
            <el-button style="margin:0 0 30px 0" @click="resetForm()">重置</el-button>
            <el-button type="primary" @click="submitForm()">查询</el-button>
          </el-form-item>
        </el-form>
        <div class="asp-table">
          <div style="margin:30px 0 30px 30px">
            <el-button @click="toggleSelection()">批量下载简历</el-button>
          </div>
          <div>
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width:1084px;margin:0 auto"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="60"></el-table-column>
              <el-table-column label="序号" width="100">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="name" label="简历ID"></el-table-column>
              <el-table-column prop="address" label="姓名" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="企业名称" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="职位名称" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="状态" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="投递时间" show-overflow-tooltip></el-table-column>
              <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">下载</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
            ></el-pagination>
          </div>
        </div>
      </div>
      <el-dialog
        title="个人简历"
        :visible.sync="dialogVisible"
        style="margin-top:-2%"
        width="40%"
        :before-close="handleClose"
      >
        <div class="lines"></div>
        <div class="test-1" style="height:620px;overflow-y:scroll;overflow-x:hidden">
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
              <div>证书附件</div>
              <div>2018/12</div>
            </div>
          </div>
          <div class="jotension">
            <div class="title">荣誉奖项</div>
            <div class="train-content">
              <div>获奖名称</div>
              <div>熟练</div>
              <div>证书附件</div>
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
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        state: "",
        valueTime: "",
        position: "",
        company: ""
      },
      radio: "",
      dialogVisibleDialog: true,
      dialogVisible: false,
      currentPage: 4,
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    //重置
    resetForm() {
      this.formInline.state = "";
      this.formInline.valueTime = "";
      this.formInline.position = "";
      this.formInline.company = "";
    },
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
    },
    toggleSelection() {
      this.$refs.multipleTable.toggleAllSelection();
      // if (rows) {
      //   rows.forEach(row => {
      //     alert(1121)
      //     this.$refs.multipleTable.toggleAllSelection(row);
      //   });
      // } else {
      //   alert(11211)
      //   this.$refs.multipleTable.clearSelection();
      // }
    },
    handleClick(tab, event) {
      this.dialogVisible = true;
      // this.$router.push({ path: "/Cteam/Resume" });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
.el-form-item {
  padding: 10px 0 0 20px;
}
.el-select {
  width: 203px;
}
.asp-table {
  width: 100%;
  border: 1px solid #f8f8f8;
  background: #ffffff;
  margin: 10px 0 0 0;
  .el-table th {
    background: #f0f0f0;
  }
}
.el-pagination {
  margin: 20px 0 0 0;
  padding: 0 0 20px 0;
  text-align: center;
}

.line {
  width: 98%;
  border: 0.5px solid #e5e5e5;
  margin: 20px 0 0 1%;
}
.lines {
  width: 105%;
  border: 0.5px solid #e5e5e5;
  margin: -30px 0 10px -18px;
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
  font-size: 20px;
}
.infor div:nth-child(2) span {
  padding: 0 0 0 10px;
}
.infor div:nth-child(3) span {
  padding: 0 0 0 10px;
}
.el-icon-close:before {
  content: "\e6db";
  color: #333333;
  font-size: 20px;
}
.test-1::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.test-1::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #d5d5d5;
}
.test-1::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #f3f3f3;
}
.el-dialog__header {
  padding: 20px;
  padding-bottom: 10px;
  height: 30px;
}
</style>