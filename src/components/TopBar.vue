<template>
  <div class="top-bar">
    <img :src="bitsolLogo" class="logo" alt="bitsol-logo" />
    <div class="logo-nav">
      <ul class="nav-links">
        <li
          v-for="item in navItems"
          :key="item.routeName || item.label"
          :class="{ active: item.label === activeItem }"
          @click="setActiveItem(item)"
        >
          {{ item.label }}
        </li>
      </ul>
      <Avatar :image="topBarAvatar" shape="square" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import bitsolLogo from '@/assets/images/BitsolBlackLogo.png'
import Avatar from 'primevue/avatar';
import topBarAvatar from '@/assets/images/TopBarAvatar.png';


interface NavItem {
  label: string;
  routeName?: string;
}

const navItems: NavItem[] = [
  { label: 'Feed', routeName: 'feedView' },
  { label: 'Chats' },
  { label: 'Jobs', routeName: 'jobsView' },
  { label: 'Events', routeName: 'eventsView' },
  { label: 'Articles', routeName: 'articlesView' },
  { label: 'People' },
  { label: 'Notifications' },
];

const activeItem = ref('Feed');
const router = useRouter();

const setActiveItem = (item: NavItem) => {
  activeItem.value = item.label;
  if (item.routeName) {
    router.push({ name: item.routeName });
  }
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