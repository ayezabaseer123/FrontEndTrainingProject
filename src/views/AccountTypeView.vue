<template>
    <div>
        <SessionLayout>
            <template #right-section>
                <div class="account-type-view ">
                    <p class="text-right px-3 pt-3 sm:px-5 md:px-8 atv-al atv-already-have-account">
                        {{ $t('local.signup.labels.alreadyHaveAnAccount') }}
                        <span class="atv-sign-in">{{ $t('local.signup.labels.signIn') }}</span>
                    </p>
                    <div class="account-content">
                        <div class="flex flex-column gap-3 px-3 sm:px-5 md:px-8">
                            <h2 class="m-0 text-center sm:text-left">{{ $t('local.signup.labels.joinUs') }}</h2>
                            <p class="opening-prompt text-center sm:text-left">{{
                                $t('local.signup.labels.accountOpeningPrompt') }}</p>
                            <Card v-for="item in signupOptions" :key="item.type"
                                :pt="{ root: { class: 'card-root w-full' } }" @click="handleCardClick(item.route)">
                                <template #content>
                                    <div class="card-content">
                                        <component :is="item.icon" />
                                        <div class="card-text">
                                            <p class="card-title">{{ $t(item.titleKey) }}</p>
                                            <p class="card-subtitle">{{ $t(item.subtitleKey) }}</p>
                                        </div>
                                        <i class="pi pi-arrow-right" style="color:var(--primary)"></i>
                                    </div>
                                </template>
                            </Card>
                        </div>
                    </div>
                </div>
            </template>
        </SessionLayout>
    </div>
</template>
<script setup lang="ts">
import SessionLayout from '@/components/SessionLayout.vue';
import IconPolygon from '@/components/icons/IconPolygon.vue'
import IconPolygon1 from '@/components/icons/IconPolygon1.vue'
import Card from 'primevue/card';
import { useRouter } from 'vue-router';

const router = useRouter();

const signupOptions = [
    {
        type: 'individual',
        titleKey: 'local.signup.labels.individual',
        subtitleKey: 'local.signup.labels.individualSubtitle',
        route: '/registration',
        icon: IconPolygon1
    },
    {
        type: 'business',
        titleKey: 'local.signup.labels.business',
        icon: IconPolygon,
        subtitleKey: 'local.signup.labels.businessSubtitle',
        route: '/'
    }
];

const handleCardClick = (route: string) => {
    router.push(route);
};
</script>
<style lang="scss" scoped>
@use '@/style/theme.scss' as *;

.account-type-view {
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 100vh
}

.account-content {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

}

.opening-prompt {
    @extend %body-large;
    color: var(--text-secondary);
    max-width: 411px;
}

.card-root {
    box-shadow: 0px 2px 14px 1px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
    padding: 26px;
    cursor: pointer;

    &:hover,
    &:focus,
    &:focus-visible,
    &:active {
        border: 1px solid var(--primary);
    }
}

.atv-already-have-account {
    @extend %body-large;
    color: var(--text-secondary)
}

.atv-sign-in {
    @extend %body-large;
    color: var(--primary)
}

.atv-card-subtile {
    @extend %body-small;
    color: var(--text-secondary)
}

.card-content {
    margin: 0;
    display: flex;
    gap: 1rem;
    align-items: center;
}

.card-text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.card-title {
    margin: 0;
    @extend %body-regular;
}

.card-subtitle {
    margin: 0;
    max-width: 264px;
    @extend %body-small;
    color: var(--text-secondary);
}
</style>