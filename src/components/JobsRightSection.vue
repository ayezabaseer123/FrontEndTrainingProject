<template>
  <Card class="companies-card">
    <template #content>
      <h2 class="heading-regular">{{ $t('local.jobs.labels.topCompanies') }}</h2>
      <div class="companies-list">
        <CompanyCard v-for="company in companies" :key="company.id" :company="company" />
      </div>
      <Button class="w-full view-all-btn">{{ $t('local.feedView.buttons.viewAll') }}</Button>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import CompanyCard from '@/components/CompanyCard.vue'
import { mockCompanies } from '@/utils/mockData'

const companies = ref(mockCompanies)
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.companies-card {
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

.companies-list {
  margin-bottom: 1rem;
}

.view-all-btn {
  margin-top: 1rem;
}
</style>
