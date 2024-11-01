<template>
    <SessionLayout>
        <template #right-section>
            <div class="registration-view">
                <FormWizard :validation-schema="validationSchemas" @submit="handleFinalSubmit"
                    @step-change="handleStepChange" v-slot="{ errors }">
                    <!-- Step 1: Personal Information -->
                    <FormStep>
                        <h1 class="heading m-0">{{ $t('local.signup.labels.registerIndividualAccount')
                            }}</h1>
                        <p class="rv-custom-width m-0 rv_industry-regulation mb-3">
                            {{ $t('local.signup.labels.industryRegulation') }}
                        </p>
                        <Divider class="rv-custom-width" />
                        <div class="flex flex-column gap-3 lg:rv-custom-width mt-3">
                            <!-- Personal info fields -->
                            <Field v-slot="{ field }" name="fullName">
                                <PTextInput v-bind="field" id="fullName" :label="$t('local.signup.labels.fullName')"
                                    :placeholder="$t('local.signup.placeholders.fullName')" :error="errors.fullName" />
                            </Field>
                            <Field v-slot="{ field }" name="email">
                                <PTextInput v-bind="field" id="email" :label="$t('local.signup.labels.emailAddress')"
                                    type="email" :error="errors.email"
                                    :placeholder="$t('local.signup.placeholders.emailAddress')" />
                            </Field>

                            <Field v-slot="{ field }" name="password">
                                <PTextInput v-bind="field" id="password"
                                    :label="$t('local.signup.labels.createPassword')" type="password"
                                    :error="errors.password" :placeholder="$t('local.signup.placeholders.password')"
                                    toggle-password :icon-field="true" />
                            </Field>

                            <div class="flex items-center gap-2">
                                <Field v-slot="{ field, handleChange }" name="termsAccepted">

                                    <Checkbox :modelValue="field.value" @update:modelValue="handleChange($event)"
                                        :binary="true" :class="{ 'p-invalid': errors.termsAccepted }" />
                                </Field>
                                <label>{{ $t('local.signup.labels.agreeToTerms') }}</label>
                            </div>
                        </div>
                    </FormStep>

                    <!-- Step 2: Residency -->
                    <FormStep>
                        <h1 class="heading m-0">{{ $t('local.signup.labels.completeProfile') }}</h1>
                        <p class="rv-custom-width m-0 rv_industry-regulation mb-3">{{
                            $t('local.signup.labels.industryRegulation') }}</p>
                        <Divider class="rv-custom-width" />
                        <div class="flex flex-column gap-3 lg:rv-custom-width mt-3">
                            <Field v-slot="{ field, meta }" name="phoneNumber">
                                <PTextInput v-bind="field" :label="$t('local.signup.labels.phoneNumber')"
                                    id="phoneNumber"
                                    :error="meta.touched && meta.dirty ? errors.phoneNumber : undefined"
                                    :placeholder="$t('local.signup.placeholders.phoneNumber')">
                                    <template #prefix>
                                        <Field v-slot="{ field }" name="countryCode">
                                            <AutoComplete v-bind="field" :suggestions="countryCodes" optionLabel="code"
                                                class="w-24" />
                                        </Field>
                                    </template>
                                </PTextInput>
                            </Field>

                            <Field v-slot="{ field, meta }" name="address">
                                <PTextInput v-bind="field" :label="$t('local.signup.labels.address')"
                                    :error="meta.touched && meta.dirty ? errors.address : undefined" id="address"
                                    :placeholder="$t('local.signup.placeholders.address')" />
                            </Field>

                            <Field v-slot="{ field, meta }" name="country">

                                <PDropdown v-bind="field" id="country" :label="$t('local.signup.labels.country')"
                                    :options="countries"
                                    :error="meta.touched && meta.dirty ? errors.country : undefined"
                                    :placeholder="$t('local.signup.placeholders.country')" />
                            </Field>

                        </div>
                    </FormStep>

                    <!-- Step 3: Bank Verification -->
                    <FormStep>
                        <h1 class="text-2xl font-bold">{{ $t('local.signup.labels.completeProfile') }}</h1>
                        <p class="rv-custom-width m-0 rv_industry-regulation mb-3">{{
                            $t('local.signup.labels.industryRegulation') }}</p>
                        <Divider class="rv-custom-width" />
                        <div class="flex flex-column gap-3 lg:rv-custom-width mt-3">
                            <!-- ... step 3 fields ... -->
                            <Field v-slot="{ field, meta }" name="bvn">
                                <PTextInput id="bvn" v-bind="field" :label="$t('local.signup.labels.bvn')"
                                    :error="meta.touched && meta.dirty ? errors.bvn : undefined"
                                    :placeholder="$t('local.signup.placeholders.bvn')" />
                            </Field>
                        </div>
                    </FormStep>
                </FormWizard>
                <div class="w-full flex flex-column align-items-center lg:px-24">
                    <template v-if="currentStep === 0">
                        <Button class="w-full rv-custom-width mt-3 google-btn" @click="signInWithGoogle">
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
    </SessionLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { auth } from '@/config/firebase';
import { Field } from 'vee-validate'
import SessionLayout from '@/components/SessionLayout.vue'
import Button from 'primevue/button';
import AutoComplete from 'primevue/autocomplete';
import PDropdown from '@/components/PDropdown.vue'
import Divider from 'primevue/divider';

import Checkbox from 'primevue/checkbox';


import PTextInput from '@/components/PInputText.vue'
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

const countryCodes = [
    { code: '+234', country: 'Nigeria' },
    { code: '+233', country: 'Ghana' },
    { code: '+27', country: 'South Africa' }
]

const countries: { value: string, label: string }[] = [
    { value: 'Nigeria', label: 'Nigeria' },
    { value: 'Ghana', label: 'Ghana' },
    { value: 'South Africa', label: 'South Africa' },
    { value: 'Kenya', label: 'Kenya' },
    { value: 'Egypt', label: 'Egypt' },
    { value: 'Morocco', label: 'Morocco' },
]

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