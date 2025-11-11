<template>
  <div class="jobs-view">
    <div class="columns">
      <div class="col col-1">
        <JobsLeftSection />
      </div>
      <div class="col col-2">
        <JobsMiddleSection />
      </div>
      <div class="col col-3">
        <JobsRightSection />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import JobsLeftSection from '@/components/JobsLeftSection.vue'
import JobsMiddleSection from '@/components/JobsMiddleSection.vue'
import JobsRightSection from '@/components/JobsRightSection.vue'
</script>

<style scoped lang="scss">
.jobs-view {
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
