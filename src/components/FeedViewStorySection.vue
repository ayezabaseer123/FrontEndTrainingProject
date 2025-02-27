<template>

    <div class="stories-container">
        <!-- Create Story Card -->
        <div class="story-item">
            <div class="create-story-container">
                <img src="https://picsum.photos/id/238/200/300" class="create-story-image" />
                <div class="plus-icon-container">
                    <i class="pi pi-plus"></i>
                </div>
                <div class="create-story-text">{{ $t('local.feedView.labels.createStory')}}</div>
            </div>
        </div>
        <!-- Existing Stories -->
        <div v-for="story in stories" :key="story.id" class="story-item">
            <div class="story-image-container">
                <img :src="story.image" class="story-image"  loading="lazy" :alt="story.name"/>
                <div class="story-profile">
                    <Avatar :image="story.profileImage" class="story-avatar" size="normal" shape="circle" />
                </div>
                <div class="story-name">{{ story.name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Avatar from 'primevue/avatar';

const stories = ref([
    {
        id: 1,
        name: 'John Doe',
        image: 'https://picsum.photos/id/1/200/300',
        profileImage: 'https://picsum.photos/id/1/50/50'
    },
    {
        id: 2,
        name: 'Jane Smith',
        image: 'https://picsum.photos/id/2/200/300',
        profileImage: 'https://picsum.photos/id/2/50/50'
    },
    {
        id: 3,
        name: 'Mike Johnson',
        image: 'https://picsum.photos/id/3/200/300',
        profileImage: 'https://picsum.photos/id/3/50/50'
    }
    // Add more story items as needed
]);
</script>
<style lang="scss" scoped>
@use '@/style/theme.scss' as *;

.stories-container {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding: 1rem 0;
}

.story-item {
    position: relative;
    border-radius:20px;
    cursor: pointer;
    background-color: var(--surfaces-default);
    .story-image-container {
        border-radius:20px;
        overflow: hidden;
        height: 100%;
        
        .story-image {
            min-height:140px;
            width: 100%;
            height: 100%;
            min-width:90px;
            object-fit: cover;
        }

        .story-profile {
            position: absolute;
            top: 8px;
            left: 8px;

            .story-avatar {
                border: 2px solid var( --surfaces-default);
            }
        }

        .story-name {
             @extend %body-normal;
            position: absolute;
            bottom: 5px;
            left: 0;
            right: 0;
            padding: 8px;
            text-align: left;
            color: var(--surfaces-default);

        }
    }
}

.create-story-container {
  
    height: 100%;
    cursor: pointer;
    min-height:140px;
}

.create-story-image {
    min-width:90px;
    width: 100%;
    height: 70%;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}

.plus-icon-container {
    position: absolute;
    bottom: 30%;
    left: 50%;
    transform: translate(-50%, 50%);
    background-color:var(--primary);
    padding:5px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.plus-icon-container i {
    color: var(--surfaces-default);
    
}

.create-story-text {
    @extend %body-normal;
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
    font-weight: 600;
}


</style>
