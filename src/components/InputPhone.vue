<template>
    <!-- TODO: To complete it , replace PInputGroup with Prime vuelastes version and incorporate it in form -->
    <div class="p-inputgroup">
        <PSelect v-model="selectedCountry" :options="model" optionLabel="name" class="country-select" :filter="true"
            @change="onChange">
            <template #value="{ value }">
                <div v-if="value" class="country-item">
                    <img :src="value.flag || 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'" />
                    <span>{{ value.phone }}</span>
                </div>
            </template>

            <template #option="{ option }">
                <div class="country-item">
                    <img
                        :src="option.flag || 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'" />
                    <div>
                        {{ option.name }}
                        <span class="text-500">{{ option.phone }}</span>
                    </div>
                </div>
            </template>
        </PSelect>

        <InputText v-model="phoneNumber" type="text" placeholder="Phone number" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    model: any[]
}>()

const selectedCountry = ref(props.model[0])
const phoneNumber = ref('')

const onChange = () => {
    // Handle country change if needed
}
</script>

<style scoped lang="scss">
.p-inputgroup {
    display: flex;
    gap: 0;

    .country-select {
        width: 8rem;
        flex-shrink: 0;

        :deep(.p-select) {
            border-right: none;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
    }

    .p-inputtext {
        flex: 1;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
}

.country-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
        width: 17px;
    }
}
</style>