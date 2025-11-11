<template>
  <Card class="event-card">
    <template #content>
      <div class="event-image-container">
        <img :src="event.image" :alt="event.title" class="event-image" />
        <div class="event-time-badge">{{ event.time }}</div>
      </div>
      <div class="event-info">
        <h3 class="event-title">{{ event.title }}</h3>
        <p class="event-category">{{ event.category }}</p>
        <p class="event-description">{{ event.description }}</p>
        <p class="event-date">{{ event.date }}</p>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
import type { Event } from '@/types/events'

defineProps<{
  event: Event
}>()
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.event-card {
  background: var(--surfaces-default);
  border-radius: 12px;
  overflow: hidden;

  :deep(.p-card-content) {
    padding: 0;
  }
}

.event-image-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.event-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-time-badge {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.event-info {
  padding: 1.5rem;
}

.event-title {
  @extend %heading-regular;
  margin: 0 0 0.5rem 0;
  color: var(--text-primary);
}

.event-category {
  @extend %body-small;
  margin: 0 0 1rem 0;
  color: var(--surface-grey);
  font-weight: 500;
}

.event-description {
  @extend %body-small;
  margin: 0 0 1rem 0;
  color: var(--text-secondary);
  line-height: 1.5;
}

.event-date {
  @extend %caption-regular;
  margin: 0;
  color: var(--primary);
  font-weight: 600;
}
</style>
