<template>
  <ClassifiedCard />
  <TvCard />
  <TongbuCard />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClassifiedCard from "@/components/ClassifiedCard/index.vue";
import TvCard from "@/components/TvCard/index.vue";
import TongbuCard from "@/components/TongbuCard/index.vue";
export default defineComponent({
  name: "Teleplay",
  components: {
    ClassifiedCard,
    TvCard,
    TongbuCard,
  },
});
</script>

<style>
</style>
