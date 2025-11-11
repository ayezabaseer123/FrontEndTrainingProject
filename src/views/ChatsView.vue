<template>
  <div class="chats-view">
    <div class="chat-container">
      <ChatSidebar @select-contact="activeContact = $event" />
      <div class="chat-content">
        <ChatHeader :contact="activeContact" />
        <ChatMessages />
        <ChatInput />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChatSidebar from '@/components/ChatSidebar.vue'
import ChatHeader from '@/components/ChatHeader.vue'
import ChatMessages from '@/components/ChatMessages.vue'
import ChatInput from '@/components/ChatInput.vue'
import { mockContacts } from '@/utils/mockData'

const activeContact = ref(mockContacts[1])
</script>

<style scoped lang="scss">
.chats-view {
  background-color: #EEF4FD;
  padding: 1em;
  min-height: 93vh;
  height: 100%;
}

.chat-container {
  display: flex;
  height: 100%;
  background-color: var(--surfaces-default);
  border-radius: 12px;
  overflow: hidden;
}

.chat-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
