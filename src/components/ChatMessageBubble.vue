<template>
  <div class="message-group">
    <div class="message-bubble" :class="{ own: message.isOwn }">
      <p class="message-text">{{ message.content }}</p>
      <span class="message-time">{{ message.timestamp }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Message } from '@/types/chat'

defineProps<{
  message: Message
}>()
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.message-group {
  display: flex;
  margin-bottom: 1rem;
  animation: slideIn 0.2s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message-bubble {
  max-width: 70%;
  padding: 0.75rem 1rem;
  border-radius: 18px;
  background-color: var(--p-surface-0);
  color: var(--text-secondary);

  &.own {
    margin-left: auto;
    background-color: var(--primary);
    color: white;
  }
}

.message-text {
  margin: 0 0 0.5rem 0;
  word-wrap: break-word;
  line-height: 1.4;
  font-size: 0.9375rem;
}

.message-time {
  @extend %caption-regular;
  display: block;
  font-size: 0.75rem;
  opacity: 0.7;
}
</style>
