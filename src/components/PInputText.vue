<template>
    <div>
        <div class="flex flex-column gap-2" v-if="!iconField">
            <label :for="id" class="input-text-label">{{ label }}</label>

            <InputText :id="id" :type="type" :value="modelValue"
                @input="handleInput" :placeholder="placeholder" v-bind="$attrs"
                :invalid="!!error" :pt="{
                    root: { class: 'input-text' }

                }" />

            <small class="error">{{ error }}</small>

        </div>

        <div v-if="iconField" class="flex flex-column gap-2">
            <label :for="id" class="input-text-label">{{ label }}</label>
            <IconField>
                <InputText :id="id" :type="showPassword ? 'text' : type" :value="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder" v-bind="$attrs"
                    :invalid="error" :pt="{
                        root: { class: 'input-text' }

                    }" />
                <span v-if="type === 'password'" class="password-toggle" @click="showPassword = !showPassword">
                    {{ showPassword ? 'Hide' : 'Show' }}
                </span>

                <InputIcon v-else class="pi pi-search" />

            </IconField>

            <small class="error">{{ error }}</small>

        </div>
    </div>

</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

import { ref } from 'vue';
const showPassword = ref(false);

defineProps({
    id: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    error: {
        type: String,
        default: ''
    },
    iconField: {
        type: Boolean,
        default: false
    }
});

defineEmits(['update:modelValue']);
</script>

<style scoped lang='scss'>
@use '@/style/theme.scss' as *;

:deep(.p-inputtext) {
    width: 100%;
}

.input-text-label {
    @extend %body-regular;
    color: var(--text-secondary);
}

.p-iconfield .p-inputicon:last-child {
    right: 10px;
}


.input-text {
    border: 1px solid var(--text-secondary) !important;
    border-radius: 6px;
    padding: 16px 20px;

    &:hover,
    &:focus,
    &:focus-visible,
    &:active {
        border-color: var(--primary) !important;
        box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);

    }

    &:invalid {
        border-color: red !important
    }
}

.password-toggle {
    @extend %caption-regular;
    position: absolute;
    right: 10px;
    top: 20px;
    cursor: pointer;
}

.error {
    color: red;
}
</style>
