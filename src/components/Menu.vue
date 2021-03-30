<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="menuHandle"
  >
    <el-menu-item index="home">
      首页
    </el-menu-item>
    <el-menu-item index="movie">
      电视剧
    </el-menu-item>
    <el-menu-item index="4"
      >电影</el-menu-item>
    <el-submenu index="2">
      <template #title>更多</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router/index";
export default defineComponent({
  name: "Menu",
  setup() {
    const activeIndex = "1",
      activeIndex2 = "1",
      menuHandle = (key: string = "home") => {
        if (key == "home") {
          router.push("/");
        } else {
          router.push(`/${key}`);
        }
      };
    return {
      activeIndex,
      activeIndex2,
      menuHandle,
    };
  },
});
</script>

<style>
.el-menu-demo{
  display: flex;
   justify-content:  space-between;
}
</style>
