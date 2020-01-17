<template>
  <div class="asp">
    <div class="asp-nav">新建消息</div>
    <el-dialog title="批量添加" :visible.sync="dialogVisible" width="480px">
      <el-dialog width="30%" title="保存为标签" append-to-body :visible.sync="innerVisible">
        <el-input v-model="input" placeholder="请输入标签名称"></el-input>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false,innerVisible = false">忽略</el-button>
          <el-button type="primary">存为标签</el-button>
        </div>
      </el-dialog>
      <!-- <div>
        <el-form
          :model="form"
          :rules="rulesOne"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户ID/手机号" prop="name">
            <el-input
              v-model="form.name"
              placeholder="请输入"
              suffix-icon="el-icon-search"
              style="width:315px"
            ></el-input>
            <span>
              <el-button type="primary" icon="el-icon-arrow-up">更多筛选项</el-button>
            </span>
          </el-form-item>
        </el-form>
        <div class="asp-table">
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="C端" name="first">
              <div style="font-size:15px;font-weight:bold;margin:10px 0 0 0">
                标签
                <span>
                  <el-tag
                    v-for="tag in tags"
                    :key="tag.name"
                    :disable-transitions="false"
                    closable
                    :type="tag.type"
                    @close="Close(tag)"
                    style="margin:0 0 0 10px"
                  >{{tag.name}}</el-tag>
                </span>
              </div>
              <div style="font-size:15px;font-weight:bold;margin:10px 0 0 0">
                基本属性
                <span style="font-size:15px;margin:0 0 0 20px">
                  性别：
                  <el-select v-model="value" placeholder="请选择">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                    <el-option label="不限" value="不限"></el-option>
                  </el-select>
                </span>
                <span style="font-size:15px;margin:0 0 0 20px">
                  所在地：
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </span>
                <span style="font-size:15px;margin:0 0 0 20px">
                  年龄：
                  <span>
                    <el-input style="width:80px" placeholder="请输入"></el-input>--
                  </span>
                  <span>
                    <el-input style="width:80px" placeholder="请输入"></el-input>
                  </span>
                </span>
              </div>
              <div style="font-size:15px;font-weight:bold;margin:10px 0 0 0">
                活跃度
                <span style="font-size:15px;margin:0 0 0 20px">
                  加入平台时间：
                  <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
                </span>
                <span style="font-size:15px;margin:0 0 0 20px">
                  投递简历数：
                  <span>
                    <el-input style="width:120px" placeholder="请输入"></el-input>--
                  </span>
                  <span>
                    <el-input style="width:120px" placeholder="请输入"></el-input>
                  </span>
                </span>
              </div>
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="100px"></el-table-column>
                <el-table-column prop="name" label="用户ID"></el-table-column>
                <el-table-column prop="name" label="用户名称"></el-table-column>
                <el-table-column prop="address" label="性别" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="所在地" show-overflow-tooltip></el-table-column>
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
            <el-tab-pane label="企业" name="second">
              <div style="font-size:15px;font-weight:bold;margin:10px 0 0 0">
                标签
                <span>
                  <el-tag
                    v-for="tag in tags"
                    :key="tag.name"
                    :disable-transitions="false"
                    closable
                    :type="tag.type"
                    @close="Close(tag)"
                    style="margin:0 0 0 10px"
                  >{{tag.name}}</el-tag>
                </span>
              </div>
              <div style="font-size:15px;font-weight:bold;margin:10px 0 0 0">
                基本属性
                <span style="font-size:15px;margin:0 0 0 20px">
                  性别：
                  <el-select v-model="value" placeholder="请选择">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                    <el-option label="不限" value="不限"></el-option>
                  </el-select>
                </span>
                <span style="font-size:15px;margin:0 0 0 20px">
                  所在地：
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </span>
                <span style="font-size:15px;margin:0 0 0 20px">
                  年龄：
                  <span>
                    <el-input style="width:80px" placeholder="请输入"></el-input>--
                  </span>
                  <span>
                    <el-input style="width:80px" placeholder="请输入"></el-input>
                  </span>
                </span>
              </div>
              <div style="font-size:15px;font-weight:bold;margin:10px 0 0 0">
                活跃度
                <span style="font-size:15px;margin:0 0 0 20px">
                  加入平台时间：
                  <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
                </span>
                <span style="font-size:15px;margin:0 0 0 20px">
                  投递简历数：
                  <span>
                    <el-input style="width:120px" placeholder="请输入"></el-input>--
                  </span>
                  <span>
                    <el-input style="width:120px" placeholder="请输入"></el-input>
                  </span>
                </span>
                <div style="font-size:15px;margin:20px 0 0 70px">
                  投递简历数：
                  <span>
                    <el-input style="width:120px" placeholder="请输入"></el-input>--
                  </span>
                  <span>
                    <el-input style="width:120px" placeholder="请输入"></el-input>
                  </span>
                </div>
              </div>
              <div style="font-size:15px;font-weight:bold;margin:30px 0 0 0">
                消费
                <div style="font-size:15px;margin:-30px 0 0 70px">
                  <span>
                    <el-input style="width:120px" placeholder="请输入"></el-input>--
                  </span>
                  <span>
                    <el-input style="width:120px" placeholder="请输入"></el-input>
                  </span>
                  <span>平台币</span>
                </div>
              </div>
              <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
              >
                <el-table-column type="selection" width="100px"></el-table-column>
                <el-table-column prop="name" label="企业ID"></el-table-column>
                <el-table-column prop="name" label="企业名称"></el-table-column>
                <el-table-column prop="address" label="所在地" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="企业规模" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="企业性质" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="所属行业" show-overflow-tooltip></el-table-column>
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
        <div slot="footer" class="dialog-footer">
          <el-button style="margin:0 0 0 700px" @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="innerVisible = true">确定</el-button>
        </div>
      </div>-->
    </el-dialog>
    <div class="asp-content">
      <div class="asp-form">
        <el-form
          :model="ruleForm"
          :rules="rules" 
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="消息标题" prop="name" style="padding-top:40px">
            <el-input v-model="ruleForm.name" style="width:315px"></el-input>
          </el-form-item>
          <el-form-item label="接收对象" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择接收对象">
              <el-option label="企业用户" value="1"></el-option>
              <el-option label="C端用户" value="2"></el-option>
              <el-option label="所有用户" value="3"></el-option>
            </el-select>
            <!-- <span>
              <el-button type="primary" @click="dialogVisible = true">批 量 添 加</el-button>
            </span>-->
          </el-form-item>
          <el-form-item label="提醒方式" prop="types">
            <el-checkbox-group v-model="ruleForm.types" style="margin:-10px 20px 0 0">
              <el-checkbox label="1" style="margin-left:0px">站内信</el-checkbox>
              <!-- <el-checkbox label="短信" name="type"></el-checkbox>
              <el-checkbox label="邮件" name="type"></el-checkbox>-->
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="有效期" prop="Validity">
            <el-time-picker v-model="ruleForm.Validity" placeholder="任意时间点"></el-time-picker>
          </el-form-item>
          <el-form-item label="消息内容" prop="desc">
            <el-input type="textarea" style="width:315px" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item style="padding:0 0 20px 20px">
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <!-- <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button> -->
            <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      innerVisible: false,
      dialogVisible: false,
      value: "",
      tags: [
        { name: "C端上海用户", type: "" },
        { name: "C端女性用户", type: "success" }
      ],
      activeName: "first",
      dialogVisible: false,
      ruleForm: {
        name: "",
        region: [],
        delivery: false,
        types: ['1'],
        desc: "",
        Validity: ""
      },
      form: {},
      rules: {
        name: [
          { required: true, message: "请输入消息标题", trigger: "blur" },
          { min: 0, max: 60, message: "长度在 0 到 60 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择接受对象", trigger: "blur" }
        ],
        Validity: [
          { required: true, message: "请选择有效时间", trigger: "change" }
        ],
        types: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个提醒方式",
            trigger: "change"
          }
        ],
        desc: [{ required: true, message: "请填写消息内容", trigger: "blur" }]
      }
    };
  },
  methods: {
    Close(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http
            .post("/sysmsg", {
                title:
                  this.ruleForm.name,
                accept:
                  parseInt(this.ruleForm.region),
                indateTime:
                  this.ruleForm.Validity.getTime(),
                remindway:
                  parseInt(this.ruleForm.types[0]),
                content:
                  this.ruleForm.desc,
            })
            .then(res => {
              if (res.data.code == 200) {
               console.log(res)
              }
            })
            .catch(error => {
              // this.$message({
              //       message:error.response.data.message,
              //       type: 'error'
              //     })
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted: function() {},
  updated: function() {}
};
</script>
<style scoped>
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
  width: 96%;
  margin: 20px 20px 20px 20px;
  background: #ffffff;
}
.asp-form {
  width: 100%;
  margin: 10px 0 0 0;
  border:1px solid #F8F8F8
}
.asp-table {
  width: 98%;
  background: #ffffff;
  margin: 10px 0 0 1%;
}
.el-pagination {
  margin: 20px 0 0 150px;
  padding: 0 0 20px 0;
}
.el-checkbox__label {
  font-size: 10px;
}
.el-checkbox {
  margin: 10px 0 0 20px;
}
</style>