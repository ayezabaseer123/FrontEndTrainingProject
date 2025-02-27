// src/store/stepStore.ts
import { ref } from 'vue';

const stepCounter = ref(0);
const currentStepIdx = ref(0);

const incrementStep = () => {
    currentStepIdx.value++;
};

const decrementStep = () => {
    if (currentStepIdx.value > 0) {
        currentStepIdx.value--;
    }
};

const isFirstStep = () => {
    return currentStepIdx.value === 0;
};

const isLastStep = (totalSteps: number) => {
    return currentStepIdx.value === totalSteps - 1;
};

export const useStepStore = () => {
    return {
        stepCounter,
        currentStepIdx,
        incrementStep,
        decrementStep,
        isFirstStep,
        isLastStep,
    };
};