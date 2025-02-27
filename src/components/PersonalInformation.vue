<template>
    <h1 class="heading m-0">
        {{ $t('local.signup.labels.registerIndividualAccount') }}
    </h1>
    <p class="rv-custom-width m-0 rv_industry-regulation mb-3">
        {{ $t('local.signup.labels.industryRegulation') }}
    </p>
    <Divider class="rv-custom-width" />
    <div class="flex flex-column gap-3 lg:rv-custom-width mt-3">
        <!-- Personal info fields -->
        <Field v-slot="{ field, errorMessage }" name="fullName">
            <PTextInput v-bind="field" id="fullName" :label="$t('local.signup.labels.fullName')"
                :placeholder="$t('local.signup.placeholders.fullName')" :error="errorMessage" />
        </Field>
        <Field v-slot="{ field, errorMessage }" name="email">
            <PTextInput v-bind="field" id="email" :label="$t('local.signup.labels.emailAddress')" type="email"
                :error="errorMessage" :placeholder="$t('local.signup.placeholders.emailAddress')" />
        </Field>

        <Field v-slot="{ field, errorMessage }" name="password">
            <PTextInput v-bind="field" id="password" :label="$t('local.signup.labels.createPassword')" type="password"
                :error="errorMessage" :placeholder="$t('local.signup.placeholders.password')" toggle-password
                :icon-field="true" />
        </Field>

        <div class="flex items-center gap-2">
            <Field v-slot="{ field, handleChange }" name="termsAccepted">

                <Checkbox :modelValue="field.value" @update:modelValue="handleChange($event)" :binary="true" />
            </Field>
            <label>{{ $t('local.signup.labels.agreeToTerms') }}</label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Field } from 'vee-validate';
import PTextInput from '@/components/PInputText.vue';
import Checkbox from 'primevue/checkbox';
</script>
<style scoped lang="scss">
@use '@/style/theme.scss' as *;


.rv_industry-regulation {
    @extend %body-large;
    color: var(--text-secondary);
}

.rv-custom-width {
    max-width: 411px;
}
</style>