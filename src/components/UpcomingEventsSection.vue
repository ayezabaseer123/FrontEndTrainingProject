<template>
  <Card class="upcoming-events-section">
    <template #content>
      <h2 class="heading-regular">{{ $t('local.events.labels.upcomingEvents') }}</h2>
      <div class="events-list">
        <div v-for="event in upcomingEvents" :key="event.id" class="event-list-item">
          <img :src="event.image" :alt="event.title" class="event-thumbnail" />
          <div class="event-meta">
            <h4 class="event-name">{{ event.title }}</h4>
            <p class="event-date-time">{{ event.date }}</p>
          </div>
          <Icon name="$share" size="20" />
        </div>
      </div>
      <Button class="w-full view-all-btn">{{ $t('local.feedView.buttons.viewAll') }}</Button>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Icon from '@/components/Icon.vue'
import { mockEvents } from '@/utils/mockData'

const upcomingEvents = ref(mockEvents.slice(0, 4))
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.upcoming-events-section {
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

.events-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.event-list-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--p-surface-0);
  }
}

.event-thumbnail {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
}

.event-meta {
  flex: 1;
}

.event-name {
  @extend %body-small;
  margin: 0;
  font-weight: 600;
  color: var(--text-primary);
}

.event-date-time {
  @extend %caption-regular;
  margin: 4px 0 0 0;
  color: var(--surface-grey);
}

.view-all-btn {
  margin-top: 1rem;
}
</style>
