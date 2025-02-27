<template>
  <div>
    <TopBar />
    <RouterView />
  </div>
</template>


<script setup lang="ts">
import TopBar from '@/components/TopBar.vue';
import { RouterView } from 'vue-router';

</script>


