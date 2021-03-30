<template>
  <div class="editor-title">心动的瞬间评论</div>
  <div id="wangeditor">
    <!-- <div ref="editor"></div> -->
  </div>
  <div class="wangeditor-btn">
    <el-button type="success" size="small">提交</el-button>
  </div>
  <el-divider></el-divider>
  <div class="sofa">
    <div class="sofa" v-if="true">当前没有评论，赶紧抢个沙发！</div>
    <ul class="sofa" v-else>
      <li></li>
    </ul>
  </div>
</template>
<script>
import E from "wangeditor";
import { defineComponent, onMounted, reactive, ref } from "vue";
export default defineComponent({
  name: "WangEditor",
  setup() {
    const editor = ref(null),
      editorContent = ref("");
    onMounted(() => {
      editor.value = new E(document.querySelector("#wangeditor"));
      editor.value.config.height = 200;
      editor.value.config.zIndex = 1;
      editor.value.config.showFullScreen = false;
      // 编辑器的事件，每次改变会获取其html内容
      editor.value.config.onchange = (html) => {
        console.log("html", html);
        editorContent.value = html;
      };
      editor.value.config.menus = [
        // 菜单配置
        // "head", // 标题
        // "bold", // 粗体
        // "fontSize", // 字号
        // "fontName", // 字体
        // "italic", // 斜体
        // "underline", // 下划线
        // "strikeThrough", // 删除线
        // "foreColor", // 文字颜色
        // "backColor", // 背景颜色
        // "link", // 插入链接
        // "list", // 列表
        // "justify", // 对齐方式
        // "quote", // 引用
        "emoticon", // 表情
        // "image", // 插入图片
        // "table", // 表格
        // "code", // 插入代码
        // "undo", // 撤销
        // "redo", // 重复
      ];
      editor.value.create(); // 创建富文本实例
    });
    return {
      editor,
      editorContent,
    };
  },
});
</script>
<style lang="less" scoped>
.wangeditor-btn {
  margin-top: 5px;
  text-align: right;
}
.editor-title {
  margin-bottom: 20px;
  font-size: 18px;
}
</style>