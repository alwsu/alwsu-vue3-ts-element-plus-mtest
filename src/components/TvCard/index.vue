<template>
  <el-row :gutter="20" class="box-tv">
    <el-col :span="6" v-for="item in 4" :key="item+99">
      <div class="grid-content bg-purple">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>浙江卫视</span>
              <el-button class="button" type="text">详细<i class="el-icon-arrow-right"></i></el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TvCard",
});
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
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
  .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
    
  .text {
    font-size: 14px;
  }

  .item {
    padding: 9px 0;
    padding-left: 9px;
    border-left: 1px solid #e7e7e7;
    &:hover{
      cursor: pointer;
      
    }
  }
.box-tv{
  margin-top: 20px;
}
  
</style>
