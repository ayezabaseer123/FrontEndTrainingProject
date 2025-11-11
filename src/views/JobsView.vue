<template>
  <div class="jobs-view">
    <div class="jobs-header">
      <h1 class="jobs-title">{{ $t('local.jobs.labels.jobs') }}</h1>
      <p class="jobs-subtitle">{{ $t('local.jobs.labels.subtitle') }}</p>
    </div>

    <div class="jobs-container">
      <div class="jobs-filters">
        <div class="filter-section">
          <h3 class="filter-title">{{ $t('local.jobs.labels.filters') }}</h3>

          <div class="filter-group">
            <label class="filter-label">{{ $t('local.jobs.labels.jobType') }}</label>
            <div class="checkbox-list">
              <div class="checkbox-item">
                <Checkbox v-model="filters.fullTime" binary input-id="fulltime" />
                <label for="fulltime">Full-time</label>
              </div>
              <div class="checkbox-item">
                <Checkbox v-model="filters.partTime" binary input-id="parttime" />
                <label for="parttime">Part-time</label>
              </div>
              <div class="checkbox-item">
                <Checkbox v-model="filters.contract" binary input-id="contract" />
                <label for="contract">Contract</label>
              </div>
            </div>
          </div>

          <div class="filter-group">
            <label class="filter-label">{{ $t('local.jobs.labels.salaryRange') }}</label>
            <Slider v-model="filters.salary" :min="0" :max="250" class="salary-slider" />
            <span class="salary-display">${{ filters.salary }}k+</span>
          </div>
        </div>
      </div>

      <div class="jobs-list">
        <div class="jobs-header-row">
          <h2 class="list-title">{{ $t('local.jobs.labels.findJobs') }}</h2>
          <Dropdown
            v-model="sortBy"
            :options="sortOptions"
            option-label="label"
            option-value="value"
            class="sort-dropdown"
          />
        </div>

        <JobCard
          v-for="job in filteredJobs"
          :key="job.id"
          :job="job"
          @apply="handleJobApply"
        />

        <div v-if="filteredJobs.length === 0" class="empty-state">
          <i class="pi pi-briefcase" style="font-size: 3rem; color: var(--p-text-muted-color)"></i>
          <p>{{ $t('local.jobs.labels.noJobs') }}</p>
        </div>
      </div>

      <div class="jobs-sidebar">
        <div class="companies-section">
          <h3 class="section-title">{{ $t('local.jobs.labels.topCompanies') }}</h3>
          <div class="companies-list">
            <div
              v-for="company in topCompanies"
              :key="company.id"
              class="company-item"
            >
              <img :src="company.logo" :alt="company.name" class="company-logo-sm" />
              <div class="company-info">
                <p class="company-name-sm">{{ company.name }}</p>
                <p class="company-location">{{ company.location }}</p>
              </div>
              <Button
                icon="pi pi-angle-right"
                text
                rounded
                severity="primary"
              />
            </div>
          </div>
          <Button class="view-all-btn" label="View All" severity="primary" outlined />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import JobCard from '@/components/JobCard.vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Slider from 'primevue/slider'
import Dropdown from 'primevue/dropdown'
import type { Job } from '@/components/JobCard.vue'

interface Company {
  id: string
  name: string
  logo: string
  location: string
}

const jobs = ref<Job[]>([])
const topCompanies = ref<Company[]>([])
const sortBy = ref('recent')
const filters = ref({
  fullTime: false,
  partTime: false,
  contract: false,
  salary: 50
})

const sortOptions = [
  { label: 'Most Recent', value: 'recent' },
  { label: 'Most Relevant', value: 'relevant' },
  { label: 'Salary: High to Low', value: 'salary-high' },
  { label: 'Salary: Low to High', value: 'salary-low' }
]

const filteredJobs = computed(() => {
  return jobs.value.filter(job => {
    const minSalary = filters.value.salary * 1000
    const jobSalaryNum = parseInt(job.salary.replace(/\D/g, '')) * 1000
    return jobSalaryNum >= minSalary
  })
})

onMounted(() => {
  loadJobs()
})

