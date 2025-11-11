<template>
  <div class="chat-contact-item" :class="{ active: isActive }" @click="$emit('select')">
    <Avatar :image="contact.avatar" shape="circle" size="large" />
    <div class="contact-info">
      <h3 class="contact-name">{{ contact.name }}</h3>
      <p class="contact-preview">{{ contact.lastMessage }}</p>
    </div>
    <div class="contact-meta">
      <span class="contact-time">{{ contact.timestamp }}</span>
      <span v-if="contact.unread" class="unread-indicator"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
import type { Contact } from '@/types/chat'

defineProps<{
  contact: Contact
  isActive: boolean
}>()

defineEmits<{
  select: []
}>()
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.chat-contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  border-bottom: 1px solid var(--p-surface-border);

  &:hover {
    background-color: var(--p-surface-0);
  }

  &.active {
    background-color: var(--p-surface-50);
  }

  &:last-child {
    border-bottom: none;
  }
}

.contact-info {
  flex: 1;
  min-width: 0;
}

.contact-name {
  @extend %body-small;
  margin: 0;
  font-weight: 600;
  color: var(--text-primary);
}

.contact-preview {
  @extend %caption-regular;
  margin: 4px 0 0 0;
  color: var(--surface-grey);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.contact-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  flex-shrink: 0;
}

.contact-time {
  @extend %caption-regular;
  color: var(--surface-grey);
  font-size: 12px;
}

.unread-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--primary);
}
</style>
