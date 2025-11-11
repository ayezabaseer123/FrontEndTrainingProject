<template>
  <div class="chat-input-container">
    <div class="input-wrapper">
      <input
        v-model="messageText"
        type="text"
        placeholder="Type a message..."
        class="message-input"
        @keyup.enter="sendMessage"
      />
      <button class="send-btn" @click="sendMessage">
        <i class="pi pi-send"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const messageText = ref('')

const emit = defineEmits<{
  'send-message': [message: string]
}>()

const sendMessage = () => {
  if (messageText.value.trim()) {
    emit('send-message', messageText.value)
    messageText.value = ''
  }
}
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.chat-input-container {
  padding: 1.5rem;
  background-color: var(--surfaces-default);
  border-top: 1px solid var(--p-surface-border);
}

.input-wrapper {
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
}

.message-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid var(--p-surface-border);
  border-radius: 24px;
  background-color: var(--p-surface-50);
  font-size: 0.9375rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--primary);
  }

  &::placeholder {
    color: var(--surface-grey);
  }
}

.send-btn {
  background: var(--primary);
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s, transform 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  &:hover {
    background-color: var(--primary-dark, #1e88e5);
  }

  &:active {
    transform: scale(0.95);
  }
}
</style>
