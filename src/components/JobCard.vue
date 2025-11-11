<template>
  <div class="job-card">
    <div class="job-header">
      <img :src="job.companyLogo" :alt="job.companyName" class="company-logo" />
      <div class="job-info">
        <h3 class="job-title">{{ job.title }}</h3>
        <p class="company-name">{{ job.companyName }}</p>
      </div>
    </div>

    <div class="job-details">
      <p class="job-location">
        <i class="pi pi-map-marker" style="margin-right: 0.5rem"></i>
        {{ job.location }}
      </p>
      <p class="job-salary">
        <i class="pi pi-dollar" style="margin-right: 0.5rem"></i>
        {{ job.salary }}
      </p>
    </div>

    <div class="job-description">
      {{ job.description }}
    </div>

    <div class="job-tags">
      <Tag
        v-for="(tag, index) in job.tags.slice(0, 3)"
        :key="index"
        :value="tag"
        severity="info"
      />
      <span v-if="job.tags.length > 3" class="more-tags">
        +{{ job.tags.length - 3 }}
      </span>
    </div>

    <Button
      class="apply-button"
      label="Apply Now"
      icon="pi pi-external-link"
      @click="onApply"
    />
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import Tag from 'primevue/tag'

export interface Job {
  id: string
  title: string
  companyName: string
  companyLogo: string
  location: string
  salary: string
  description: string
  tags: string[]
  postedDate?: Date
}

const props = defineProps<{
  job: Job
}>()

const emit = defineEmits<{
  'apply': [id: string]
}>()

const onApply = () => {
  emit('apply', props.job.id)
}
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.job-card {
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

.job-header {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.company-logo {
  width: 50px;
  height: 50px;
  border-radius: var(--p-border-radius, 6px);
  object-fit: cover;
  flex-shrink: 0;
}

.job-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
}

.job-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--p-primary-color);
  line-height: 1.3;
}

.company-name {
  margin: 0;
  font-size: 0.9rem;
  color: var(--p-text-muted-color, #6b7280);
}

.job-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--p-text-muted-color, #6b7280);

  p {
    margin: 0;
    display: flex;
    align-items: center;
  }
}

.job-description {
  font-size: 0.95rem;
  color: var(--p-text-color, #1a202c);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.job-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;

  :deep(.p-tag) {
    font-size: 0.75rem;
  }
}

.more-tags {
  font-size: 0.85rem;
  color: var(--p-text-muted-color, #6b7280);
  font-weight: 500;
}

.apply-button {
  align-self: flex-start;
  margin-top: auto;
}

:deep(.p-button) {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}
</style>
