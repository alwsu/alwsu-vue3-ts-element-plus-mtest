<template>
  <el-card class="box-card">
    <div class="box-card-list">
      <div class="box-card-item" v-for="item in 3" :key="item">
          <div class="box-card-item-title">分类</div>
          <ul>
            <li v-for="o in 10" :key="o + 100">动作片</li>
          </ul>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ClassifiedCard",
});
</script>

<style lang="less">
.box-card-list {
  display: flex;
  justify-content: space-between;
  .box-card-item {
    padding: 10px;
      border-left: 1px solid #e7e7e7;
      padding-left: 20px;
      &:nth-child(1){
        border:none;
      }
      .box-card-item-title{
        font-size: 14px;
        color:#999;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          padding-right: 15px;
          font-size: 14px;
          margin-top: 10px;
          &:hover{
            color: #f90;
            cursor: pointer;
          }
        }
      }
  }
}
</style>
