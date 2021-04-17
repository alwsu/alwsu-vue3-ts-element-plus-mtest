<template>
  <div class="mapp">
    <div class="mapp-row">
      <div class="black"></div>
      <div class="mapp-col-conten">
        <el-container class="container">
          <div class="mheader">
            <div class="black"></div>
            <div class="mheader-content">
              <Header />
            </div>
            <div class="black"></div>
          </div>
          <div class="mian">
            <div id="app">
              <router-view />
            </div>
          </div>
        </el-container>
      </div>
      <div class="black"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "App",
  components: { Header },
});
</script>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  color: #666;
}
.mapp {
  .mapp-row {
    display: flex;
    justify-content: space-between;
    .black {
      width: 0%;
    }
    .mapp-col-conten {
      width: 100%;
      .mian {
        width: 100%;
        margin-top: 160px;
      }
      .mheader {
        background-color: #fff;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
        width: 100%;
        height: 122px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        display: flex;
        justify-content: space-between;
        .mheader-content {
          width: 100%;
        }
      }
    }
  }
}
@media screen and (min-width: 1280px) {
  .mapp {
    .mapp-row {
      display: flex;
      justify-content: space-between;
      .black {
        width: 0%;
      }
      .mapp-col-conten {
        width: 100%;
        .mian {
          width: 100%;
          margin-top: 81px;
        }
        .mheader {
          background-color: #fff;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
          width: 100%;
          height: 61px;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          display: flex;
          justify-content: space-between;
          .mheader-content {
            width: 100%;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1440px) {
  .mapp {
    .mapp-row {
      display: flex;
      justify-content: space-between;
      .black {
        width: 8%;
      }
      .mapp-col-conten {
        width: 84%;
        .mian {
          width: 100%;
          margin-top: 81px;
        }
        .mheader {
          background-color: #fff;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
          width: 100%;
          height: 61px;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          display: flex;
          justify-content: space-between;
          .mheader-content {
            width: 84%;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1680px) {
  .mapp {
    .mapp-row {
      display: flex;
      justify-content: space-between;
      .black {
        width: 16%;
      }
      .mapp-col-conten {
        width: 68%;
        .mian {
          width: 100%;
          margin-top: 81px;
        }
        .mheader {
          background-color: #fff;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
          width: 100%;
          height: 61px;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          display: flex;
          justify-content: space-between;
          .mheader-content {
            width: 68%;
          }
        }
      }
    }
  }
}
</style>
