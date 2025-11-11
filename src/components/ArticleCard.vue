<template>
  <div class="article-card">
    <div class="article-image-container">
      <img :src="article.imageUrl" :alt="article.title" class="article-image" />
    </div>
    <div class="article-content">
      <h3 class="article-title">{{ article.title }}</h3>
      <p class="article-meta">
        <span class="author">{{ article.author }}</span>
        <span class="separator">|</span>
        <span class="read-time">{{ $t('local.articles.labels.estTime') }} {{ article.estimatedReadTime }}</span>
      </p>
      <Button class="read-button" outlined severity="primary" @click="onReadClick">
        {{ $t('local.articles.buttons.read') }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'

export interface Article {
  id: string
  title: string
  author: string
  estimatedReadTime: string
  imageUrl: string
  content?: string
}

const props = defineProps<{
  article: Article
}>()

const emit = defineEmits<{
  'read-click': [id: string]
}>()

const onReadClick = () => {
  emit('read-click', props.article.id)
}
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.article-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: var(--p-border-radius, 6px);
  overflow: hidden;
  background-color: var(--p-surface-card, #fff);
  border: 1px solid var(--p-surface-border, #e5e7eb);
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: var(--p-shadow-2);
    transform: translateY(-2px);
  }
}

.article-image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: var(--p-surface-0, #f3f4f6);
}

.article-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-content {
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.article-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--p-text-color, #1a202c);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-meta {
  margin: 0;
  font-size: 0.875rem;
  color: var(--p-text-muted-color, #6b7280);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.separator {
  color: var(--p-text-muted-color, #d1d5db);
}

.read-button {
  align-self: flex-start;
  margin-top: auto;
}

:deep(.p-button) {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}
</style>
