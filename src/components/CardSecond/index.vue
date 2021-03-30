<template>
  <el-card class="box-cardbox-card">
    <template #header>
      <div class="card-header">
        <span><i class="el-icon-sunny"></i><span>最近更新</span></span>
        <el-button class="button" type="text"
          ><span class="card-header-more">更多</span
          ><i class="el-icon-arrow-right card-header-more-micon"></i
        ></el-button>
      </div>
    </template>

    <el-row :gutter="20" class="box-card-list">
      <el-col
        :xs="8"
        :sm="6"
        :md="4"
        v-for="o in 6"
        :key="o"
        class="text item box-card-img-item"
      >
        <div class="grid-content bg-purple box-card-img-item-bg">
          <span class="player"><i class="el-icon-video-play"></i> </span>
          <span class="score"><b>10.0</b></span>
          <span class="text-poster">DVD</span>
        </div>
        <div class="title">霍比特人时代</div>
        <div class="subtitle hidden-xs-only">
          Grégory,Fitoussi,Audrey,Fleurot
        </div>
      </el-col>
    </el-row>

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
  </el-card>
</template>

<script lang="ts">
import { defineComponent ,ref} from "vue";
export default defineComponent({
  name: "CardSecond",
  setup() {
    const hoverIndex = ref(-1);
    const gotoIndex = (index:number) => {
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
  span {
    font-size: 18px;
    i {
      font-size: 24px;
      color: #f90;
      margin-right: 6px;
      &.card-header-more-micon,
      &.card-header-more {
        font-size: 16px;
        color: #999;
      }
    }
    &:hover {
      .card-header-more-micon,
      .card-header-more {
        color: #f90;
      }
    }
  }
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
}
span&.card-header-more {
  font-size: 14px;
  color: #999;
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

.box-card-img-item-bg {
  width: 100%;
  background: url('~@/assets/img/one.jpg')
    no-repeat top center #f3f3f3;
  background-size: cover;
  padding-top: 140%;
  box-sizing: border-box;
  position: relative;
  top: 0;
  left: 0;
  .player {
    height: 100%;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: block;
    i {
      display: none;
    }
    &:hover {
      background: rgba(0, 0, 0, 0.2);
      cursor: pointer;
      i {
        color: #fff;
        font-size: 40px;
        top: 40%;
        position: relative;
        display: inline-block;
      }
    }
  }
  .score {
    position: absolute;
    top: 5px;
    left: -5px;
    padding: 0 5px;
    text-align: right;
    font-size: 12px;
    b {
      background-color: #f90;
      color: #fff;
    }
  }
  .text-poster {
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
.title {
  white-space: nowrap; /*超出的空白区域不换行*/
  overflow: hidden; /*超出隐藏*/
  text-overflow: ellipsis; /*文本超出显示省略号*/
  margin: 10px 0;
  &:hover {
    color: #f90;
    cursor: pointer;
  }
}
.subtitle {
  white-space: nowrap; /*超出的空白区域不换行*/
  overflow: hidden; /*超出隐藏*/
  text-overflow: ellipsis; /*文本超出显示省略号*/
  color: #999;
}
ul {
  display: flex;
  flex-wrap: wrap;
  li {
    width: 25%;
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
</style>
