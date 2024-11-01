<template>
    <div class="flex flex-column gap-2">
        <label :for="id" class="input-text-label">{{ label }}</label>
        <Select :id="id" :modelValue="value" @update:modelValue=" $emit('update:modelValue', $event)" :options="options"
            :placeholder="placeholder" :class="{ 'p-invalid': error }" class="w-full" optionValue="value"
            optionLabel="label" />
        <small class="error">{{ error }}</small>
    </div>
</template>

<script setup lang="ts">
import Select from 'primevue/select';

import { computed } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    value: {
        default: null
    },
    options: {
        type: Array,
        required: true
    },
    placeholder: {
        type: String,
        default: ''
    },
    error: {
        type: String,
        default: ''
    }
});

defineEmits(['update:modelValue']);

</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.input-text-label {
    @extend %body-regular;
    color: var(--text-secondary);
}

:deep(.p-select) {
    width: 100%;
    border: 1px solid var(--text-secondary);
    border-radius: 6px;
    padding: 15px;

    &:hover,
    &:focus,
    &:focus-visible,
    &:active {
        border-color: var(--primary) !important;
        box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
    }

    &.p-invalid {
        border-color: red !important;
    }
}




.error {
    color: red;
}
</style>