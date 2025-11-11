<template>
 
            <div class="registration-view">
                <FormWizard :validation-schema="validationSchemas" @submit="handleFinalSubmit"
                    @step-change="handleStepChange">
                    <!-- Step 1: Personal Information -->
                    <FormStep>
                       <PersonalInformation />
                      
                    </FormStep>

                    <!-- Step 2: Residency -->
                    <FormStep>
                        <ResidencyForm />
                    </FormStep>

                    <!-- Step 3: Bank Verification -->
                   
                    <FormStep>
                        <BankVerification />
                    </FormStep>
                </FormWizard>
                <div class="w-full flex flex-column align-items-center lg:px-24">
                    <template v-if="currentStep === 0">
                        <Button class="w-full rv-custom-width mt-3 google-btn" severity="secondary" outlined @click="signInWithGoogle">
                            {{ $t('local.signup.buttons.continueWithGoogle') }}
                        </Button>
                    </template>
                    <template v-else>
                        <div class="secure-info-container rv-custom-width mt-3">
                            <div class="secure-badge">
                                <i class="pi pi-lock"></i>
                                <span> Your info is safely secured</span>
                            </div>
                        </div>
                    </template>
                </div>

            </div>
    
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { auth } from '@/config/firebase';

import Button from 'primevue/button';
import PersonalInformation from '@/components/PersonalInformation.vue';
import ResidencyForm from '@/components/ResidencyForm.vue';
import BankVerification from '@/components/BankVerification.vue';
import { useRouter } from 'vue-router'
import FormWizard from '@/components/FormWizard.vue'
import FormStep from '@/components/FormStep.vue'
// ... other imports ...

// Move validation schemas to separate file
import { validationSchemas } from '@/types/registration'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const router = useRouter()
const currentStep = ref(0)
const handleFinalSubmit = async (values: any) => {
    try {
        // Handle final form submission
        console.log('Final form values:', values)
        // Add API call here
    } catch (error) {
        console.error('Submission error:', error)
    }
}


const handleStepChange = (step: number) => {
    currentStep.value = step
}

const signInWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        // Handle successful sign-in
        const user = result.user;
        console.log(user)
        // You might want to store the user info or redirect
        router.push('/'); // or wherever you want to redirect after login
    } catch (error) {
        console.error('Google sign-in error:', error);
        // Handle error appropriately
    }
};



// ... rest of the script ...
</script>
<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.registration-view {
    padding: 38px 32px;
}

:deep(.google-btn) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.08);


    &:hover {
        border: 1px solid (--surface-light-grey) !important;
    }
}

.rv_industry-regulation {
    @extend %body-large;
    color: var(--text-secondary);
}

.rv-custom-width {
    max-width: 411px;
}

.secure-info-container {
    @extend %caption-regular;
    color: var(--text-secondary);
}
</style>