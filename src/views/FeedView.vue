<template>
    <div class="feed-view">
        <div class="columns">
            <div class="col col-1">
                <FeedViewLeftSection />
            </div>
            <div class="col col-2">
                <FeedViewMiddleSection />
            </div>
            <div class="col col-3">
                <ContactsSection />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ContactsSection from '@/components/ContactsSection.vue';
import FeedViewLeftSection from '@/components/FeedViewLeftSection.vue';
import FeedViewMiddleSection from '@/components/FeedViewMiddleSection.vue';
</script>

<style scoped lang="scss">
.feed-view {
    background-color: #EEF4FD;
    padding: 1em;
    min-height: 93vh;
    height:100%
}

.columns {

    display: flex;

    justify-content: space-between;
    align-items: flex-start;
}

.col-1 {
    width: 25%;
}

.col-2 {
    width: 45%;
}

.col-3 {
    width: 25%;
}

@media (max-width: 600px) {
    .columns {
        flex-direction: column;
    }

    .col {
        width: 100%
    }
}
</style>