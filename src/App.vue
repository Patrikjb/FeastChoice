<template>>
      <div class="py-2 px-3 flex items-center justify-between">
      <img class="w-2/3"
      v-bind:src="require('./assets/FeastChoice Logo - Original with Transparent Background-cropped.svg')" alt="">
   
      <!-- hamburger menu icon for small screen, otherwise desktop-->
      <div v-on:click="toggleNav" class="h-9 w-9 flex flex-col gap-1 items-center justify-center">
        <div class="h-1 w-7 bg-purple1 rounded-sm"></div>
        <div class="h-1 w-7 bg-purple1 rounded-sm"></div>
        <div class="h-1 w-7 bg-purple1 rounded-sm"></div>
      </div>
      
      <!-- links in hamburger menu for small screens, otherwise desktop -->
    </div>
    <div>
      <div v-if="navIsOpen"  class="flex flex-col bg-blue-900 text-white mx-2">
        <RouterLink to="/" class="px-2 py-2 font-semibold border-b">Home</RouterLink>
        <a href="#" class="px-2 py-2 font-semibold border-b">Plan your next meals</a>
        <router-link to="/about" class="px-2 py-2 font-semibold">About</router-link>
      </div>
    </div>

    <RouterView />
    <footer class="text-center mt-6 mx-2 bg-gray-100 py-2 border-t-2 border-blue-900 text-sm opacity-30">
      Copyright 2022. For contact: patrik.borenius[at]gmail.com
    </footer>
</template>

<script setup>

import {onMounted, onUnmounted, ref} from 'vue'
import HomeView from './components/HomeView.vue'

let smallScreen = ref(true)

onMounted(() => {
  window.addEventListener("resize", onResize)
})

onUnmounted(() => {
  window.addEventListener("resize", onResize)
})

function onResize(e) {
  if (window.innerWidth < 1024) {
    smallScreen.value = true
  } else {
    smallScreen.value = false
  }
}

let navIsOpen = ref(false)
function toggleNav() {
  navIsOpen.value = !navIsOpen.value
}

</script>

<style>

</style>
