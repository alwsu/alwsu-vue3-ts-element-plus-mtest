<template>
  <el-row :gutter="20">
    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="16"
      ><div class="grid-content bg-purple">
        <el-container class="container">
          <el-header class="header">
            <el-row :gutter="20">
              <el-col :span="4"
                ><div class="grid-content bg-purple"></div
              ></el-col>
              <el-col :span="16"><Header /> </el-col
            ></el-row>
            <el-col :span="4"
              ><div class="grid-content bg-purple"></div
            ></el-col>
          </el-header>
          <el-main class="mian">
            <div id="app">
              <router-view /></div
          ></el-main>
          <el-footer class="footer">Footer</el-footer>
        </el-container>
      </div></el-col
    >
    <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";

export default defineComponent({
  name: "App",
  components: { Header },
});
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  color: #666;
}
.mian {
  width: 100%;
  min-height: 95vh;
  margin-top: 61px;
}
.header,
.footer {
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}
.header {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
/* .bg-purple {
    background: #d3dce6;
  } */
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
