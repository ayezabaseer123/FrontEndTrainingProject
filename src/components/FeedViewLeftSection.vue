<template>
    <div>
        <div>
            <Card class="w-full mb-3">
                <template #content>
                    <div class="profile-item">
                        <Avatar :image="`/src/assets/images/MyProfile.png`" />
                        <span class="body-regular-bold mb-0">{{ "Ildiko Gaspar" }}</span>
                        <span class="profile-email">{{ "@igaspar" }}</span>
                    </div>

                </template>
            </Card>
        </div>
        <div>
            <FeedViewContributorSection />
        </div>
    </div>

</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import FeedViewContributorSection from '@/components/FeedViewContributorSection.vue'; 
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.profile-item {
    display: flex;
    justify-content: center;
    gap: 5px;
    flex-direction: column;
    align-items: center;
}

.profile-email {
    @extend %body-small;
    color: var(--surface-grey)
}
</style>