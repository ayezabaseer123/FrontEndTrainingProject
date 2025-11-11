<template>
  <div class="top-bar">
    <img :src="bitsolLogo" class="logo" alt="bitsol-logo" />
    <div class="logo-nav">
      <ul class="nav-links">
        <li v-for="item in navItems" :key="item" :class="{ active: item === activeItem }" @click="setActiveItem(item)">
          {{ item }}
        </li>
      </ul>
      <Avatar :image="topBarAvatar" shape="square" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import bitsolLogo from '@/assets/images/BitsolBlackLogo.png'
import Avatar from 'primevue/avatar';
import topBarAvatar from '@/assets/images/TopBarAvatar.png';

const navItems = ['Feed', 'Chats', 'Jobs', 'Events', 'Articles', 'People', 'Notifications'];
const activeItem = ref('Feed');

const setActiveItem = (item: string) => {
  activeItem.value = item;
};

</script>

<style scoped lang="scss">
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;

  .logo {
    height: 40px;
  }

  .nav-links {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-left: 20px;
      cursor: pointer;

      &.active {
        color: var(--primary);
      }
    }
  }
}

.logo-nav {
  display: flex;
  gap: 30px;
  align-items: center;
}

@media (max-width: 600px) {
  .nav-links {
    display: none !important;
  }

  .nav-links li.active {
    display: block !important;
    margin: 0 auto !important;
  }
}
</style>