<template>
  <div class="asp">
    <div class="asp-nav">企业用户管理</div>
    <el-dialog
      title="请填写通过理由"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div>
        <div style="margin:-40px 0 0 0"></div>
        <el-divider></el-divider>
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
        <el-divider style="margin:0 0 0 0"></el-divider>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </div>
    </el-dialog>
    <div class="asp-content">
      <div class="asp-form">
        <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="130px"  style="background:#ffffff;">
          <div style="height:20px"></div>
          <el-form-item label="企业名称">
            <el-input placeholder="企业名称"></el-input>
          </el-form-item>
          <el-form-item label="企业ID">
            <el-input placeholder="企业ID"></el-input>
          </el-form-item>
          <el-form-item label="注册地">
            <el-select placeholder="注册地">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="统一社会信用代码">
            <el-select placeholder="统一社会信用代码" >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item><br>  
          <el-form-item style="margin:0 90px 0 0;display: flex;justify-content:flex-end">
            <el-button style="margin:0 0 30px 0" @click="resetForm('ruleForm')">重置</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
          </el-form-item>
        </el-form>
        <div class="asp-table">
          <el-tabs v-model="activeName" type="card" style="width:1084px;margin:20px auto">
            <el-tab-pane label="初审通过" name="first">
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width:1084px;margin:20px auto"
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="100"></el-table-column>
                <el-table-column prop="name" label="企业ID"></el-table-column>
                <el-table-column prop="name" label="企业名称"></el-table-column>
                <el-table-column prop="address" label="注册地" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="所属行业" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="统一社会信用代码" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" sortable label="提交时间" show-overflow-tooltip></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">通过</el-button>
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
                    </el-tooltip>
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
            <el-tab-pane label="初审未通过" name="second">
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="100"></el-table-column>
                <el-table-column prop="name" label="企业ID"></el-table-column>
                <el-table-column prop="name" label="企业名称"></el-table-column>
                <el-table-column prop="address" label="注册地" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="所属行业" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="统一社会信用代码" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" sortable label="提交时间" show-overflow-tooltip></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" @click="keep" size="small">通过</el-button>
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
            <el-tab-pane label="终审通过" name="third">
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="100"></el-table-column>
                <el-table-column prop="name" label="企业ID"></el-table-column>
                <el-table-column prop="name" label="企业名称"></el-table-column>
                <el-table-column prop="address" label="注册地" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="所属行业" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="统一社会信用代码" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" sortable label="提交时间" show-overflow-tooltip></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handle(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">加入黑名单</el-button>
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
            <el-tab-pane label="终审未通过" name="fourth">
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="100"></el-table-column>
                <el-table-column prop="name" label="企业ID"></el-table-column>
                <el-table-column prop="name" label="企业名称"></el-table-column>
                <el-table-column prop="address" label="注册地" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="所属行业" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="统一社会信用代码" show-overflow-tooltip></el-table-column>
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
      checkList: ["复选框 A"],
      dialogVisible: false,
      activeName: "first",
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
    keep() {
      this.dialogVisible = true;
    },
    handleClick(tab, event) {
      console.log(tab, event);
     this.$router.push({path:'/Bteam/Verify'})
    },
    handle(tab, event) {
      console.log(tab, event);
     this.$router.push({path:'/Bteam/Enterdetail'})
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
<style lang="scss">
.asp {
  width: 100%;
  background: #F8F8F8;
  border:1px solid #F8F8F8;
}
.asp-nav {
  margin: 40px 0 0 20px;
  font-size: 18px;
  color:#2A2A2A;
  text-align: left;
}
.asp-content {
  width: 100%;
  margin: 20px 0 20px 0;
  background: #F8F8F8;
}
.asp-form {
  width: 98%;
  margin: 10px 0 0 1%;
  border:1px solid #F8F8F8
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
  margin: 20px 0 0 1%;
}
.el-pagination {
  margin: 20px 0 0 400px;
  padding: 0 0 20px 0;
}
.el-checkbox__label {
  font-size: 10px;
}
.el-checkbox {
  margin: 10px 0 0 20px;
}
</style>
