<template>
  <div class="events-view">
    <div class="columns">
      <div class="col col-1">
        <EventPlannerSection />
      </div>
      <div class="col col-2">
        <EventsMiddleSection />
      </div>
      <div class="col col-3">
        <UpcomingEventsSection />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EventPlannerSection from '@/components/EventPlannerSection.vue'
import EventsMiddleSection from '@/components/EventsMiddleSection.vue'
import UpcomingEventsSection from '@/components/UpcomingEventsSection.vue'
</script>

<style scoped lang="scss">
.events-view {
  background-color: #EEF4FD;
  padding: 1em;
  min-height: 93vh;
  height: 100%;
}

.columns {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.col-1 {
  width: 25%;
}

.col-2 {
  width: 45%;
}

.col-3 {
  width: 25%;
}

@media (max-width: 600px) {
  .columns {
    flex-direction: column;
  }

  .col {
    width: 100%;
  }
}
</style>
