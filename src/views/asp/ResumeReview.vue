<template>
  <div class="asp">
    <div class="asp-nav">简历审核</div>
    <div class="asp-content">
      <div class="asp-form">
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline"
          label-width="120px"
          style="background:#ffffff;width:98%;margin:0 0 0 13px"
        >
          <div style="height:15px"></div>
          <el-form-item label="用户姓名">
            <el-input v-model="formInline.UserName" placeholder="用户姓名"></el-input>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="formInline.Phone" placeholder="手机号码"></el-input>
          </el-form-item>
          <el-form-item label="简历ID">
            <el-input v-model="formInline.ResumeID" placeholder="简历ID"></el-input>
          </el-form-item>
          <el-form-item label="未通过原因">
            <el-select v-model="formInline.Reason" placeholder="请选择简历ID">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="提交时间段">
            <el-date-picker
              v-model="formInline.valueTime"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>
          <el-form-item style="margin:0 90px 0 0;display: flex;justify-content:flex-end">
            <el-button style="margin:0 0 30px 0" @click="Ressetting()">重置</el-button>
            <el-button type="primary" @click="Inquiry()">查询</el-button>
          </el-form-item>
        </el-form>
        <div class="asp-table">
          <el-tabs v-model="activeName" type="card" style="width:1084px;margin:20px auto">
            <el-tab-pane label="待审核" name="first">
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="100"></el-table-column>
                <el-table-column prop="name" label="用户ID"></el-table-column>
                <el-table-column prop="name" label="用户姓名"></el-table-column>
                <el-table-column prop="address" label="手机号码" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="简历ID" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="是否出现敏感词" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" sortable label="提交时间" show-overflow-tooltip></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <!-- <el-button type="text" size="small">通过</el-button>
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
                      <el-button type="text" size="small">未通过</el-button>
                    </el-tooltip>-->
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
            </el-tab-pane>
            <el-tab-pane label="通过" name="second">
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="100"></el-table-column>
                <el-table-column prop="name" label="用户ID"></el-table-column>
                <el-table-column prop="name" label="用户姓名"></el-table-column>
                <el-table-column prop="address" label="手机号码" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="简历ID" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="是否出现敏感词" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" sortable label="提交时间" show-overflow-tooltip></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
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
            </el-tab-pane>
            <el-tab-pane label="不通过" name="third">
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="100"></el-table-column>
                <el-table-column prop="name" label="用户ID"></el-table-column>
                <el-table-column prop="name" label="用户姓名"></el-table-column>
                <el-table-column prop="address" label="手机号码" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="简历ID" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="是否出现敏感词" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" sortable label="提交时间" show-overflow-tooltip></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
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
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        UserName: "",
        Phone: "",
        ResumeID: "",
        valueTime: "",
        Reason: ""
      },
      options: [
        {
          value: "选项1",
          label: "含虚假信息"
        },
        {
          value: "选项2",
          label: "含违法信息"
        },
        {
          value: "选项3",
          label: "非法传销"
        },
        {
          value: "选项4",
          label: "涉黄"
        },
        {
          value: "选项5",
          label: "涉嫌诈骗"
        },
        {
          value: "选项6",
          label: "其他"
        }
      ],
      checkList: ["复选框 A"],
      dialogVisible: false,
      activeName: "first",
      currentPage: 4,
      valueTime:'',
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
    Ressetting() {
      this.formInline.UserName = "";
      this.formInline.Phone = "";
      this.formInline.ResumeID = "";
      this.formInline.Reason = "";
      this.formInline.valueTime = "";
    },
    //查询
    Inquiry() {
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
    keep() {
      this.dialogVisible = true;
    },
    handleClick(tab, event) {
      console.log(tab, event);
      this.$router.push({ path: "/ResumeDetail" });
    },
    handle(tab, event) {
      console.log(tab, event);
      this.$router.push({ path: "/Bteam/Enterdetail" });
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
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
<style scoped>
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
  width: 100%;
  margin: 10px 0 0 0;
  border: 1px solid #f8f8f8;
}
.el-form-item {
  padding: 10px 0 0 20px;
}
.el-select {
  width: 203px;
}
.asp-table {
  width: 98%;
  background: #ffffff;
  margin: 10px 0 0 1%;
}
.el-pagination {
  text-align: center;
  margin: 30px auto 0;
}
.el-checkbox__label {
  font-size: 10px;
}
.el-checkbox {
  margin: 10px 0 0 20px;
}
</style>
