<template>
  <el-breadcrumb separator="/" class="bread-bgc">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>电影</el-breadcrumb-item>
    <el-breadcrumb-item>喜剧</el-breadcrumb-item>
    <el-breadcrumb-item>唐人街</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Breadcrumb",
});
</script>

<style scoped>
.bread-bgc{
  background-color: #e7e7e7;
  height: 50px;
  line-height: 50px;
  padding-left: 8px;
}
</style>
