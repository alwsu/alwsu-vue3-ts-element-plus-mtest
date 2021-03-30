<template>
  <CardThirdly />
  <CardFourth />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardThirdly from "@/components/CardThirdly/index.vue";
import CardFourth from "@/components/CardFourth/index.vue";
export default defineComponent({
  name: "Movie",
  components: {
    CardThirdly,CardFourth
  },
});
</script>

<style>
</style>
