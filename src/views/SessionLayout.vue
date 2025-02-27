<template>
    <div class="flex h-screen">
        <div class="relative w-6 hidden lg:block">
            <img :src="frameImage" class="frame" />
            <img :src="bitsolLogo" class="logo" />
        </div>
        <div class="w-full lg:w-6">
            <RouterView/>
           
        </div>
    </div>
</template>

<script setup lang="ts">
import frameImage from '@/assets/images/Frame.png'
import bitsolLogo from '@/assets/images/BitsolLogo.png' 
import  {RouterView} from 'vue-router';
</script>

<style lang="scss" scoped>
.frame {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    object-fit: cover;
    color: transparent;
}

.logo {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 120px;
    z-index: 10;
}
</style>