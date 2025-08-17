<template>
    <div>
        <h1 class="text-2xl font-bold">{{ $t('local.signup.labels.completeProfile') }}</h1>
        <p class="rv-custom-width m-0 rv_industry-regulation mb-3">{{
            $t('local.signup.labels.industryRegulation') }}</p>
        <Divider class="rv-custom-width" />
        <div class="flex flex-column gap-3 lg:rv-custom-width mt-3">
            <!-- ... step 3 fields ... -->
            <Field v-slot="{ field, meta, errorMessage }" name="bvn">
                <PInputText id="bvn" v-bind="field" :label="$t('local.signup.labels.bvn')"
                    :error="meta.touched && meta.dirty ? errorMessage : undefined"
                    :placeholder="$t('local.signup.placeholders.bvn')" :modelValue="field.value" />
            </Field>
        </div>
    </div>

</template>
<script setup lang="ts">
import { Field } from 'vee-validate';
import PInputText from '@/components/PInputText.vue';
import Divider from 'primevue/divider';

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