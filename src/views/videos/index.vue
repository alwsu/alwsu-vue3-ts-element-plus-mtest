<template>
  <VideosParticularsCard/>
  <PlaylistCard/>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import VideosParticularsCard from '@/components/VideosParticularsCard/index.vue';
import PlaylistCard from '@/components/PlaylistCard/index.vue';
  export default defineComponent({
    name: 'Videos',
    components:{
      VideosParticularsCard,PlaylistCard
    }

  })
</script>

<style>

 
</style>