const loadJobs = () => {
  const sampleJobs: Job[] = [
    {
      id: '1',
      title: 'Marketing Coordinator',
      companyName: 'Louis Vuitton',
      companyLogo: 'https://images.pexels.com/photos/3633534/pexels-photo-3633534.jpeg?auto=compress&cs=tinysrgb&w=100',
      location: 'Lafayette, California',
      salary: '$50/hr',
      description: 'We are looking for a talented Marketing Coordinator to join our dynamic team and help drive our marketing initiatives forward.',
      tags: ['Marketing', 'Remote', 'Full-time']
    },
    {
      id: '2',
      title: 'Software Development Manager',
      companyName: 'Tech Innovators Inc.',
      companyLogo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100',
      location: 'Stockton, New Hampshire',
      salary: '$80/hr',
      description: 'Lead our software development team and oversee the creation of innovative solutions for our enterprise clients.',
      tags: ['Technology', 'Leadership', 'Full-time']
    },
    {
      id: '3',
      title: 'Team Leader',
      companyName: 'Creative Solutions Ltd.',
      companyLogo: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=100',
      location: 'Portland, Illinois',
      salary: '$100/hr',
      description: 'Manage a team of professionals and drive organizational success through strategic planning and execution.',
      tags: ['Management', 'Leadership', 'Full-time']
    },
    {
      id: '4',
      title: 'UI/UX Designer',
      companyName: 'Digital Design Studio',
      companyLogo: 'https://images.pexels.com/photos/5973833/pexels-photo-5973833.jpeg?auto=compress&cs=tinysrgb&w=100',
      location: 'Corona, Michigan',
      salary: '$80/hr',
      description: 'Design beautiful and intuitive user interfaces for web and mobile applications that impact millions of users.',
      tags: ['Design', 'Remote', 'Full-time']
    },
    {
      id: '5',
      title: 'Senior Data Analyst',
      companyName: 'Analytics Pro',
      companyLogo: 'https://images.pexels.com/photos/3370742/pexels-photo-3370742.jpeg?auto=compress&cs=tinysrgb&w=100',
      location: 'New York, New York',
      salary: '$95/hr',
      description: 'Analyze complex datasets and provide actionable insights to drive business decisions and strategy.',
      tags: ['Data', 'Analytics', 'Full-time']
    },
    {
      id: '6',
      title: 'Customer Success Manager',
      companyName: 'SaaS Solutions',
      companyLogo: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=100',
      location: 'San Francisco, California',
      salary: '$70/hr',
      description: 'Support and guide our clients to achieve their business goals while building long-term relationships.',
      tags: ['Customer Service', 'Remote', 'Full-time']
    }
  ]

  jobs.value = sampleJobs

  topCompanies.value = [
    {
      id: '1',
      name: 'Maroni LLC.',
      logo: 'https://images.pexels.com/photos/3633534/pexels-photo-3633534.jpeg?auto=compress&cs=tinysrgb&w=100',
      location: 'Portland, Illinois'
    },
    {
      id: '2',
      name: 'Acme Co.',
      logo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100',
      location: 'Stockton, New Hampshire'
    },
    {
      id: '3',
      name: 'Gillette',
      logo: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=100',
      location: 'Lafayette, California'
    },
    {
      id: '4',
      name: 'MasterCard',
      logo: 'https://images.pexels.com/photos/5973833/pexels-photo-5973833.jpeg?auto=compress&cs=tinysrgb&w=100',
      location: 'Corona, Michigan'
    }
  ]
}

const handleJobApply = (jobId: string) => {
  console.log('Applied to job:', jobId)
}
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.jobs-view {
  padding: 2rem 1.5rem;
  min-height: calc(100vh - 64px);
  background-color: var(--p-surface-ground, #f8fafc);
}

.jobs-header {
  margin-bottom: 2rem;
}

.jobs-title {
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
  font-weight: 700;
  color: var(--p-text-color, #1a202c);
}

.jobs-subtitle {
  margin: 0;
  font-size: 1rem;
  color: var(--p-text-muted-color, #6b7280);
}

.jobs-container {
  display: grid;
  grid-template-columns: 280px 1fr 350px;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.jobs-filters {
  position: sticky;
  top: 80px;
  height: fit-content;
}

.filter-section {
  background-color: var(--p-surface-card, #fff);
  border-radius: var(--p-border-radius, 6px);
  padding: 1.5rem;
  border: 1px solid var(--p-surface-border, #e5e7eb);
}

.filter-title {
  margin: 0 0 1rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--p-text-color, #1a202c);
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.filter-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--p-text-color, #1a202c);
}

.checkbox-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  label {
    font-size: 0.9rem;
    color: var(--p-text-color, #1a202c);
    cursor: pointer;
  }
}

.salary-slider {
  margin: 0.75rem 0;
}

.salary-display {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--p-primary-color, #1565d8);
}

.jobs-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.jobs-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  .list-title {
    margin: 0;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--p-text-color, #1a202c);
  }
}

.sort-dropdown {
  min-width: 180px;
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

.jobs-sidebar {
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

.companies-section {
  background-color: var(--p-surface-card, #fff);
  border-radius: var(--p-border-radius, 6px);
  padding: 1.5rem;
  border: 1px solid var(--p-surface-border, #e5e7eb);
}

.companies-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.company-item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  padding: 0.75rem;
  border-radius: var(--p-border-radius, 6px);
  background-color: var(--p-surface-ground, #f8fafc);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--p-surface-hover, #f3f4f6);
  }
}

.company-logo-sm {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  object-fit: cover;
  flex-shrink: 0;
}

.company-info {
  flex: 1;
  min-width: 0;
}

.company-name-sm {
  margin: 0 0 0.25rem 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--p-text-color, #1a202c);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.company-location {
  margin: 0;
  font-size: 0.8rem;
  color: var(--p-text-muted-color, #6b7280);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.view-all-btn {
  width: 100%;
}

@media (max-width: 1024px) {
  .jobs-container {
    grid-template-columns: 1fr;
  }

  .jobs-filters,
  .jobs-sidebar {
    position: static;
  }
}

@media (max-width: 768px) {
  .jobs-view {
    padding: 1.5rem 1rem;
  }

  .jobs-title {
    font-size: 1.5rem;
  }

  .jobs-container {
    gap: 1rem;
  }
}
</style>
