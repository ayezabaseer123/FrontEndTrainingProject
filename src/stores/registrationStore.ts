import { defineStore } from 'pinia'
import { ref ,computed} from 'vue'

export const useRegistrationStore = defineStore('registrationStore', () => {
    const currentStepIdx = ref(0)
    const stepCounter = ref(0)
    const stepIds = ref([0, 1, 2]) // Array of step IDs
    const stepId=ref(0)
   

    const incrementStep = () => {
        currentStepIdx.value++
    }

    const decrementStep = () => {
        if (currentStepIdx.value > 0) {
            currentStepIdx.value--
        }
    }

    return {
        currentStepIdx,
        stepCounter,
        stepIds,
        stepId,
        incrementStep,
        decrementStep,
    }
})