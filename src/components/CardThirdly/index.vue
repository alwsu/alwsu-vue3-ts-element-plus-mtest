<template>
  <el-card class="box-cardbox-card" :body-style="{ padding: '0px' }">
    <el-row class="box-card-list" type="flex" justify="space-between">
      <el-col :span="18" class="text item box-cardbox-card-video">
        <Breadcrumb />
        <MapItem />
        <el-row class="video-footer">
          <el-col
            v-for="(item, index) in footerList"
            :key="index"
            :class="{
              'hover-cl': index == hoverIndex,
              'video-footer-item': true,
            }"
            @click="gotoIndex(index)"
            @mouseover="hoverShow(index)"
            @mouseout="hoverHiden(index)"
          >
            <span v-if="index != 4">
              <i :class="[item.icon, 'micon']"></i>
              <span>{{ item.text }}</span>
            </span>
            <el-popover
              placement="top"
              :width="160"
              v-model:visible="visible"
              v-if="index == 4"
            >
              <div class="bookcode" id="qrcode" ref="qrcode1"></div>
              <template #reference>
                <span>
                  <i :class="[item.icon, 'micon']"></i>
                  <span>{{ item.text }}</span>
                </span>
              </template>
            </el-popover>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6" class="text item card-list-r">
        <div class="videos-r-header">
          <span class="videos-r-header-l">华数视频第23集 </span>
          <el-dropdown class="videos-r-header-r" trigger="click">
            <span class="el-dropdown-link">
              华数<i class="el-icon-caret-bottom el-icon--right"></i
            ></span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="item in 3"
                  :key="item"
                  class="mdropdown-item"
                  >华数</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="item card-list-r-content">
          <ul class="content-list">
            <li v-for="o in 24" :key="o" class="content-item">第1集</li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script >
import { defineComponent, ref, getCurrentInstance, onMounted } from "vue";
import Breadcrumb from "../Breadcrumb.vue";
import FlvItem from "@/components/videos/FlvItem.vue";
import MapItem from "@/components/videos/MapItem.vue";
import QRCode from "qrcodejs2";
export default defineComponent({
  name: "CardThirdly",
  components: { Breadcrumb, FlvItem, MapItem, QRCode },
  setup() {
    // const { ctx } = getCurrentInstance();
    // const { $axios, $x2js } = ctx;
    // const getGep = () => {
    //   $axios({
    //     url: "/api/map/baidumap.xml",
    //     method: "get",
    //     headers: {
    //       "Content-Type": "text/xml; charset=utf-8",
    //     },
    //   })
    //     .then((res) => {
    //       console.log($x2js.xml2js(res.data), "res");
    //       //xml转json
    //     //  $x2js.xml2js()
    //       //json转xml
    //       // $x2js.js2xml()
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
    // onMounted(() => {
    //   getGep();
    // });

    const footerList = ref([
      { icon: "el-icon-collection", text: "收藏" },
      { icon: "icon-dingyue iconfont", text: "订阅" },
      { icon: "icon-dianzan iconfont", text: "顶" },
      { icon: "iconfont icon-002cai-1", text: "踩" },
      { icon: "icon-erweima iconfont", text: "手机" },
      { icon: "el-icon-arrow-left", text: "上一集" },
      { icon: "el-icon-arrow-right", text: "下一集" },
    ]);
    const hoverIndex = ref(-1);
    const gotoIndex = (index) => {
      console.log(index);
    };
    const visible = ref(false);
    const qrcodeScan = () => {
      //生成二维码
      const qrcode = new QRCode("qrcode", {
        width: 150, //图像宽度
        height: 150, //图像高度
        colorDark: "#000000", //前景色
        colorLight: "#ffffff", //背景色
        typeNumber: 4,
        correctLevel: QRCode.CorrectLevel.H,
      });
      qrcode.clear(); //清除二维码
      qrcode.makeCode("https://www.baidu.com"); //生成另一个新的二维码
    };

    // 视频下方移入
    const hoverShow = (index) => {
      hoverIndex.value = index;
      if (index == 4) {
        visible.value = true;
        qrcodeScan();
      } else {
        visible.value = false;
      }
    };
    const hoverHiden = () => {
      hoverIndex.value = -1;
      visible.value = false;
      document.getElementById("qrcode").innerHTML = "";
    };
    return {
      footerList,
      gotoIndex,
      hoverIndex,
      qrcodeScan,
      visible,
      hoverShow,
      hoverHiden,
    };
  },
});
</script>
<style lang="less" scoped>
.box-cardbox-card-video {
  background-color: #e7e7e7;
}
.video-footer {
  .video-footer-item {
    width: 14.28%;
    box-sizing: border-box;
    padding: 10px;
    background-color: #f5f5f5;
    color: #999;
    .micon {
      font-size: 18px;
    }
  }
  .hover-cl {
    background-color: #f90;
    color: #fff;
    cursor: pointer;
  }
}
.card-list-r {
  margin-left: 20px;
  width: 100%;
  padding: 8px 10px 0 0;
}
.item {
  .videos-r-header {
    display: flex;
    justify-content: space-between;
    height: 39px;
    line-height: 39px;
    margin-right: 10px;
    .videos-r-header-l {
      font-size: 14px;
    }
    .videos-r-header-r {
      .el-dropdown {
        vertical-align: top;
      }
      .el-dropdown + .el-dropdown {
        margin-left: 15px;
      }
      .el-icon-caret-bottom {
        font-size: 12px;
      }
      .el-dropdown-link {
        cursor: pointer;
        color: #333;
        background-color: #e7e7e7;
        padding: 10px 15px 10px 35px;
        background-image: url("~@/assets/img/player.png");
        background-repeat: no-repeat;
        background-position: 15px -527px;
      }
    }
  }
}
.mdropdown-item {
  background-image: url("~@/assets/img/player.png");
  background-repeat: no-repeat;
  background-position: 15px -527px;
  padding-left: 35px;
}

.content-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  .content-item {
    width: 18%;
    text-align: center;
    background-color: #f5f5f5;
    padding: 14px 8px;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    font-size: 12px;
    color: #999;
    &:hover {
      color: #fff;
      background-color: #f90;
      cursor: pointer;
    }
  }
}
</style>