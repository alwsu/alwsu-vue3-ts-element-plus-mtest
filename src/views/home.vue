<template>
  <CardFirst/>
  <CardSecond/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CardFirst from '@/components/CardFirst/index.vue';
import CardSecond from '@/components/CardSecond/index.vue';
  export default defineComponent({
    name: 'Home',
    components:{
      CardFirst,CardSecond
    }
  })
</script>

<style>

 
</style>
