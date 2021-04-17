<template>
  <div class="menu-main">
    <div class="mheader-row">
      <div class="mheader-row-l">
        <div class="menu-rc">
          <h1 id="logo">
            <img src="~@/assets/img/logo.png" alt="logo" />
          </h1>
          <Menu />
        </div>
      </div>
      <div class="mheader-row-r">
        <div class="menu-left">
          <div class="msearch">
            <el-autocomplete
              popper-class="my-autocomplete"
              v-model="state"
              :fetch-suggestions="querySearch"
              placeholder="请输入内容"
              @select="handleSelect"
              :trigger-on-focus="false"
            >
              <template #suffix>
                <i
                  class="el-icon-search el-input__icon home-search"
                  @click="handleIconClick"
                >
                </i>
              </template>
              <template #default="{ item }">
                <div class="name">{{ item.name }}</div>
              </template>
            </el-autocomplete>
          </div>
          <div class="mpopover">
            <el-popover
              placement="top"
              :width="350"
              v-model:visible="visible"
              trigger="hover"
            >
              <div>
                <div class="popover-header">
                  <span>清空全部播放记录</span>
                  <span @click="visible = false">关闭</span>
                </div>
                <div class="popover-text">
                  <div class="text-top">暂无观看历史记录</div>
                  <ul v-if="flag" class="text-content">
                    <li>你好！李焕英</li>
                  </ul>
                  <div class="text-content" v-else>
                    <h3>
                      <router-link class="color-f90" to="/">登入</router-link
                      >后可以永久记录历史观看<span>|</span
                      ><router-link class="color-f90" to="/">注册</router-link>
                    </h3>
                  </div>
                </div>
              </div>
              <template #reference>
                <i class="el-icon-pie-chart padding-lr20 hover-clf90"></i>
              </template>
            </el-popover>
          </div>
          <i class="el-icon-user hover-clf90"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import Menu from "@/components/Menu.vue";
import { queryVideoInfo } from "@/api/index.js";

export default defineComponent({
  name: "Header",
  components: {
    Menu,
  },
  setup() {
    const state = ref("");
    const visible = ref(false);
    const restaurants = ref([]);

    const querySearch = (queryString, cb) => {
      if (queryString) {
        const name = queryString;
        queryVideoInfo({ name }).then((res) => {
          if (res && res.data.status == "0") {
            restaurants.value = res.data.data;
            cb(restaurants.value);
          }
        });
      }
    };
    const handleSelect = (item) => {
      state.value = item.name;
    };

    const handleIconClick = (ev) => {
      console.log(ev);
    };
    const flag = ref(false);
    onMounted(() => {});

    return {
      restaurants,
      state,
      querySearch,
      handleSelect,
      handleIconClick,
      visible,
      flag,
    };
  },
});
</script>

<style lang='less'>
.menu-main {
  padding: 0 20px;
  .mheader-row {
    .mheader-row-l {
      #logo > img {
        width: 150px;
        height: 50px;
        margin-right: 15px;
      }
      .menu-rc {
        display: flex;
        align-items: center;
      }
    }
    .mheader-row-r {
      .menu-left {
        display: flex;
        align-items: center;
        min-height: 61px;
         justify-content:center;
        i {
          cursor: pointer;
        }
        .msearch {
          .my-autocomplete li {
            line-height: normal;
            padding: 7px;
          }
          .my-autocomplete li .name {
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .my-autocomplete li .addr {
            font-size: 12px;
            color: #b4b4b4;
          }
          .my-autocomplete li .highlighted .addr {
            color: #ddd;
          }
          .home-search {
            cursor: pointer;
          }
          .home-search:hover {
            color: #f90;
          }
        }
        .mpopover {
          .el-popover {
            padding: 0 !important;
          }
          .popover-header {
            display: flex;
            justify-content: space-between;
            background-color: #e7e7e7;
            border-bottom: 1px solid #e7e7e7;
            text-align: center;
            width: 100%;
            height: 100%;
            span {
              padding: 5px;
              &:hover {
                color: #f90;
                cursor: pointer;
              }
            }
          }
          .popover-text {
            width: 100%;
            height: 100%;
            text-align: center;
            .text-top {
              color: #f90;
              margin-top: 10px;
            }
            .text-content {
              margin-top: 10px;
              h3 {
                span {
                  font-size: 16px;
                  padding: 0 5px;
                }
              }
            }
            .color-f90 {
              color: #f90;
              text-decoration: none;
            }
          }
        }
      }
    }
    i {
      font-size: 24px;
    }
    .padding-lr20 {
      padding: 0 20px;
    }
    .hover-clf90:hover {
      color: #f90;
    }
  }
}
@media screen and (min-width: 1280px) {
  .menu-main {
    padding: 0 20px;
    .mheader-row {
      display: flex;
      justify-content: space-between;
      .mheader-row-l {
        #logo > img {
          width: 150px;
          height: 50px;
          margin-right: 15px;
        }
      

        .menu-rc {
          display: flex;
          align-items: center;
        }
      }
      .mheader-row-r {
        .menu-left {
          display: flex;
          align-items: center;
          min-height: 61px;
          justify-content: flex-end;
          i {
            cursor: pointer;
          }
          .msearch {
            .my-autocomplete li {
              line-height: normal;
              padding: 7px;
            }
            .my-autocomplete li .name {
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .my-autocomplete li .addr {
              font-size: 12px;
              color: #b4b4b4;
            }
            .my-autocomplete li .highlighted .addr {
              color: #ddd;
            }
            .home-search {
              cursor: pointer;
            }
            .home-search:hover {
              color: #f90;
            }
          }
          .mpopover {
            .el-popover {
              padding: 0 !important;
            }
            .popover-header {
              display: flex;
              justify-content: space-between;
              background-color: #e7e7e7;
              border-bottom: 1px solid #e7e7e7;
              text-align: center;
              width: 100%;
              height: 100%;
              span {
                padding: 5px;
                &:hover {
                  color: #f90;
                  cursor: pointer;
                }
              }
            }
            .popover-text {
              width: 100%;
              height: 100%;
              text-align: center;
              .text-top {
                color: #f90;
                margin-top: 10px;
              }
              .text-content {
                margin-top: 10px;
                h3 {
                  span {
                    font-size: 16px;
                    padding: 0 5px;
                  }
                }
              }
              .color-f90 {
                color: #f90;
                text-decoration: none;
              }
            }
          }
        }
      }
      i {
        font-size: 24px;
      }
      .padding-lr20 {
        padding: 0 20px;
      }
      .hover-clf90:hover {
        color: #f90;
      }
    }
  }
}
</style>
