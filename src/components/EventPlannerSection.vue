<template>
  <Card class="event-planner-section">
    <template #content>
      <h2 class="heading-regular">{{ $t('local.events.labels.eventPlanner') }}</h2>
      <div class="planners-list">
        <EventPlannerCard v-for="planner in planners" :key="planner.id" :planner="planner" />
      </div>
      <Button class="w-full view-all-btn">{{ $t('local.feedView.buttons.viewAll') }}</Button>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import EventPlannerCard from '@/components/EventPlannerCard.vue'
import { mockEventPlanners } from '@/utils/mockData'

const planners = ref(mockEventPlanners)
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.event-planner-section {
  background: var(--surfaces-default);
  border-radius: 12px;

  :deep(.p-card-content) {
    padding: 1.5rem;
  }

  h2 {
    margin: 0 0 1rem 0;
    color: var(--text-primary);
  }
}

.planners-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 1rem;
}

.view-all-btn {
  margin-top: 1rem;
}
</style>
