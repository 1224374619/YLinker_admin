<template>
  <div class="asp">
    <div class="asp-nav">新增用户</div>
    <div class="asp-content">
      <el-form ref="form" style="padding:10px 0 0 0" :model="form" label-width="80px">
        <el-form-item label="账号">
          <el-input style="width:250px;" placeholder="请输入30字符以内的英文" v-model="form.role"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input style="width:250px;" placeholder="请输入" v-model="form.role"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input style="width:250px;" placeholder="请输入正确手机号" v-model="form.role"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-select style="width:250px;" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input
            type="textarea"
            style="width:250px;"
            placeholder="请输入50字符以内的中英文"
            v-model="form.role"
          ></el-input>
        </el-form-item>
      </el-form>
      <div style="margin:0 0 0 50px">
        <el-button style="margin:30px 0 30px 0">返 回</el-button>
        <el-button @click="open" type="primary">保 存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import treeTransfer from "el-tree-transfer";
export default {
  data() {
    return {
      form: {
        role: ""
      },
      value: "",
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
      ]
    };
  },
  methods: {
    open() {
      this.$notify({
        title: '用户创建成功',
        type: 'success',
        duration: 0,
        dangerouslyUseHTMLString: true,
        message: "<div>账号：123123</div><div>密码：123123</div><button @click='aaa()' style='background:white;border:1px solid #e9ebec;width:80px;height:30px;margin:10px 0 0 0;border-radius:5px'>复制密码</button><button style='background:#1890ff;border:1px solid #1890ff;color:white;width:50px;height:30px;margin:10px 0 0 30px;border-radius:5px'>确定</button>"
      });
    },
    aaa() {
      alert('1313')
    }
  },
  mounted: function() {},
  updated: function() {}
};
</script>
<style >
.asp {
  width: 100%;
  background: #f8f8f8;
  border: 1px solid #f8f8f8;
}
.el-textarea__inner {
  height: 100px;
}
.asp-nav {
  margin: 40px 0 0 20px;
  font-size: 18px;
  color: #2a2a2a;
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
  border: 1px solid #f8f8f8;
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