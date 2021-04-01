<template>
  <el-row :gutter="20" class="box-card-fourth">
    <el-col :span="18"
      ><div class="grid-content bg-purple">
        <el-card class="box-card">
          <div class="box-card-nav">
            <!-- swiper1 -->
            <div class="title">同主演</div>
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
          </div>
        </el-card>

        <el-card class="box-card2">
          <div class="box-card-l-b">
            <div>
              <WangEditor />
            </div>
          </div>
        </el-card></div
    ></el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <el-card class="box2-card" :body-style="{ padding: '15px' }">
          <div class="hot-title"><i class="el-icon-s-data"></i>热门视频</div>
          <ul>
            <li class="hotvideos-item top-number1">
              <el-row :gutter="10">
                <el-col :xs="8" :sm="6" :md="4" :lg="9" :xl="8">
                  <div class="top-number1-l">
                    <span>1</span>
                    <span>高清版</span>
                  </div>
                </el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="9" :xl="7">
                  <div class="top-number1-r">
                    <div>红海行动</div>
                    <div>
                      <span>动作</span>
                      <span>爱情</span>
                      <span>剧情 </span>
                    </div>
                    <div class="top-number1-r-actor">
                      张译,黄景瑜,海清,杜江,蒋璐霞,尹昉,王强,郭郁滨,王雨甜,麦亨利,张涵予
                    </div>
                    <div>未录入 / 大陆</div>
                    <div>高清版</div>
                    <div>人气：<span>5420310</span></div>
                  </div>
                </el-col>
              </el-row>
            </li>
            <li v-for="o in 9" :key="o" class="hotvideos-item">
              <span>
                <em>{{ o + 1 }}</em>
                蚁人2：黄蜂女现身
              </span>
              <span> 123456 </span>
            </li>
          </ul>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
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

import WangEditor from "@/components/WangEditor.vue";

export default defineComponent({
  name: "Home",
  components: {
    WangEditor,
  },
  setup() {
    onMounted(() => {
      new Swiper(".swiper1", {
        slidesPerView: 5, //一行几个
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
.box-card2 {
  margin-top: 10px;
}
.hot-title {
  font-size: 18px;
  color: #333;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  i {
    color: #f90;
  }
}
.hotvideos-item {
  margin: 15px 0;
  span {
    font-size: 14px;
    em {
      background-color: #f90;
      color: #fff;
      margin-right: 10px;
      padding: 3px 10px;
      font-size: 12px;
      box-sizing: border-box;
      font-style: italic;
    }
    &:nth-child(1):hover {
      color: #f90;
      cursor: pointer;
    }
    &:nth-child(2) {
      color: #f90;
      float: right;
    }
  }
}
.top-number1 {
  display: flex;
  .top-number1-l {
    background: url("~@/assets/img/topnumberone.jpg") no-repeat top center;
    background-size: cover;
    display: block;
    position: relative;
    padding-top: 140%;
    span {
      &:nth-child(1) {
        position: absolute;
        top: 0px;
        left: 0px;
        padding: 5px 10px;
        text-align: right;
        font-size: 12px;
        background-color: #f90;
        color: #fff;
      }
      &:nth-child(2) {
        display: block;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 5px 10px;
        background-repeat: no-repeat;
        background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
        font-size: 12px;
        color: #fff;
        box-sizing: border-box;
        text-align: right;
      }
    }
  }
  .top-number1-r {
    font-size: 14px;
    color: #666;
    padding: 0 0 10px 10px;
    div {
      margin-top: 20px;
      &:nth-child(1) {
        font-weight: bold;
        margin-top: 0px;
      }
      &:nth-child(2) {
        span {
          margin-left: 4px;
          color: #333;
          &:nth-child(1) {
            margin: 0;
          }
        }
        span:hover {
          color: #f90;
          cursor: pointer;
        }
      }
      &:nth-child(3) {
        white-space: nowrap; /*超出的空白区域不换行*/
        overflow: hidden; /*超出隐藏*/
        text-overflow: ellipsis; /*文本超出显示省略号*/
      }
      &:nth-child(6) {
        span {
          color: #f90;
        }
      }
    }
  }
}
</style>