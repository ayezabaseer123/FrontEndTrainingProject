<template>
  <div class="chat-header">
    <div class="header-left">
      <Avatar :image="contact.avatar" shape="circle" size="large" />
      <h2 class="contact-name">{{ contact.name }}</h2>
    </div>
    <div class="header-actions">
      <button class="action-btn">
        <i class="pi pi-phone"></i>
      </button>
      <button class="action-btn">
        <i class="pi pi-video"></i>
      </button>
      <button class="action-btn">
        <i class="pi pi-ellipsis-v"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
import type { Contact } from '@/types/chat'

defineProps<{
  contact: Contact
}>()
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: var(--surfaces-default);
  border-bottom: 1px solid var(--p-surface-border);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.contact-name {
  @extend %body-normal;
  margin: 0;
  color: var(--text-primary);
  font-weight: 600;
}

.header-actions {
  display: flex;
  gap: 1rem;
}

.action-btn {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  font-size: 1.2rem;
  transition: color 0.2s;

  &:hover {
    color: var(--primary);
  }
}
</style>
