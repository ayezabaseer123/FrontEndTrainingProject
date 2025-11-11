<template>
  <div class="event-planner-item">
    <div class="planner-header">
      <Avatar :image="planner.avatar" size="large" shape="circle" />
      <div class="planner-info">
        <h3 class="planner-name">{{ planner.name }}</h3>
        <div class="planner-rating">
          <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= Math.floor(planner.rating) }">★</span>
          <span class="rating-value">{{ planner.rating }}</span>
        </div>
      </div>
    </div>
    <button class="phone-btn">
      <i class="pi pi-phone"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
import type { EventPlanner } from '@/types/events'

defineProps<{
  planner: EventPlanner
}>()
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.event-planner-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--p-surface-0);
  }
}

.planner-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.planner-info {
  flex: 1;
}

.planner-name {
  @extend %body-small;
  margin: 0;
  font-weight: 600;
  color: var(--text-primary);
}

.planner-rating {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
}

.star {
  font-size: 12px;
  color: #ddd;

  &.filled {
    color: #ffc107;
  }
}

.rating-value {
  @extend %caption-regular;
  color: var(--surface-grey);
  font-size: 12px;
}

.phone-btn {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: var(--primary);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
