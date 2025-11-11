<template>
  <div class="events-middle-section">
    <StorySection />
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import StorySection from '@/components/StorySection.vue'
import EventCard from '@/components/EventCard.vue'
import { mockEvents } from '@/utils/mockData'

const events = ref(mockEvents)
</script>

<style scoped lang="scss">
.events-middle-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
