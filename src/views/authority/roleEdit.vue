<template>
  <div class="asp">
    <div class="asp-nav">编辑角色</div>
    <div class="asp-content">
      <el-form ref="form" style="padding:10px 0 0 0" :model="form" label-width="80px">
        <el-form-item label="角色">
          <el-input style="width:250px;" placeholder="请输入30字符以内的中文" v-model="form.role"></el-input>
        </el-form-item>
      </el-form>
      <div style="width:50%;margin:20px 0 0 20px">
        <tree-transfer
          :title="title"
          :from_data="fromData"
          :to_data="toData"
          :defaultProps="{label:'label'}"
          @addBtn="add"
          :default-checked-keys="[1]"
          @removeBtn="remove"
          :mode="mode"
          height="400px"
          filter
          openAll
        ></tree-transfer>
      </div>
      <div style="margin:0 0 0 50px">
        <el-button style="margin:30px 0 30px 0">返 回</el-button>
        <el-button @click="open1" type="primary">保 存</el-button>
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
      title: ["", ""],
      mode: "transfer", // transfer addressList
      fromData: [
        //源数据 类型：Array 必填：true 补充：数据格式同element-ui tree组件，但必须有id和pid
        {
          id: "1",
          pid: 0, //自定义pid的参数名，默认为"pid" 必填：false
          label: "审核中心",
          children: [
            {
              id: "1-2",
              pid: "1",
              label: "企业审核",
              children: [
                {
                  id: "1-2-1",
                  pid: "1-2",
                  children: [],
                  label: "查看企业资质"
                }
              ]
            }
          ]
        },
        {
          id: "1",
          pid: 0, //自定义pid的参数名，默认为"pid" 必填：false
          label: "数据中心",
          children: [
            {
              id: "1-2",
              pid: "1",
              label: "企业审核",
              children: [
              ]
            }
          ]
        }
      ],
      toData: []
    };
  },
  methods: {
    open1() {
      this.$notify({
        title: "成功",
        message: "保存成功",
        type: "success"
      });
    },
    // 切换模式 现有树形穿梭框模式transfer 和通讯录模式addressList

    changeMode() {
      if (this.mode == "transfer") {
        this.mode = "addressList";
      } else {
        this.mode = "transfer";
      }
    }, // 监听穿梭框组件添加
    add(fromData, toData, obj) {
      // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象

      // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表

      console.log("fromData:", fromData);

      console.log("toData:", toData);

      console.log("obj:", obj);
    }, // 监听穿梭框组件移除
    remove(fromData, toData, obj) {
      // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象

      // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表

      console.log("fromData:", fromData);

      console.log("toData:", toData);

      console.log("obj:", obj);
    }
  },
  components: { treeTransfer }, // 注册
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