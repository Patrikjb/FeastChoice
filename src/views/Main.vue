<template>
    <div class="relative">
        <nav class="2xl:px-72 pt-8 flex items-center justify-center gap-10">
            <a class="text-blue-900 text-lg font-semibold" href="">About</a>
            <a class="text-blue-900 text-lg font-semibold" href="">Meal Planner</a>
            <a class="text-purple1 text-lg font-semibold" href="">Sign in</a>
            <a class="text-purple1 text-lg font-semibold" href="">Create Account</a>
        </nav>
        <img class="w-3/4 block mx-auto " v-bind:src="require('../assets/panorama.svg')" alt="">
        <!-- <div class="relative px-72">
            <MobileMealPlanner />
        </div> -->
        <img class="absolute top-1/3 left-1/2 w-1/4 -translate-x-2/4"
            v-bind:src="require('../assets/FeastChoice Logo - Original with Transparent Background-cropped.svg')"
            alt="">
    </div>
    <div class="2xl:px-72 flex items-center flex-col">
        <MobileMealPlanner />
    </div>
    <footer class="block mx-auto my-10 w-3/4 text-center py-2 border-t-2 border-blue-900 text-sm opacity-50 ">
        Work in progress.
        </footer>
</template>

<script setup>
import { ref } from 'vue'
import MobileMealPlanner from '../components/MobileMealPlanner.vue'


</script>

<style>

</style>