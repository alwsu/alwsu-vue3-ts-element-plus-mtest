<template>
  <div class="mp-box">
    <div id="mp"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Player from "xgplayer";
export default defineComponent({
  name: "MapItem",
  components: { Breadcrumb },
  setup() {
    onMounted(() => {
      const player = new Player({
        id: "mp",
        autoplay: false,
        volume: 0.3,
        url:
          "//sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4",
        playsinline: true,
        thumbnail: {
          pic_num: 44,
          width: 160,
          height: 90,
          col: 10,
          row: 10,
          urls: [
            "//s3.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo-thumbnail.jpg",
          ],
        },
        danmu: {
          comments: [
            {
              duration: 15000,
              id: "1",
              start: 3000,
              txt: "长弹幕长弹幕长弹幕长弹幕长弹幕",
              style: {
                //弹幕自定义样式
                color: "#ff9500",
                fontSize: "20px",
                border: "solid 1px #ff9500",
                borderRadius: "50px",
                padding: "5px 11px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            },
          ],
          area: {
            start: 0,
            end: 1,
          },
        },
        height: window.innerHeight/4*3,
        width: window.innerWidth,
        whitelist: [""],
      });

      player.emit("resourceReady", [
        {
          name: "超清",
          url:
            "//sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4",
        },
        {
          name: "高清",
          url:
            "//sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-480p.mp4",
        },
        {
          name: "标清",
          url:
            "//sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4",
        },
      ]);
    });

    return {};
  },
});
</script>

<style>
.mp-box {
  display: flex;
  margin: auto;
}
#mp {
  flex: auto;
}
</style>
