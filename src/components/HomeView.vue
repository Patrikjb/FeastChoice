<template>
  <div class="bg-purple1 pb-4 mx-2 border-blue-900 border-t-2 pt-8">
    <div class="mx-2 mt-16 text-white text-3xl font-bold text-center">
      Never again: what do we eat today?
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
  <!-- <div class="py-5 bg-yellow-50">
    <MobileAddRecipe />
  </div> -->
</template>

<script setup>
import {ref} from 'vue'
import MobileMealPlanner from './MobileMealPlanner.vue'
import MobileAddRecipe from './MobileAddRecipe.vue'


const el = ref(null)
    function scrollTo() {
      el.value = document.getElementsByClassName("MobileMealPlanner")[0]
      el.value.scrollIntoView({behavior: "smooth"})
      console.log(el.value)
    }

</script>

<style scoped>

</style>
