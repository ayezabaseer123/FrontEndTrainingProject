<template>
  <div class="event-card">
    <div class="event-header">
      <div class="event-info">
        <i class="event-icon pi pi-calendar" style="color: var(--p-primary-color)"></i>
        <div class="event-details">
          <h3 class="event-title">{{ event.title }}</h3>
          <p class="event-date">{{ formatDate(event.date) }}</p>
        </div>
      </div>
    </div>
    <div class="event-content">
      <p class="event-category">{{ event.category }}</p>
      <p class="event-description">{{ event.description }}</p>
    </div>
    <div class="event-footer">
      <div class="event-attendees">
        <AvatarGroup>
          <Avatar
            v-for="(attendee, index) in event.attendees.slice(0, 3)"
            :key="index"
            :image="attendee"
            shape="circle"
          />
          <Avatar
            v-if="event.attendees.length > 3"
            :label="`+${event.attendees.length - 3}`"
            shape="circle"
            style="background-color: var(--p-primary-color); color: white"
          />
        </AvatarGroup>
      </div>
      <Button
        icon="pi pi-calendar-plus"
        severity="primary"
        rounded
        text
        @click="onInterested"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import AvatarGroup from 'primevue/avatargroup'

export interface Event {
  id: string
  title: string
  date: Date
  category: string
  description: string
  attendees: string[]
  location?: string
}

const props = defineProps<{
  event: Event
}>()

const emit = defineEmits<{
  'interested': [id: string]
}>()

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }
  return new Date(date).toLocaleDateString('en-US', options)
}

const onInterested = () => {
  emit('interested', props.event.id)
}
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.event-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: var(--p-border-radius, 6px);
  background-color: var(--p-surface-card, #fff);
  border: 1px solid var(--p-surface-border, #e5e7eb);
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: var(--p-shadow-2);
    transform: translateY(-2px);
  }
}

.event-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.event-info {
  display: flex;
  gap: 1rem;
  flex: 1;
}

.event-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.event-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.event-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--p-text-color, #1a202c);
}

.event-date {
  margin: 0;
  font-size: 0.875rem;
  color: var(--p-text-muted-color, #6b7280);
}

.event-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.event-category {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--p-primary-color);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.event-description {
  margin: 0;
  font-size: 0.9rem;
  color: var(--p-text-color, #1a202c);
  line-height: 1.5;
}

.event-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--p-surface-border, #e5e7eb);
}

.event-attendees {
  display: flex;
  align-items: center;
}

:deep(.p-avatargroup .p-avatar) {
  border: 2px solid var(--p-surface-card, #fff);
}
</style>
