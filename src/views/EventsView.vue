<template>
  <div class="events-view">
    <div class="events-header">
      <h1 class="events-title">{{ $t('local.events.labels.events') }}</h1>
      <p class="events-subtitle">Discover and join events happening in your network</p>
    </div>

    <div class="events-container">
      <div class="events-list">
        <EventCard
          v-for="event in events"
          :key="event.id"
          :event="event"
          @interested="handleEventInterest"
        />

        <div v-if="events.length === 0" class="empty-state">
          <i class="pi pi-calendar" style="font-size: 3rem; color: var(--p-text-muted-color)"></i>
          <p>{{ $t('local.events.labels.noEvents') }}</p>
        </div>
      </div>

      <div class="events-sidebar">
        <div class="upcoming-section">
          <h3 class="section-title">{{ $t('local.events.labels.upcoming') }}</h3>
          <div class="upcoming-events">
            <div
              v-for="upEvent in upcomingEvents"
              :key="upEvent.id"
              class="upcoming-item"
              @click="scrollToEvent(upEvent.id)"
            >
              <div class="upcoming-date">
                <span class="date-day">{{ getDay(upEvent.date) }}</span>
                <span class="date-month">{{ getMonth(upEvent.date) }}</span>
              </div>
              <div class="upcoming-info">
                <p class="upcoming-title">{{ upEvent.title }}</p>
                <p class="upcoming-time">{{ formatTime(upEvent.date) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import EventCard from '@/components/EventCard.vue'
import type { Event } from '@/components/EventCard.vue'

const events = ref<Event[]>([])
const upcomingEvents = ref<Event[]>([])

onMounted(() => {
  loadEvents()
})

const loadEvents = () => {
  const sampleEvents: Event[] = [
    {
      id: '1',
      title: 'Bear Valley Music Festival',
      date: new Date('2024-07-24'),
      category: 'Instrument Maintenance and Repair',
      description: 'Join us for an incredible music festival featuring live performances from renowned artists. A celebration of music and creativity.',
      attendees: [
        'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100',
        'https://images.pexels.com/photos/3370742/pexels-photo-3370742.jpeg?auto=compress&cs=tinysrgb&w=100',
        'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=100'
      ]
    },
    {
      id: '2',
      title: 'Tech Summit 2024',
      date: new Date('2024-08-15'),
      category: 'Technology & Innovation',
      description: 'Explore cutting-edge technologies and network with industry leaders at our annual tech summit.',
      attendees: [
        'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100',
        'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=100'
      ]
    },
    {
      id: '3',
      title: 'Web Design Workshop',
      date: new Date('2024-07-30'),
      category: 'Education & Training',
      description: 'Learn modern web design principles and techniques from industry experts in this hands-on workshop.',
      attendees: [
        'https://images.pexels.com/photos/5973833/pexels-photo-5973833.jpeg?auto=compress&cs=tinysrgb&w=100',
        'https://images.pexels.com/photos/3370742/pexels-photo-3370742.jpeg?auto=compress&cs=tinysrgb&w=100',
        'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100',
        'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=100'
      ]
    },
    {
      id: '4',
      title: 'Startup Networking Mixer',
      date: new Date('2024-08-05'),
      category: 'Networking',
      description: 'Connect with fellow entrepreneurs and startup founders in a casual networking environment.',
      attendees: [
        'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=100'
      ]
    }
  ]

  events.value = sampleEvents
  upcomingEvents.value = sampleEvents.slice(0, 4)
}

const handleEventInterest = (eventId: string) => {
  console.log('Interested in event:', eventId)
}

const getDay = (date: Date) => {
  return new Date(date).getDate()
}

const getMonth = (date: Date) => {
  return new Date(date).toLocaleDateString('en-US', { month: 'short' })
}

const formatTime = (date: Date) => {
  return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

const scrollToEvent = (eventId: string) => {
  const element = document.getElementById(`event-${eventId}`)
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.events-view {
  padding: 2rem 1.5rem;
  min-height: calc(100vh - 64px);
  background-color: var(--p-surface-ground, #f8fafc);
}

.events-header {
  margin-bottom: 2rem;
}

.events-title {
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
  font-weight: 700;
  color: var(--p-text-color, #1a202c);
}

.events-subtitle {
  margin: 0;
  font-size: 1rem;
  color: var(--p-text-muted-color, #6b7280);
}

.events-container {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 4rem 2rem;
  text-align: center;
  color: var(--p-text-muted-color, #6b7280);

  p {
    margin: 0;
    font-size: 1rem;
  }
}

.events-sidebar {
  position: sticky;
  top: 80px;
  height: fit-content;
}

.section-title {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--p-text-color, #1a202c);
}

.upcoming-events {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.upcoming-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: var(--p-border-radius, 6px);
  background-color: var(--p-surface-card, #fff);
  border: 1px solid var(--p-surface-border, #e5e7eb);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: var(--p-surface-hover, #f3f4f6);
    border-color: var(--p-primary-color, #1565d8);
  }
}

.upcoming-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: var(--p-border-radius, 6px);
  background-color: var(--p-primary-color, #1565d8);
  color: white;
  flex-shrink: 0;

  .date-day {
    font-size: 1.25rem;
    font-weight: 700;
  }

  .date-month {
    font-size: 0.75rem;
    font-weight: 600;
  }
}

.upcoming-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
  min-width: 0;
}

.upcoming-title {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--p-text-color, #1a202c);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.upcoming-time {
  margin: 0;
  font-size: 0.8rem;
  color: var(--p-text-muted-color, #6b7280);
}

@media (max-width: 1024px) {
  .events-container {
    grid-template-columns: 1fr;
  }

  .events-sidebar {
    position: static;
  }
}

@media (max-width: 768px) {
  .events-view {
    padding: 1.5rem 1rem;
  }

  .events-title {
    font-size: 1.5rem;
  }
}
</style>
