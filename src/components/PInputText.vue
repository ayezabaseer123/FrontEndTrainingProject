<template>
    <div>
        <div class="flex flex-column gap-2" v-if="!iconField">
            <label :for="id" class="input-text-label">{{ label }}</label>

            <InputText :id="id" :type="type" :value="modelValue"
                @input="handleInput" :placeholder="placeholder" v-bind="$attrs"
                :invalid="!!error" />

            <small class="error">{{ error }}</small>

        </div>

        <div v-if="iconField" class="flex flex-column gap-2">
            <label :for="id" class="input-text-label">{{ label }}</label>
            <IconField>
                <InputText :id="id" :type="showPassword ? 'text' : type" :value="modelValue"
                    @input="handleInput" :placeholder="placeholder" v-bind="$attrs"
                    :invalid="!!error" />
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

interface Props {
    id: string;
    label: string;
    modelValue: string;
    placeholder?: string;
    type?: string;
    error?: string;
    iconField?: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
    'update:modelValue': [value: string]
}>();

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target) {
        emit('update:modelValue', target.value);
    }
};
</script>

<style scoped lang='scss'>
@use '@/style/theme.scss' as *;

:deep(.p-inputtext) {
    width: 100%;
    padding: 0.75rem 1.25rem;
}

.input-text-label {
    @extend %body-regular;
    color: var(--text-secondary);
}

.p-iconfield .p-inputicon:last-child {
    right: 10px;
}

.password-toggle {
    @extend %caption-regular;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: var(--p-text-muted-color);
    z-index: 1;
}

.error {
    color: var(--p-red-500);
}
</style>
