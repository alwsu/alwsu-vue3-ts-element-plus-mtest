<template>
  <div>
    <ul class="tabs">
      <li v-for="(item,index) in tabList" :key="item" @click="tabsHandle(item,index)" :class="maction==index?'action':''">视频详情</li>
    </ul>
    <div class="content">
      <div class="content-l">
        <div class="content-l-l">
          <div class="poster"></div>
          <div>
            <el-row class="video-footer">
              <el-col
                :span="8"
                v-for="(item, index) in footerList"
                :key="index"
                :class="{
                  'hover-cl': index == hoverIndex,
                  'video-footer-item': true,
                }"
                @click="gotoIndex(index)"
                @mouseover="hoverShow(item, index)"
                @mouseout="hoverHiden(item, index)"
              >
                <span v-if="item.text != '手机'" class="mspan">
                  <i :class="[item.icon, 'micon']"></i>
                  <span>{{ item.text }}</span>
                </span>
                <el-popover
                  placement="top"
                  :width="160"
                  v-model:visible="visible"
                  v-else-if="item.text == '手机'"
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
          </div>
        </div>
        <div class="content-l-r">
          <div class="content-l-r-header">
            <span class="header-text">十二谭</span>
            <div class="videos-rate">
              <span>给影片评分：</span>
              <el-rate
                v-model="rateValue"
                show-text
                :texts="['极差', '失望', '一般', '满意', '惊喜']"
              >
              </el-rate>
            </div>
          </div>
          <div class="content-l-r-text">
            <ul>
              <li>
                <div><span>状态:</span> 更新至12集</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="content-r">
        <div class="content-r-header">
          <el-progress
            :text-inside="true"
            :stroke-width="26"
            :percentage="73"
            color="#f90"
            :format="format"
          ></el-progress>
        </div>
        <div class="cast">
          <div class="cast-item" v-for="o in 3" :key="o">
            <div class="cast-item-bgi"></div>
            <div>周星驰</div>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="recommend">
          <div class="recommend-info" v-for="ite in 2" :key="ite">
            <div class="recommend-text">辛亥革命</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { defineComponent, onMounted, ref } from "vue";
import QRCode from "qrcodejs2";
import { getCurrentInstance } from "vue";//当前组件实例
import router from "@/router/index";
export default defineComponent({
  name: "VideosParticularsCard",
  setup() {
    const tabList=ref(['videos','scenario']);
    const maction = ref(0);
    //tabs切换 
    const { ctx } = getCurrentInstance();//实例化当前组件
    const activePath = ref("/"),
    tabsHandle=(item,index)=>{
      if(index==0){
        maction.value=0;
        router.push({name:"Videos",params: {id:index}});
      }else{
        maction.value=1;
        router.push({name:"Scenario",params: {id:index}});
      }
    };
    onMounted(()=>{
      const pathName=ctx.$router.currentRoute.value.name;
      if(pathName=='Videos'){
         maction.value=0;
      }else{
        maction.value=1;
      }
    });


    // 评星
    const rateValue = ref(null);
    const footerList = ref([
      { icon: "el-icon-star-off", text: "收藏" },
      { icon: "icon-dingyue iconfont", text: "订阅" },
      { icon: "icon-erweima iconfont", text: "手机" },
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
    const hoverShow = (item, index) => {
      hoverIndex.value = index;
      if (item.text == "手机") {
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

    const format = (percentage) => {
      return (percentage * 100) / 1000 + "分";
    };
    return {
      footerList,
      gotoIndex,
      hoverIndex,
      qrcodeScan,
      visible,
      hoverShow,
      hoverHiden,
      rateValue,
      format,tabList,tabsHandle,maction
    };
  },
});
</script>

<style scoped lang="less">
.tabs {
  display: flex;
  li {
    padding: 13px 18px;
    color: #9d9d9d;
    background-color: #e7e7e7;
    font-size: 14px;
    &:hover {
      color: #fff;
      background-color: #f90;
      cursor: pointer;
    }
    &.action {
      color: #fff;
      background-color: #f90;
    }
  }
}
.content {
  display: flex;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
  .content-l {
    width: 77%;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    .content-l-l {
      width: 23%;
      .poster {
        padding-top: 140%;
        background: url(~@/assets/img/two.jpg) no-repeat top center;
        background-size: cover;
      }
      .video-footer {
        .video-footer-item {
          font-size: 14px;
          box-sizing: border-box;
          padding: 10px;
          background-color: #f5f5f5;
          color: #999;
          .mspan {
            font-size: 14px;
          }
        }
        .micon {
          font-size: 18px;
        }
        .hover-cl {
          background-color: #f90;
          color: #fff;
          cursor: pointer;
        }
      }
    }
    .content-l-r {
      width: 77%;
      margin-left: 20px;
      .content-l-r-header {
        display: flex;
        justify-content: space-between;
        .header-text {
          font-size: 18px;
          color: #333;
        }
        .videos-rate {
          width: 50%;
          font-size: 14px;
          display: flex;
          align-items: center;
          border: 1px solid #e7e7e7;
          span {
            background-color: #e7e7e7;
            color: #666;
            padding: 8px 4px;
          }
        }
      }
    }
  }
  .content-r {
    width: 23%;
    padding: 10px;
    .cast {
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      .cast-item {
        width: 30%;
        text-align: center;
        font-size: 14px;
        color: #333;
        &:hover {
          color: #f90;
          cursor: pointer;
        }
        .cast-item-bgi {
          padding-top: 100%;
          background: url(~@/assets/img/zhouxingchi_192x262.jpg) no-repeat top
            center #f3f3f3;
          background-size: cover;
          border-radius: 50%;
          margin-bottom: 5px;
        }
      }
    }
    .recommend {
      display: flex;
      justify-content: space-between;
      padding: 5px;
      box-sizing: border-box;
      text-align: center;
      color: #fff;
      font-size: 12px;
      .recommend-info {
        width: 45%;
        padding-top: 60%;
        box-sizing: border-box;
        background: url(~@/assets/img/two.jpg) no-repeat top center;
        background-size: cover;
        div {
          padding: 5px;
        }
      }
    }
  }
}
</style>
