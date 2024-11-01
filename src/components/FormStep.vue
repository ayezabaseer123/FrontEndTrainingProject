<template>
    <div v-show="shouldShow">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, ref } from 'vue'

const props = defineProps({
    errors: {
        type: Object,
        default: () => ({})
    }
})

// Get the step management values from parent FormWizard
const stepCounter = inject('STEP_COUNTER') as { value: number }
const currentStepIdx = inject('CURRENT_STEP_INDEX') as { value: number }

//  step ID
const stepId = ref(0)

onMounted(() => {
    stepId.value = stepCounter.value++
})

// Determine if this step should be shown
const shouldShow = computed(() => {
    return stepId.value === currentStepIdx.value
})

</script>
