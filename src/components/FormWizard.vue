<template>
    <Form :validation-schema="currentSchema" @submit="onSubmit" v-slot="{ errors, meta }">
        <div class="flex w-full justify-content-between">
            <!-- Navigation header -->
            <div class="rv-back-button" @click="goToPrev" role="button">
                <i class="pi pi-angle-left"></i>
                <span class="back-button-text">{{ $t('local.signup.labels.back') }}</span>
            </div>

            <!-- Step indicator -->
            <div class="flex flex-column">
                <span class="rv-step-indicator">
                    {{ $t('local.signup.steps.step') }} {{ currentStepIdx + 1 }}/{{ totalSteps }}
                </span>
                <span class="rv-step-title">{{ stepTitle }}</span>
            </div>
        </div>

        <div class="w-full mt-8 flex flex-column align-items-center h-full lg:px-24">
            <slot :errors="errors" />

            <Button class="p-button-primary w-full rv-custom-width mt-3" :disabled="!meta.valid" type="submit">
                {{ isFirstStep ? $t('local.signup.buttons.registerAccount') : $t('local.signup.buttons.saveAndContinue')

                }}
            </Button>

        </div>


    </Form>
</template>

<script setup lang="ts">
import { computed, provide, watch } from 'vue'
import { Form } from 'vee-validate'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'
import { useI18n } from 'vue-i18n'  
import { useStepStore } from '@/stores/stepStore'// Add this import
const { t } = useI18n()

interface ValidationSchema {
    [key: string]: unknown;
}

const props = defineProps<{
    validationSchema: ValidationSchema[]
}>();


const emit = defineEmits(['submit', 'step-change'])
const router = useRouter()
const { stepCounter, currentStepIdx, incrementStep, isLastStep } = useStepStore()

// Step management



// Provide values to child components
provide('STEP_COUNTER', stepCounter)
provide('CURRENT_STEP_INDEX', currentStepIdx)

const totalSteps = computed(() => stepCounter.value)

const isFirstStep = computed(() => {
    return currentStepIdx.value === 0
})



const currentSchema = computed(() => {
    return props.validationSchema[currentStepIdx.value]
})

const stepTitle = computed(() => {
    switch (currentStepIdx.value) {
        case 0:
            return t('local.signup.steps.personalInfo')
        case 1:
            return t('local.signup.steps.residencyInfo')
        case 2:
            return t('local.signup.steps.bankVerification')
        default:
            return ''
    }
})


const onSubmit = (async (stepValues: Record<string, unknown>) => {
    try {
        if (!isLastStep(totalSteps.value)) {
            incrementStep();
            return
        }
        console.log(stepValues)
        // Emit final form values when on last step
        emit('submit', stepValues)
    } catch (error) {
        console.error('Form submission error:', error)
    }
})

const goToPrev = () => {
    if (currentStepIdx.value === 0) {
        router.push('/') // or wherever you want to go
        return
    }
    currentStepIdx.value--
}

watch(currentStepIdx, (newStep) => {
    emit('step-change', newStep)
})

</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.rv-back-button {
    color: var(--text-secondary);
    cursor: pointer;
}

.rv-custom-width {
    max-width: 411px;
}

.rv-step-indicator {
    @extend %body-regular;
    color: var(--surface-light-grey);
}

.rv-step-title {
    @extend %body-regular;
    font-weight: 600;
    color: var(--text-secondary);
}
</style>
