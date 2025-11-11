<template>
  <div class="jobs-middle-section">
    <Card class="jobs-header-card">
      <template #content>
        <h2 class="heading-semibold">Find jobs the easy way</h2>
        <p class="jobs-subtitle">Broaden your job search with curated collections</p>
      </template>
    </Card>

    <div class="jobs-list">
      <JobCard v-for="job in jobs" :key="job.id" :job="job" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import JobCard from '@/components/JobCard.vue'
import { mockJobs } from '@/utils/mockData'

const jobs = ref(mockJobs)
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.jobs-middle-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.jobs-header-card {
  background: var(--surfaces-default);
  border-radius: 12px;

  :deep(.p-card-content) {
    padding: 1.5rem;
  }

  h2 {
    margin: 0 0 0.5rem 0;
    color: var(--text-primary);
  }
}

.jobs-subtitle {
  @extend %body-small;
  margin: 0;
  color: var(--surface-grey);
}

.jobs-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}
</style>
