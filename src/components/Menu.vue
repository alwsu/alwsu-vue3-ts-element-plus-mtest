<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="menuHandle"
  >
    <el-menu-item index="/home" class="mmenu-item"> 首页 </el-menu-item>
    <el-menu-item index="/teleplay"> 电视剧 </el-menu-item>
    <el-menu-item index="/movie">电影</el-menu-item>
    <el-menu-item index="/cartoon">动漫</el-menu-item>
    <el-menu-item index="/variety">综艺</el-menu-item>
    <el-menu-item index="/tvlive">电视直播</el-menu-item>
    <el-menu-item index="/journalism">新闻</el-menu-item>
    <el-menu-item index="/networkmovie">网络电影</el-menu-item>
    <el-submenu index="2">
      <template #title>更多</template>
      <el-menu-item index="2-1">明星</el-menu-item>
      <el-menu-item index="2-2">抖音小姐姐</el-menu-item>
      <el-menu-item index="2-3">角色</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import router from "@/router/index";
export default defineComponent({
  name: "Menu",
  setup() {
    const activeIndex = ref("/home"),
      menuHandle = (key: string = "/home") => {
        if (key == "/home") {
          router.push("/");
          activeIndex.value = "/home";
        } else {
          router.push(key);
          activeIndex.value = key;
        }
      };
    const filterPath = () => {
      const path = ref(window.location.pathname);
      if (path.value == "/") {
        menuHandle("/home");
      } else {
        menuHandle(path.value);
      }
    };

    onMounted(() => {
      filterPath();
    });
    return {
      activeIndex,
      menuHandle,
      filterPath,
    };
  },
});
</script>

<style lang="less" scoped>
.el-menu-demo {
  display: flex;
  justify-content: space-between;
  .el-menu-item:hover {
    color: #f90 !important;
  }
  li.is-active {
    background-color: #f90 !important;
    color: #fff !important;
    border: none !important;
    &:hover {
      color: #fff !important;
    }
  }
}
</style>
