<template>
  <div class="articles-view">
    <div class="articles-header">
      <h1 class="articles-title">{{ $t('local.articles.labels.articles') }}</h1>
      <p class="articles-subtitle">Explore insightful articles on innovation, productivity, and more.</p>
    </div>

    <div class="articles-grid">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
        @read-click="handleReadArticle"
      />
    </div>

    <div v-if="articles.length === 0" class="empty-state">
      <i class="pi pi-inbox" style="font-size: 3rem; color: var(--p-text-muted-color)"></i>
      <p>{{ $t('local.articles.labels.noArticles') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ArticleCard from '@/components/ArticleCard.vue'
import type { Article } from '@/components/ArticleCard.vue'

const articles = ref<Article[]>([])
const loading = ref(false)

onMounted(() => {
  loadArticles()
})

const loadArticles = () => {
  loading.value = true
  articles.value = [
    {
      id: '1',
      title: 'How Innovative Ideas Arise',
      author: 'James Patterson',
      estimatedReadTime: '1 hr',
      imageUrl: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=500',
      content: 'Explore the origins of groundbreaking ideas and how they shape our world.'
    },
    {
      id: '2',
      title: 'Why Facts Don\'t Change Our Minds',
      author: 'Leo Tolstoy',
      estimatedReadTime: '30 min',
      imageUrl: 'https://images.pexels.com/photos/3370742/pexels-photo-3370742.jpeg?auto=compress&cs=tinysrgb&w=500',
      content: 'Understanding the psychology behind belief persistence and cognitive biases.'
    },
    {
      id: '3',
      title: 'The Ultimate Productivity Hack',
      author: 'Charles Dickens',
      estimatedReadTime: '40 min',
      imageUrl: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=500',
      content: 'Master the secrets to achieving maximum productivity in your daily workflow.'
    },
    {
      id: '4',
      title: 'Creativity is a Process, Not an Accident',
      author: 'George Orwell',
      estimatedReadTime: '1 hr 2 min',
      imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500',
      content: 'Discover how to cultivate creativity through systematic practice and methodology.'
    },
    {
      id: '5',
      title: 'How Experts Figure What to Pay Attention To',
      author: 'J K Rowling',
      estimatedReadTime: '1 hr',
      imageUrl: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=500',
      content: 'Learn the attention management techniques used by world-class experts.'
    },
    {
      id: '6',
      title: 'The Surprising Benefits of Journaling',
      author: 'James Joyce',
      estimatedReadTime: '3 hr',
      imageUrl: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=500',
      content: 'Unlock mental clarity and emotional health through consistent journaling practices.'
    },
    {
      id: '7',
      title: 'Learning the Art of Attention',
      author: 'Oscar Wilde',
      estimatedReadTime: '50 min',
      imageUrl: 'https://images.pexels.com/photos/5973833/pexels-photo-5973833.jpeg?auto=compress&cs=tinysrgb&w=500',
      content: 'Master the skill of focused attention in our distracted world.'
    },
    {
      id: '8',
      title: 'Absolute Success is Luck. Really.',
      author: 'Fyodor Dostoevsky',
      estimatedReadTime: '1 hr',
      imageUrl: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=500',
      content: 'Examining the role of luck and chance in achieving remarkable success.'
    }
  ]
  loading.value = false
}

const handleReadArticle = (articleId: string) => {
  const article = articles.value.find(a => a.id === articleId)
  if (article) {
    console.log('Reading article:', article)
  }
}
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.articles-view {
  padding: 2rem 1.5rem;
  min-height: calc(100vh - 64px);
  background-color: var(--p-surface-ground, #f8fafc);
}

.articles-header {
  margin-bottom: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.articles-title {
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
  font-weight: 700;
  color: var(--p-text-color, #1a202c);
  line-height: 1.2;
}

.articles-subtitle {
  margin: 0;
  font-size: 1rem;
  color: var(--p-text-muted-color, #6b7280);
  line-height: 1.5;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 4rem 2rem;
  text-align: center;
  color: var(--p-text-muted-color, #6b7280);

  p {
    margin: 0;
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .articles-view {
    padding: 1.5rem 1rem;
  }

  .articles-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .articles-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .articles-grid {
    grid-template-columns: 1fr;
  }
}
</style>
