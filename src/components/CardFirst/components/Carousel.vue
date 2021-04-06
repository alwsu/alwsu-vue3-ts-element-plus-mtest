
<template>
  <div class="carousel-size">
    <el-carousel :interval="5000" arrow="always" height="378px" v-if="carouselData.length>0">
      <el-carousel-item v-for="(item, index) in carouselData" :key="item.id">
        <!-- <h3 @click="jumpTo(item)"><img :src="item.picUrl" alt="item.name"/></h3> -->
        <h3 @click="jumpTo(item)" :style="{backgroundImage:`url(${item.picUrl}) `}" class="canvan-bgi"></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { getinfo } from "@/api/index.js";
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "Carousel",
  setup() {
    const carouselData = ref({});
    const _getinfo = () => {
      getinfo().then((res) => {
        if (res.data && res.data.status == 0) {
          carouselData.value = res.data.data;
        } else {
          ElMessage({
            message: `请求错误${res.msg}`,
            type: "warning",
            offset: 50,
          });
        }
      });
    };
    const jumpTo = (item) => {
      console.log('item000000',item);
    };
    onMounted(() => {
      _getinfo();
    });
    return { carouselData,jumpTo };
  },
});
</script>


<style scoped lang="less">
.el-carousel__item h3 {
  font-size: 18px;
  /* opacity: 0.75; */
  line-height: 300px;
  margin: 0;
  
  
}
.el-carousel__item .canvan-bgi{
  padding-top: 60%;
  background-position: 50% 50%;
  background-size: cover;
  &:hover{
    cursor: pointer;
  }
}
/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
} */

.carousel-size {
  width: 100%;
  /* height: 387px; */
}
</style>
