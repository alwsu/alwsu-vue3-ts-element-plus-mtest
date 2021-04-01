<template>
  <div class="box-card">
    <div class="box-card-l">
      <div class="box-card-l-header">
        <div class="header-l"><i class="el-icon-refresh"></i>同步热播</div>
        <div class="header-r">更多<i class="el-icon-arrow-right"></i></div>
      </div>
      <div class="box-card-l-sw">
        <Swiper />
      </div>
    </div>
    <div class="box-card-r">
      <div class="box-card-r-header">
        <div class="header-l"><i class="el-icon-s-platform"></i>卫视同步</div>
        <div class="header-r">更多<i class="el-icon-arrow-right"></i></div>
      </div>
      <div class="box-card-r-content">
        <ul>
          <li v-for="ite in 9" :key="ite">
            <div class="tv-ranking">
              <span class="tv-hot">安徽卫视</span><em></em>
              <span class="tv-hot-text"> 陪你漫步这个世界 </span>
            </div>
              <span>完结</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Swiper from "@/components/MSwiper.vue";

export default defineComponent({
  name: "TongbuCard",
  components: {
    Swiper,
  },
});
</script>

<style scoped lang="less">
.box-card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 15px;
  margin-top: 20px;
  .box-card-l {
    width: 60%;
    .box-card-l-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-l {
        font-size: 18px;
        i {
          color: #f90;
          font-size: 24;
        }
      }
      .header-r {
        font-size: 14px;
        color: #999;
        i {
          font-size: 16px;
        }
        &:hover {
          color: #f90;
          cursor: pointer;
        }
      }
    }
    .box-card-l-sw {
      margin-top: 20px;
    }
  }
  .box-card-r {
    width: 40%;
    margin-left: 20px;
    .box-card-r-header {
      display: flex;
      justify-content: space-between;
      .header-l {
        font-size: 18px;
        i {
          color: #f90;
          font-size: 24;
        }
      }
      .header-r {
        font-size: 14px;
        color: #999;
        i {
          font-size: 16px;
        }
        &:hover {
          color: #f90;
          cursor: pointer;
        }
      }
    }
    .box-card-r-content {
      margin-top: 20px;
      li {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        font-size: 14px;
        margin-top: 20px;
        .tv-ranking{
          position: relative;
          top: 0;
          left: 0;
          .tv-hot {
            background-color: #f90;
            color: #fff;
            font-size: 12px;
            padding: 5px 10px;
          }
          em {
            width: 0;
            height: 0;
            border-top: 13px solid transparent;
            border-bottom: 13px solid transparent;
            border-left: 13px solid #f90;
            position: absolute;
            top: -6px;
          }
          .tv-hot-text{
            font-size: 14px;
            margin-left: 30px;
            &:hover{
              color: #f90;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
