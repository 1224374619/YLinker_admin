<template>
  <div class="asp">
    <div class="asp-nav">新增职位</div>
    <div class="asp-content">
      <div class="asp-form">
        <div class="asp-table">
          <div style="margin:19px 0 0 0">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="岗位名称" prop="positionName">
                <el-input style="width:203px" placeholder="岗位名称" v-model="ruleForm.positionName"></el-input>
              </el-form-item>
              <el-form-item label="工作性质" prop="nature">
                <el-select v-model="ruleForm.nature" placeholder="工作性质">
                  <el-option label="全职" value="1"></el-option>
                  <el-option label="兼职" value="2"></el-option>
                  <el-option label="实习" value="3"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="岗位分类" prop="positionCatalog">
                <el-cascader
                  style="width:203px"
                  :options="positionCatalogList"
                  :props="propsTwo"
                  :show-all-levels="false"
                  v-model="ruleForm.positionCatalog"
                ></el-cascader>
              </el-form-item>
              <el-form-item label="月薪范围" prop="salary">
                <el-select v-model="ruleForm.salary" placeholder="岗位分类">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="最低学历" prop="degree">
                <el-select v-model="ruleForm.degree" placeholder="最低学历">
                  <el-option
                    v-for="item in optionsDegree"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="工作年限" prop="workYear">
                <el-select v-model="ruleForm.workYear" placeholder="工作年限">
                  <el-option
                    v-for="item in optionsWorkYear"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="工作地区" prop="workCity">
                <el-cascader
                  style="width:203px"
                  :options="cityList"
                  :props="propsOne"
                  :show-all-levels="false"
                  v-model="ruleForm.workCity"
                ></el-cascader>
                <br />
                <el-input
                  style="width:500px;margin:20px 0 0 0"
                  placeholder="详细地址：街道门牌信息等"
                  type="textarea"
                  v-model="ruleForm.desc"
                ></el-input>
              </el-form-item>
              <el-form-item label="岗位描述" prop="positionCatalogDetail">
                <el-input
                  style="width:500px;"
                  type="textarea"
                  placeholder="必填，请输入300字以下内容"
                  v-model="ruleForm.positionCatalogDetail"
                ></el-input>
              </el-form-item>
              <el-form-item label="求职要求" prop="JobSearch">
                <el-input
                  style="width:500px;"
                  type="textarea"
                  placeholder="必填，请输入300字以下内容"
                  v-model="ruleForm.JobSearch"
                ></el-input>
              </el-form-item>
              <el-form-item label="技能标签" prop="skills">
                <el-input
                  style="width:500px;"
                  type="textarea"
                  placeholder="选填"
                  v-model="ruleForm.skills"
                ></el-input>
              </el-form-item>
              <el-form-item label="负责HR" prop="HR">
                <el-input style="width:203px" v-model="ruleForm.HR"></el-input>
              </el-form-item>
              <el-form-item label="投递邮箱" prop="email">
                <el-input style="width:203px" v-model="ruleForm.email"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import positionCatalog from "../../assets/positionCatalog.json";
import city from "../../assets/city.json";
export default {
  data() {
    return {
      ruleForm: {
        positionName: "",
        nature: "",
        positionCatalog: "",
        salary: "",
        degree: "",
        workYear: "",
        workCity: "",
        desc:'',
        positionCatalogDetail: "",
        JobSearch: "",
        skills: "",
        HR: "",
        email: ""
      },
      propsTwo: {
        value: "code",
        label: "tag",
        children: "children",
        emitPath: false
      },
      propsOne: {
        value: "code",
        label: "tag",
        children: "children",
        emitPath: false
      },
      options: [
        {
          value: "0",
          label: "1K以下"
        },
        {
          value: "1",
          label: "1K-2K"
        },
        {
          value: "2",
          label: "2K-4K"
        },
        {
          value: "3",
          label: "4K-6K"
        },
        {
          value: "4",
          label: "6K-8K"
        },
        {
          value: "5",
          label: "6K-8K"
        },
        {
          value: "6",
          label: "8K-10K"
        },
        {
          value: "7",
          label: "10K-15K"
        },
        {
          value: "8",
          label: "15K-25K"
        },
        {
          value: "9",
          label: "25K-35K"
        },
        {
          value: "10",
          label: "35K以上"
        }
      ],
      optionsDegree: [
        {
          value: "0",
          label: "初中及以下"
        },
        {
          value: "1",
          label: "中专/中技"
        },
        {
          value: "2",
          label: "高中"
        },
        {
          value: "3",
          label: "大专"
        },
        {
          value: "4",
          label: "本科"
        },
        {
          value: "5",
          label: "硕士"
        },
        {
          value: "6",
          label: "博士"
        }
      ],
      optionsWorkYear: [
        {
          value: "0",
          label: "无"
        },
        {
          value: "1",
          label: "1-3年"
        },
        {
          value: "2",
          label: "3-5年"
        },
        {
          value: "3",
          label: "5-10年"
        },
        {
          value: "4",
          label: "10年以上"
        }
      ],
      positionCatalogList: [],
      cityList: [],
      rules: {
        positionName: [
          { required: true, message: "请输入岗位名称", trigger: "blur" }
          //   { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        nature: [
          { required: true, message: "请选择工作性质", trigger: "change" }
        ],
        positionCatalog: [
          { required: true, message: "请选择岗位分类", trigger: "change" }
        ],
        salary: [
          { required: true, message: "请选择薪资范围", trigger: "change" }
        ],
        degree: [
          { required: true, message: "请选择最低学历", trigger: "change" }
        ],
        workYear: [
          { required: true, message: "请选择工作年限", trigger: "change" }
        ],
        workCity: [
          { required: true, message: "请选择工作城市", trigger: "change" }
        ],
        positionCatalogDetail: [
          { required: true, message: "请填写岗位描述", trigger: "change" },
          {
            min: 0,
            max: 300,
            message: "长度在 0 到 300 个字符",
            trigger: "blur"
          }
        ],
        JobSearch: [
          { required: true, message: "请填写求职要求", trigger: "change" },
          {
            min: 0,
            max: 300,
            message: "长度在 0 到 300 个字符",
            trigger: "blur"
          }
        ],
        HR: [{ required: true, message: "请填写负责HR", trigger: "change" }],
        email: [
          { required: true, message: "请填写投递邮箱", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    //发布
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //重置
    resetForm(formName) {
      this.ruleForm.desc = ''
      this.$refs[formName].resetFields();
    },
    // //查询
    // submitForm() {
    //   this.$http
    //     .post("", {})
    //     .then(res => {
    //       if (res.data.code == 200) {
    //       } else {
    //       }
    //     })
    //     .catch(error => {
    //       this.$message(error.response.data.message);
    //     });
    // }
  },
  mounted: function() {},
  updated: function() {},
  created() {
    this.positionCatalogList = positionCatalog.data;
    this.cityList = city.data;
  }
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
.asp-table {
  width: 100%;
  border: 1px solid #f8f8f8;
  background: #ffffff;
  margin: 10px 0 0 0;
}
</style>