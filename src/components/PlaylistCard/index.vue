<template>
  <div class="mplaylist-box">
    <div class="playlist-box-l">
      <div class="playlist-box-l-header">
        <div class="header-l">
          <span class="header-l-item youkubgi action">优酷</span>
          <span class="header-l-item huashubgi">华数</span>
        </div>
        <div class="header-r">
          <i class="el-icon-message"></i>不能播放，报错
        </div>
      </div>
      <div class="playlist-box-l-content">
        <ul>
          <li v-for="item in 12" :key="item">第{{ 12 - item + 1 }}集</li>
        </ul>
      </div>
    </div>
    <div class="playlist-box-r">
      <div class="hot-top">
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
                    <div class="top-number1-r-title">红海行动</div>
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PlaylistCard",
});
</script>

<style lang="less" scoped>
.mplaylist-box {
  display: flex;
  margin-top: 20px;
  .playlist-box-l {
    width: 74%;
    .playlist-box-l-header {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      .header-l {
        padding: 10px 0;
        .header-l-item {
          padding: 10px 15px 10px 35px;
          font-size: 14px;
          background: url(~@/assets/img/player.png) no-repeat;
          margin-right: 5px;
          cursor: pointer;
          &.action {
            background-color: #fff;
            color: #333;
            cursor: default;
          }
          &:hover {
            background-color: #fff;
            color: #333;
          }
        }
        .youkubgi {
          background-position: 15px 10px;
        }
        .huashubgi {
          background-position: 15px -527px;
        }
      }
      .header-r {
        i {
          font-size: 16px;
        }
        &:hover {
          color: #f90;
          cursor: pointer;
        }
      }
    }
    .playlist-box-l-content {
      background-color: #fff;
      padding: 15px 15px 25px;
      ul {
        display: flex;
        flex-wrap: wrap;
        font-size: 12px;
        text-align: center;
        li {
          background-color: #f5f5f5;
          color: #999;
          padding: 10px 8px;
          width: 12.5%;
          margin-top: 10px;
          margin-right: 7px;
          box-sizing: border-box;
          border: 1px #fff solid;
          border-radius: 5px;
          &:hover {
            cursor: pointer;
            background-color: #f90;
            color: #fff;
          }
        }
      }
    }
  }
  .playlist-box-r {
    width: 26%;
    margin-left: 20px;
    .hot-top {
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
              background-image: linear-gradient(
                transparent,
                rgba(0, 0, 0, 0.5)
              );
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
          .top-number1-r-title {
          }
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
    }
  }
}
</style>
