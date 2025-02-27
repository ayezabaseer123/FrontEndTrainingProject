<template>
  <Card :pt="{ root: { class: 'card-root w-full' } }">
    <template #content>
      <div class="post-input-section">
        <Avatar 
  image="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
  shape="circle" 
  class="user-avatar" 
  alt="User avatar"
/>
        <InputText
          v-model="postText"
          :placeholder="$t('local.feedView.placeholders.createPost')"
          class="post-input"
        />
      </div>
      
      <div class="post-actions">
        <div v-for="(item, index) in actionItems" 
             :key="index" 
             class="action-button">
             <Icon :name="item.icon" size='22' />
      
          <span class="action-text">{{ item.text }}</span>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Avatar from 'primevue/avatar';
import Icon from '@/components/Icon.vue'
import { useI18n } from 'vue-i18n'
const postText = ref('')
const { t } = useI18n()

const actionItems = [
  { icon: '$media', text: t('local.feedView.labels.media') },
  { icon: '$events', text: t('local.feedView.labels.events') },
  { icon: '$article', text: t('local.feedView.labels.article') }
];
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.card-root {
  border-radius: 12px;
  padding: 20px 16px;
  background-color: var(--surfaces-default);
}

.post-input-section {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 0.75rem;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  flex-shrink: 0;
}

.post-input {
  flex: 1;
  border-radius: 20px;
  border: 1px solid var(--border);
  padding: 0.5rem;
  min-width: 0;
  font-size: 0.875rem;
}

.post-actions {
  display: flex;
  gap: 0.5rem;
  padding-top: 0.5rem;
}

.action-button {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  flex: 1;
  justify-content: center;
  min-width: 80px;
}

.action-button i {
  font-size: 1rem;
}

.action-text,
.action-icon {
  color: var(--primary);
}

.action-text {
  font-size: 0.75rem;
}
</style>