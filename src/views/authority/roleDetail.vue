<template>
  <div class="asp">
    <div class="asp-nav">查看角色</div>

    <div class="asp-content">
      <div style="padding:30px 0 0 20px">
        <span style="font-size:17px;font-weight:bold">角色</span>
        <span style="margin:0 0 0 10px">审核专员</span>
      </div>
      <div style="padding:30px 0 0 20px">
        <span style="font-size:17px;font-weight:bold">权限</span>
        <div style="margin:15px 0 0 50px">
          <el-tree :data="data" :default-expand-all='true' :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
      </div>
      <div style="width:50%;margin:20px 0 0 20px"></div>
      <div style="margin:0 0 0 50px">
        <el-button style="margin:30px 0 30px 0">返 回</el-button>
        <el-button @click="roleEdit" type="primary">编 辑</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import treeTransfer from "el-tree-transfer";
export default {
  data() {
    return {
      data: [
        {
          label: "审核中心",
          children: [
            {
              label: "企业审核",
              children: [
                {
                  label: "查看企业资质"
                }
              ]
            }
          ]
        },
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    roleEdit() {
      this.$router.push({ path: "/roleEdit" });
    },
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
.el-tree-node__content {
  display: flex;
  align-items: center;
  height: 26px;
  cursor: pointer;
}
.el-checkbox__inner {
  display: inline-block;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  background-color: #fff;
  z-index: 1;
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  margin: 0 10px 8px -20px;
}
</style>