<template>
  <div class="chat-messages">
    <ChatMessageBubble v-for="message in messages" :key="message.id" :message="message" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ChatMessageBubble from '@/components/ChatMessageBubble.vue'
import { mockMessages } from '@/utils/mockData'

const messages = ref(mockMessages)

onMounted(() => {
  const messagesContainer = document.querySelector('.chat-messages')
  if (messagesContainer) {
    messagesContainer.scrollTop = messagesContainer.scrollHeight
  }
})
</script>

<style scoped lang="scss">
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}
</style>
