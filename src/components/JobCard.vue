<template>
  <Card class="job-card">
    <template #content>
      <div class="job-content">
        <div class="job-header">
          <img :src="job.companyLogo" :alt="job.company" class="company-logo" />
          <div class="job-info">
            <h3 class="job-title">{{ job.title }}</h3>
            <p class="company-name">{{ job.company }}</p>
            <p class="job-location">{{ job.location }} | {{ job.salary }}</p>
          </div>
        </div>
        <p class="job-description">{{ job.description }}</p>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
import type { Job } from '@/types/jobs'

defineProps<{
  job: Job
}>()
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.job-card {
  background: var(--surfaces-default);
  border-radius: 12px;
  margin-bottom: 1rem;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  :deep(.p-card-content) {
    padding: 1rem;
  }
}

.job-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.job-header {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.company-logo {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
}

.job-info {
  flex: 1;
}

.job-title {
  @extend %body-normal;
  margin: 0;
  font-weight: 600;
  color: var(--primary);
  line-height: 1.4;
}

.company-name {
  @extend %body-small;
  margin: 4px 0;
  color: var(--text-primary);
  font-weight: 500;
}

.job-location {
  @extend %caption-regular;
  margin: 0;
  color: var(--surface-grey);
}

.job-description {
  @extend %body-small;
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.5;
}
</style>
