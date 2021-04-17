<template>
  <ul class="breadcList">
    <li
      class="breadcItem"
      v-for="(item, index) in breadList"
      :key="item.name"
      @click="handle(item.path, index)"
    >
      <span class="bread-conten">
        {{ item.name }}
      </span>
      <span v-show="breadList.length - 1 != index" class="separ">/</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Breadcrumb",
  setup() {
    const breadList = ref([
      { path: "/", name: "首页" },
      { path: "/movie", name: "电影" },
      { path: "/", name: "喜剧" },
      { path: "", name: "唐人街" },
    ]);
    const handle = (path: any, index: number) => {
      if (breadList.value.length - 1 != index) {
        window.location.href = `http://localhost:8080${path}`;
      }
    };
    return { breadList, handle };
  },
});
</script>

<style scoped lang="less">
.breadcList {
  display: flex;
  font-size: 14px;
  color: #666;
  margin-left: 8px;
  background-color: #e7e7e7;
  height: 50px;
  line-height: 50px;
  .breadcItem {
    &:last-child {
      .bread-conten {
        color: #999;
        &:hover {
          cursor: default;
          color: #999;
        }
      }
    }
    .bread-conten {
      &:hover {
        cursor: pointer;
        color: #f90;
      }
    }
    .separ {
      margin: 0 9px;
      color: #999;
    }
  }
}
</style>
