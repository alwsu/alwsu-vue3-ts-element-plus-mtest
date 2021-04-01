<template>
  <div class="title" v-if="title">{{title}}</div>
  <div class="swiper-container swiper1">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in 10" :key="item">
        <div class="slide-t">
          <div class="slide-t-bg" @click="">
            <div class="slide-t-text">HD</div>
          </div>
          <div class="slide-b">
            <div class="slide-b-title"><span>司藤</span></div>
            <div class="slide-b-text">
              陈瑶,张凌赫,张家鼎,王艺哲,黄毅,朱旻昕,徐晗,张野
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <!-- <div class="swiper-pagination"></div> -->

    <div class="swiper-button-prev"></div>
    <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
    <div class="swiper-button-next"></div>
    <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
  </div>
</template>

<script lang="ts">
import { defineComponent,onMounted } from "vue";
import Swiper, {
  Autoplay,
  EffectCoverflow,
  EffectCube,
  Pagination,
  Navigation,
} from "swiper";
Swiper.use([Autoplay, EffectCoverflow, EffectCube, Pagination, Navigation]);
// swiper-bundle.min.css 决定了小圆点和左右翻页，如果不需要可以不引用
import "swiper/swiper-bundle.min.css";
// swiper.less/sass/css 决定了基础的样式
import "swiper/swiper.less";
export default defineComponent({
  name: "MSwiper",
  props:{
    title:{
      type:String,
      default:''
    }
  },
  setup() {
    onMounted(() => {
      new Swiper(".swiper1", {
        slidesPerView: 4, //一行几个
        slidesPerColumn: 1, //几列
        spaceBetween: 20, //间距
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          hideOnClick: true,
        },
        // 自动轮播
        // autoplay: {
        //   delay: 3000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: false,
        // },
        on: {
          navigationShow: function () {
            console.log("按钮显示了");
          },
        },
      });
    });
  },
});
</script>

<style lang="less" scoped>
.title {
  text-align: center;
  line-height: 50px;
}

.swiper-slide {
  img {
    width: 100%;
  }
}
.box-card-fourth {
  margin-top: 10px;
}
/* 轮播<> */
.swiper-container {
  --swiper-navigation-color: #666; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 20px; /* 设置按钮大小 */
  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    --swiper-navigation-color: #f90; /* 单独设置按钮颜色 */
  }
}

.slide-t-bg {
  position: relative;
  padding-top: 140%;
  background: url("~@/assets/img/two.jpg") no-repeat top center #f3f3f3;
  background-size: cover;
  &:hover {
    cursor: pointer;
  }
  .slide-t-text {
    text-align: center;
    font-size: 12px;
    color: #fff;
    padding-bottom: 4px;
  }
}

.slide-b {
  .slide-b-title {
    margin: 8px 0;
    span {
      font-size: 14px;
      &:hover {
        color: #f90;
        cursor: pointer;
      }
    }
  }
  .slide-b-text {
    white-space: nowrap; /*超出的空白区域不换行*/
    overflow: hidden; /*超出隐藏*/
    text-overflow: ellipsis; /*文本超出显示省略号*/
    color: #999;
    font-size: 14px;
  }
}
.box-card-nav {
  padding: 0 20px;
}
.box-card-l-b {
  padding: 0 20px;
}
</style>
