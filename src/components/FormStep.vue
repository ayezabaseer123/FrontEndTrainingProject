<template>
    <div v-show="shouldShow">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useStepStore } from '@/stores/stepStore'


// Get the step management values from parent FormWizard

const { stepCounter, currentStepIdx } = useStepStore()
//  step ID


const stepId = ref(0)

onMounted(() => {
    stepId.value = stepCounter.value++; // Update stepId using the store
})

// Determine if this step should be shown
const shouldShow = computed(() => {
    return stepId.value === currentStepIdx.value
})

</script>
