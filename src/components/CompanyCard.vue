<template>
  <div class="company-item">
    <img :src="company.logo" :alt="company.name" class="company-logo" />
    <div class="company-info">
      <h3 class="company-name">{{ company.name }}</h3>
      <p class="company-location">{{ company.location }}</p>
    </div>
    <Icon name="$share" size="20" />
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import type { Company } from '@/types/jobs'

defineProps<{
  company: Company
}>()
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.company-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--p-surface-border);

  &:last-child {
    border-bottom: none;
  }
}

.company-logo {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
}

.company-info {
  flex: 1;
}

.company-name {
  @extend %body-small;
  margin: 0;
  font-weight: 600;
  color: var(--text-primary);
}

.company-location {
  @extend %caption-regular;
  margin: 4px 0 0 0;
  color: var(--surface-grey);
}
</style>
