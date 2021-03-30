<template>
  <ClassifiedCard />
  <TvCard/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClassifiedCard from "@/components/ClassifiedCard/index.vue";
import TvCard from "@/components/TvCard/index.vue";
export default defineComponent({
  name: "index",
  components: {
    ClassifiedCard,TvCard
  },
});
</script>

<style>
</style>
