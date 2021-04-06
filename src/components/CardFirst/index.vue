
<template>
  <el-card class="box-card">
    <div class="box-card-inner">
      <div class="box-card-left">
        <Carousel />
      </div>
      <div class="box-card-right">
        <div class="box-card-right-header">
          <el-row :gutter="20">
            <el-col :span="6" class="mitem">
              <div class="grid-content bg-purple">
                <div class="micon"><i class="el-icon-menu"></i></div>
                <span>全部影片</span>
              </div>
            </el-col>
            <el-col :span="6" class="mitem">
              <div class="grid-content bg-purple">
                <div class="micon"><i class="el-icon-s-data"></i></div>
                <span>影片排行</span>
              </div>
            </el-col>
            <el-col :span="6" class="mitem">
              <div class="grid-content bg-purple">
                <div class="micon"><i class="el-icon-star-off"></i></div>
                <span>最近更新</span>
              </div>
            </el-col>
            <el-col :span="6" class="mitem">
              <div class="grid-content bg-purple">
                <div class="micon"><i class="el-icon-moon-night"></i></div>
                <span>美人视频</span>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="box-card-right-content">
          <div class="title">
            <i class="el-icon-medal"></i><span>小编推荐</span>
          </div>
          <ul>
            <li
              v-for="(item, index) in 12"
              :key="item"
              :class="{ 'hover-cl': index == hoverIndex }"
              @click="gotoIndex(index)"
              @mouseover="hoverIndex = index"
              @mouseout="hoverIndex = -1"
            >
              <div>
                <em>{{ index + 1 }}.</em><b>你好！李焕英</b>
              </div>
              <span>高清</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Carousel from "./components/Carousel.vue";
export default defineComponent({
  name: "CardFirst",
  components: {
    Carousel,
  },
  setup() {
    const hoverIndex = ref(-1);
    const gotoIndex = (index: number) => {
      console.log(index);
    };
    return {
      hoverIndex,
      gotoIndex,
    };
  },
});
</script>

<style lang="less" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
  .box-card-inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .box-card-left {
      width: 49%;
    }
    .box-card-right {
      width: 49%;
      .box-card-right-header {
        text-align: center;
        .grid-content {
          min-height: 36px;
          border: 1px solid #fff;
          background-color: #f5f5f5;
          padding: 25px 10px;
          .micon {
            margin-bottom: 10px;
          }
          i {
            font-size: 30px;
            color: #f90;
          }
          span {
            color: #999;
            font-size: 14px;
          }
          &:hover {
            background-color: #f90;
            i {
              color: #fff;
            }
            span {
              color: #fff;
            }
          }
        }
        .mitem {
          &:hover {
            cursor: pointer;
          }
        }
      }
      .box-card-right-content {
        margin-top: 10px;
        .title {
          margin-bottom: 10px;
          font-size: 14px;
          i {
            font-size: 24px;
            color: #f90;
            margin-right: 3px;
          }
          span {
            font-size: 18px;
          }
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 50%;
            font-size: 14px;
            margin: 10px 0;
            display: flex;
            justify-content: space-between;

            em {
              font-size: 14px;
              font-style: italic;
              color: #f90;
            }
            span {
              margin-right: 15px;
            }
          }
          .hover-cl {
            cursor: pointer;
            b,
            span {
              color: #f90;
            }
          }
        }
      }
    }
  }
}
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
.bg-purple-light {
  background: #e5e9f2;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

