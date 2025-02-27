<template>
    <h1 class="heading m-0">{{ $t('local.signup.labels.completeProfile') }}</h1>
    <p class="rv-custom-width m-0 rv_industry-regulation mb-3">{{
        $t('local.signup.labels.industryRegulation') }}</p>
    <Divider class="rv-custom-width" />
    <div class="flex flex-column gap-3 lg:rv-custom-width mt-3">
        <Field v-slot="{ field, meta, errorMessage }" name="phoneNumber">
            <PTextInput v-bind="field" :label="$t('local.signup.labels.phoneNumber')" id="phoneNumber"
                :error="meta.touched && meta.dirty ? errorMessage : undefined"
                :placeholder="$t('local.signup.placeholders.phoneNumber')">
                <template #prefix>
                    <Field v-slot="{ field }" name="countryCode">
                        <AutoComplete v-bind="field" :suggestions="countryCodes" optionLabel="code" class="w-24" />
                    </Field>
                </template>
            </PTextInput>
        </Field>

        <Field v-slot="{ field, meta, errorMessage }" name="address">
            <PTextInput v-bind="field" :label="$t('local.signup.labels.address')"
                :error="meta.touched && meta.dirty ? errorMessage : undefined" id="address"
                :placeholder="$t('local.signup.placeholders.address')" />
        </Field>

        <Field v-slot="{ field, meta, errorMessage }" name="country">

            <PDropdown v-bind="field" id="country" :label="$t('local.signup.labels.country')" :options="countries"
                :error="meta.touched && meta.dirty ? errorMessage : undefined"
                :placeholder="$t('local.signup.placeholders.country')" />
        </Field>

    </div>
</template>
<script setup lang="ts">
import { Field } from 'vee-validate';
import PTextInput from '@/components/PInputText.vue';
import PDropdown from '@/components/PDropdown.vue'
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