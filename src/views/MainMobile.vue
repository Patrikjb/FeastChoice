<template>
        <div class="py-2 px-3 flex items-center justify-between">
      <img class="w-2/3"
      v-bind:src="require('../assets/FeastChoice Logo - Original with Transparent Background-cropped.svg')" alt="">
   
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
        <a href="#" class="px-2 py-2 font-semibold border-b">Home</a>
        <a href="#" class="px-2 py-2 font-semibold border-b">Plan your next meals</a>
      </div>
    </div>
  <div class="bg-purple1 pb-4 mx-2 border-blue-900 border-t-2 pt-8">
    <div class="mx-2 mt-16 text-white text-3xl font-bold text-center">
      Never again: what do we eat tgoday?
    </div>
    <img class="mt-12 w-3/4 mx-auto" v-bind:src="require('../assets/Healthy_vs_unhealthy_food_vector_flat_illustration-removebg-preview.png')">
    <div class="mx-2 mb-6 text-center mt-6 text-white">
      <p class="mt-12 text-xl">
        Bored of thinking what family eats today?
      </p>
      <p class="mt-4 text-xl">
        Out of ideas in the grocery store?
      </p>
      <p class="mt-4 text-xl">
        Repeating the same meals over and over again?
      </p>
      <!-- <p class="text-white font-semibold text-xl mt-14">Plan your next outdoor trip meals below.</p> -->
    </div>
    <img class="w-1/12 block mx-auto py-4 " v-on:click="scrollTo()" v-bind:src="require('../assets/images/down_arrow.svg')" alt="">
  </div>
  <div class="py-5 bg-yellow-50">
    <div class="MobileMealPlanner px-2">
      <MobileMealPlanner />
    </div>
  </div>
  <footer class="text-center mt-6 mx-2 bg-gray-100 py-2 border-t-2 border-blue-900 text-sm opacity-30">
      Copyright 2022. For contact: patrik.borenius[at]gmail.com
  </footer>
</template>

<script setup>
import {ref} from 'vue'
import MobileMealPlanner from '../components/MobileMealPlanner.vue'



let navIsOpen = ref(false)
function toggleNav() {
  navIsOpen.value = !navIsOpen.value
}


const el = ref(null)
    function scrollTo() {
      el.value = document.getElementsByClassName("MobileMealPlanner")[0]
      el.value.scrollIntoView({behavior: "smooth"})
      console.log(el.value)
    }

</script>

<style scoped>

</style>
