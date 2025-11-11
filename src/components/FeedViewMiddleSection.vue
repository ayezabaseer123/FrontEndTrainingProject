<template>
  <div class="feed-view-middle-section">
    <FeedViewStorySection />
    <CreatePostSection />

    <!-- Posts List -->
    <div class="posts-container">
      <Card v-for="post in posts" :key="post.id" class="post-card">
        <template #content>
          <!-- Post Header -->
          <div class="post-header">
            <Avatar :image="post.authorAvatar" size="normal" shape="square" />
            <div class="post-meta">
              <h3 class="author-name">{{ post.author }}</h3>
              <span class="post-time">{{ post.timeAgo }}</span>
            </div>
            <i class="pi pi-ellipsis-h more-options"></i>
          </div>

          <!-- Post Content -->
          <p class="post-text">{{ post.content }}</p>
          <img
            v-if="post.image"
            :src="post.image"
            class="post-image"
            :alt="post.author + '\'s post'"
          />

          <!-- Post Stats -->
          <div class="post-stats">
            <span class="stat-item">
              <img src="/src/assets/images/Like.png" />
              <img src="/src/assets/images/ThumbsUp.png" />
              {{ post.likes }}
            </span>
            <span class="stat-item"> {{ post.comments }} comments </span>
          </div>

          <!-- Post Actions -->
          <div class="post-actions">
            <button
              v-for="action in postActions"
              :key="action.label"
              class="action-button"
            >
              <Icon :name="action.name" size="16" />
              <span class="action-label">{{ action.label }}</span>
            </button>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import FeedViewStorySection from '@/components/FeedViewStorySection.vue'
import CreatePostSection from '@/components/CreatePostSection.vue'
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'
import Icon from '@/components/Icon.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// Sample posts data
const posts = [
  {
    id: 1,
    author: 'John Doe',
    authorAvatar: 'https://picsum.photos/id/1/50/50',
    content: 'Just finished my first Vue.js project! 🎉',
    timeAgo: '2 hours ago',
    likes: 42,
    comments: 8,
    image: 'https://picsum.photos/id/180/800/400',
  },
  {
    id: 2,
    author: 'Jane Smith',
    authorAvatar: 'https://picsum.photos/id/2/50/50',
    content: 'Beautiful sunset today! 🌅',
    timeAgo: '4 hours ago',
    likes: 123,
    comments: 12,
    image: 'https://picsum.photos/id/160/800/400',
  },
]

const postActions = [
  { name: '$like' as const, label: t('local.common.like') },
  { name: '$comment' as const, label: t('local.common.comment') },
  { name: '$share' as const, label: t('local.common.share') },
]
</script>
<style lang="scss" scoped>
@use '@/style/theme.scss' as *;

.feed-view-middle-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.posts-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.post-card {
  background: var(--surfaces-default);
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  :deep(.p-card-content) {
    padding: 15px;
  }
}

.post-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .post-meta {
    flex: 1;
  }

  .author-name {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
  }

  .post-time {
    color: var(--text-secondary);
    font-size: 0.875rem;
  }

  .more-options {
    color: var(--text-secondary);
    cursor: pointer;
    padding: 0.5rem;
  }
}

.post-text {
  margin: 1 0 1rem 0;
  font-size: 0.9375rem;
  line-height: 1.5;
}

.post-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
}

.post-stats {
  display: flex;
  padding: 0.75rem 0rem;
  border-bottom: 1px solid var(--border);
  font-size: 0.875rem;
  gap: 1rem;

  .stat-item {
    display: flex;
    align-items: center;
  }
}
.action-label {
  color: var(--primary);
}
.post-actions {
  display: flex;
  padding: 0.5rem;
  justify-content: space-around;

  .action-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    background: none;
    border-radius: 5px;
    color: var(--text-secondary);
    font-size: 0.875rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--surface-secondary);
    }

    i {
      font-size: 1.25rem;
    }
  }
}
</style>
