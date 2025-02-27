<template>
    <div
      :class="`gcs-icon ${hasClickListener ? 'cursor-pointer' : ''}`"
      @click="(e) => emit('click', e)"
    >
      <div v-if="!loadIcon()">Icon not Found</div>
      <span v-else :style="{ color }">
        <inline-svg
          :src="loadIcon()"
          :width="getWidth"
          :height="getHeight"
          :aria-label="ariaLabel"
        />
      </span>
    </div>
  </template>
  
  <!-- This component to be used when we want to use custom svg icons -->
  <script setup lang="ts">
  import { Icons } from '@/plugins/icons';
  import { computed } from 'vue';
  import InlineSvg from 'vue-inline-svg';
  
  interface Props {
    name: keyof typeof Icons;
    width?: string;
    height?: string;
    size?: string;
    color?: string;
    ariaLabel?: string;
    onClick?: () => void;
  }
  const emit = defineEmits(['click']);
  const props = withDefaults(defineProps<Props>(), {
    width: '14',
    height: '14',
  });
  
  const getWidth = computed(() => {
    if (props.size) {
      return props.size;
    }
    return props.width;
  });
  
  const getHeight = computed(() => {
    if (props.size) {
      return props.size;
    }
    return props.height;
  });
  
  const hasClickListener = computed(() => {
    return props.onClick;
  });
  
  const loadIcon = () => {
    return Icons[props.name];
  };
  </script>
  
  <style></style>
  