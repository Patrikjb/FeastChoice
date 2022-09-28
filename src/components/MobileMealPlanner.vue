<template>
  <div class="bg-blue-900 py-4
    lg:bg-blue1 lg:bg-opacity-75 lg:py-6 lg:rounded-md lg:shadow lg:shadow-gray-900 w-1/2">

    <div class="text-center text-xl font-bold text-white
      lg:text-3xl lg:tracking-wide">

      Plan your next meals

    </div>

    <div class="text-center mt-6 text-white
      lg:text-xl lg:mt-10">

      <p>How many meals wanted?</p>

      <input class="mt-2 p-1 rounded-md text-gray-900 border-blue1 border-2 text-center" type="number" min="1" max="5"
        placeholder="2" v-model="mealCount">

    </div>

    <div class="text-center mt-6 text-white
      lg:text-xl lg:mt-10">

      <p>How many people eating?</p>

      <input class="mt-2 p-1 rounded-md text-gray-900 border-2 border-blue1 text-center" type="number" min="1" max="8"
        placeholder="3" v-model="eaterCount">

    </div>

    <button class="block text-xl m-auto mt-10 bg-purple1 py-1
      w-3/4 px-2 font-semibold rounded-md text-white
      lg:w-1/3 lg:py-2 lg:text-2xl lg:tracking-wide lg:shadow lg:shadow-gray-900" v-on:click="toggle">Plan it
    </button>

  </div>

  <!-- Planned recipes containers below -->
  <div class="mt-8">
    <div class="2xl:grid 2xl:grid-cols-3 2xl:gap-6">
      <MealCard v-for="mealcard in allRecipesArray.slice(0,mealCount)" 
        v-bind:key="mealcard.uid"
        v-bind:mealcard="mealcard" />
    </div>
  </div>

</template>

<script setup>

import { ref, onMounted } from 'vue'
import { db, auth, database } from '../firebase.js'
import { ref as firebaseRef, onValue } from 'firebase/database'
import { doc, getDocs, collection, query, limit, where, orderBy } from 'firebase/firestore'
import MealCard from './MealCard.vue'

const eaterCount = ref(1)
const mealCount = ref(1)

let allRecipesArray = ref([])

async function getRecipes(max_current) {
  let tempObj = {}

  let limitValue = mealCount.value

  let randomInt = getRndInteger(1, max_current)

  const q = query(collection(db, "allRecipes"),
    where("sequenceInteger", ">=", randomInt),
    orderBy("sequenceInteger"),
    limit(limitValue))

  const querySnapShot = await getDocs(q)
  querySnapShot.forEach((doc) => {
    tempObj["uid"] = doc.id
    tempObj["recipe"] = doc.data()
    allRecipesArray.value.push(tempObj)
    tempObj = {};
  })


}

async function toggle() {

  const max_count_ref = firebaseRef(database, 'max_sequence_integer/');
  onValue(max_count_ref, (snapshot) => {
    const max_current = snapshot.val();
    getRecipes(max_current)
  })
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

</script>

<style>

</style>
