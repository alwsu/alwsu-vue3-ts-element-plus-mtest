<template>
  <div id="mse"></div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import Player from "xgplayer";

export default defineComponent({
  name: "FlvItem",
  setup() {
    const player = new Player({
      id: "mse",
      url:
        "//sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv",
      isLive: true,
      playsinline: true,
      height: window.innerHeight,
      width: window.innerWidth,
    });
    player.emit("resourceReady", [
      {
        name: "超清",
        url:
          "//sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-720p.flv",
      },
      {
        name: "高清",
        url:
          "//sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-480p.flv",
      },
      {
        name: "标清",
        url:
          "//sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv",
      },
    ]);
    onMounted(() => {
      window.addEventListener("resize", function () {
        const mse = document.getElementById("mse");
        mse.style.height = window.innerHeight + "px";
      });
    });
    return {};
  },
});
</script>

<style scoped>

#mse {
  flex: auto;
}
</style>
