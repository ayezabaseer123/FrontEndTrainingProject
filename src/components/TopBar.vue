<template>
  <div class="top-bar">
    <img :src="bitsolLogo" class="logo" alt="bitsol-logo" />
    <div class="logo-nav">
      <ul class="nav-links">
        <li
          v-for="item in navItems"
          :key="item.label"
          :class="{ active: isActive(item.route) }"
          @click="navigateTo(item.route)"
        >
          {{ item.label }}
        </li>
      </ul>
      <Avatar :image="topBarAvatar" shape="square" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import bitsolLogo from '@/assets/images/BitsolBlackLogo.png'
import Avatar from 'primevue/avatar'
import topBarAvatar from '@/assets/images/TopBarAvatar.png'

const router = useRouter()
const route = useRoute()

const navItems = [
  { label: 'Feed', route: 'feedView' },
  { label: 'Chats', route: 'chatsView' },
  { label: 'Jobs', route: 'jobsView' },
  { label: 'Events', route: 'eventsView' },
  { label: 'Articles', route: 'articlesView' },
  { label: 'Notifications', route: 'feedView' }
]

const isActive = (routeName: string) => {
  return route.name === routeName
}

const navigateTo = (routeName: string) => {
  router.push({ name: routeName })
}
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
      position: relative;
      padding-bottom: 8px;
      transition: color 0.2s;

      &.active {
        color: var(--primary);

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--primary);
        }
      }

      &:hover {
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