<template>
  <div class="dashboard-view">
    <TopBar />
    <RouterView />
    <!-- Add your template content here -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TopBar from '@/components/TopBar.vue';
import { RouterView } from 'vue-router'

// Add your component logic here
</script>

<style scoped>
.dashboard-view {
  /* Add your component styles here */
}
</style>