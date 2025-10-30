<template>

    <div class="feed-view-contributor-section">
        <Card class="w-full">
            <template #content>
                <h1 class="heading-regular">{{ $t('local.feedView.labels.contributors') }}</h1>
                <AvatarGroup>
                    <span v-for="image in images" :key="image">
                        <Avatar :image="`/src/assets/images/${image}`"  />
                    </span>
                   <Avatar label="+6" shape="circle" />
                </AvatarGroup>

            </template>
        </Card>
    </div>


</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';

const images=['Contributor1.png', 'Contributor2.png', 'Contributor3.png', 'Contributor4.png']

</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

</style>