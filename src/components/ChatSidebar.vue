<template>
  <div class="chat-sidebar">
    <div class="sidebar-header">
      <h2 class="sidebar-title">Chats</h2>
      <div class="sidebar-icons">
        <button class="sidebar-icon-btn">
          <i class="pi pi-video"></i>
        </button>
        <button class="sidebar-icon-btn">
          <i class="pi pi-ellipsis-v"></i>
        </button>
      </div>
    </div>

    <div class="search-container">
      <i class="pi pi-search search-icon"></i>
      <input type="text" placeholder="Search" class="search-input" />
    </div>

    <div class="contacts-list">
      <ChatContactItem
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
        :is-active="activeContactId === contact.id"
        @select="$emit('select-contact', contact)"
      />
    </div>

    <div class="sidebar-bottom">
      <div class="sidebar-nav">
        <button class="nav-btn" title="Grid">
          <i class="pi pi-th"></i>
        </button>
        <button class="nav-btn" title="Phone">
          <i class="pi pi-phone"></i>
        </button>
        <button class="nav-btn" title="Bookmark">
          <i class="pi pi-bookmark"></i>
        </button>
        <button class="nav-btn" title="Users">
          <i class="pi pi-users"></i>
        </button>
        <button class="nav-btn" title="Settings">
          <i class="pi pi-cog"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChatContactItem from '@/components/ChatContactItem.vue'
import { mockContacts } from '@/utils/mockData'

const contacts = ref(mockContacts)
const activeContactId = ref(mockContacts[1].id)

defineEmits<{
  'select-contact': [contact: any]
}>()
</script>

<style scoped lang="scss">
@use '@/style/theme.scss' as *;

.chat-sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--surfaces-default);
  border-right: 1px solid var(--p-surface-border);
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid var(--p-surface-border);
}

.sidebar-title {
  @extend %heading-regular;
  margin: 0;
  color: var(--text-primary);
}

.sidebar-icons {
  display: flex;
  gap: 0.5rem;
}

.sidebar-icon-btn {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;

  &:hover {
    color: var(--primary);
  }
}

.search-container {
  position: relative;
  padding: 1rem;
  border-bottom: 1px solid var(--p-surface-border);
}

.search-icon {
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--surface-grey);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid var(--p-surface-border);
  border-radius: 24px;
  background-color: var(--p-surface-50);
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--primary);
  }

  &::placeholder {
    color: var(--surface-grey);
  }
}

.contacts-list {
  flex: 1;
  overflow-y: auto;
}

.sidebar-bottom {
  padding: 1rem;
  border-top: 1px solid var(--p-surface-border);
}

.sidebar-nav {
  display: flex;
  gap: 1rem;
}

.nav-btn {
  flex: 1;
  background: none;
  border: none;
  padding: 0.75rem;
  cursor: pointer;
  color: var(--text-secondary);
  font-size: 1.2rem;
  border-radius: 8px;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: var(--p-surface-0);
    color: var(--primary);
  }
}
</style>
