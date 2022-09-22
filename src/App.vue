<template>
  <div class="py-2 px-3 flex items-center justify-between ">
    <img class="w-2/3"
     v-bind:src="require('./assets/FeastChoice Logo - Original with Transparent Background-cropped.svg')" alt="">
     <!-- hamburger menu icon-->
     <div v-on:click="toggleNav" class="h-9 w-9 flex flex-col gap-1 items-center justify-center">
       <div class="h-1 w-7 bg-purple1 rounded-sm"></div>
       <div class="h-1 w-7 bg-purple1 rounded-sm"></div>
       <div class="h-1 w-7 bg-purple1 rounded-sm"></div>
     </div>
     <!-- links in hamburger menu -->
  </div>
  <div v-if="navIsOpen" class="flex flex-col bg-blue-900 text-white mx-2">
    <a href="#" class="px-2 py-2 font-semibold">Plan your next meals</a>
    <a href="#" class="px-2 py-2 font-semibold border-t">Add new recipe</a>
  </div>
  <HomeView />
  <footer class="mt-6 mx-2 bg-gray-100 py-2 border-t-2 border-blue-900 text-sm opacity-30">Id sed summis fugiat malis, ut noster pariatur laboris si legam possumus de efflorescere, arbitror ubi quid singulis. Amet admodum fidelissimae, aut multos est nulla ne sed fore cillum te nescius id
    fabulas dolor nescius. Voluptate multos commodo ex in dolor a aliqua.</footer>
</template>

<script setup>

import {ref} from 'vue'
import HomeView from './components/HomeView.vue'

let navIsOpen = ref(false)
function toggleNav() {
  navIsOpen.value = !navIsOpen.value
}

</script>

<style>

</style>
