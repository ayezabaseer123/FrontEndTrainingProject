<template>
    <div>
        <Card :pt="{ root: { class: 'card-root w-full' } }">
            <template #content>
                <h1 class="heading-regular">{{ $t('local.feedView.labels.contacts') }}</h1>
                <div v-for="contact in contacts" :key="contact.name" class="contact-item">
                    <Avatar :image="`/src/assets/images/${contact.image}`" class="mr-2" shape="circle" />
                    <div class="contact-info">
                        <div class="body-regular">{{ contact.name }}</div>
                        <div class="caption-regular">{{ contact.country }}</div>
                    </div>
                    <Icon name='$message' size='25'/>
                </div>
                <Button class="p-button-primary w-full">{{$t('local.feedView.buttons.viewAll')}}</Button>
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Icon from '@/components/Icon.vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';

const contacts = [
    {
        image: 'ContactImage.png',
        name: "Lise",
        country: 'Bergen, Norway '
    },
    {
        image: 'ContactImage.png',
        name: "Lise",
        country: 'Bergen, Norway '
    },
    {
        image: 'ContactImage.png',
        name: "Lise",
        country: 'Bergen, Norway '
    }
]
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.card-root {
    border-radius: 12px;
    padding: 20px 16px;
    background-color: var(--surfaces-default)
}

.contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.contact-info {
    flex-grow: 1;
    margin-left: 1rem;
}

.contact-icon {
    margin-left: auto;
    color: gray;
}
</style>