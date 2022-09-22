<template>
  <div class="py-4 px-2 ">
    <div class="text-center text-xl">
      Did not find meals for your adventure? Add your own recipe.
    </div>

    <form v-on:submit.prevent>

      <div class="">
        <div class="">
          <div class="flex flex-col mt-6">
            <label for="recipename">Recipe name</label>
            <input class="mt-1 p-1 rounded-md border-2 border-gray-300" type="text" placeholder="Pasta with tomato sauce" required>
          </div>

          <div class="flex flex-col mt-6">
            <label for="recipename">Kilocalories</label>
            <input class="mt-1 p-1 rounded-md border-2 border-gray-300" type="text" placeholder="500" required>
          </div>

          <div class="flex flex-col mt-6">
            <label for="recipedescription">Instructions</label>
            <textarea class="w-full mt-2 p-1 text-sm rounded-md border-2 border-gray-300" rows=6 name="recipedescription" placeholder="Add recipe instructions here."></textarea>
          </div>

        </div>

        <!-- Add ingredient part of add recipe -->
        <div class="mt-10 mx-2">
          <div class="my-4 bg-blue1 p-1 text-center ">
            Add ingredients by "add ingredient" button.
            Remove ingredients by clicking the ingredient.
          </div>
          <div class="flex flex-col mt-6">
            <label>Ingredient</label>
            <input v-model="tempIngredientName" class="mt-1 p-1 rounded-md border-2 border-gray-300" type="text" placeholder="Pasta">
          </div>
          <div class="flex flex-col mt-6">
            <label>Amount</label>
            <input v-model="tempIngredientAmount" class="mt-1 p-1 rounded-md border-2 border-gray-300" type="text" placeholder="2">
          </div>
          <div class="flex flex-col mt-6">
            <label>Unit (dl, pc, g, etc.)</label>
            <input v-model="tempIngredientUnit" class="mt-1 p-1 rounded-md border-2 border-gray-300" type="text" placeholder="dl">
          </div>

          <button  v-on:click="addIngredient"
            class="block text-lg m-auto mt-10 bg-purple1 py-1 w-1/2 px-2 font-semibold border-green-900 border rounded-md text-white">
            Add ingredient
          </button>

          <div class="my-6">
            <p class="font-semibold text-lg text-center border-b">Ingredients</p>
          </div>
          <ul class="mx-2 my-1" v-for="ingredient in temporaryIngredients" v-bind:key="ingredient">
            <li class="rounded-md bg-blue1 py-1 px-2 my-0.5">{{ingredient.name}} {{ingredient.amount}} {{ingredient.unit}}</li>
          </ul>
        </div>


      </div>

      <button class="block text-xl m-auto mt-24 bg-purple1 py-1 w-3/4 px-2 font-semibold border-green-900 border rounded-md text-white"
        v-on:click="handleSubmit">Add recipe</button>
    </form>
  </div>
</template>

<script setup>

import {ref} from 'vue'

let temporaryIngredients = ref([{'name' : 'Spagetti', 'unit' : 'dl', 'amount' : '2'}])
let tempIngredientName = ref('')
let tempIngredientAmount = ref('')
let tempIngredientUnit = ref('')
let tempObj = ref({})

function addIngredient(event) {
      if (tempIngredientName.value) {
        if (!temporaryIngredients.value.some(e => e.name === tempIngredientName.value)) {
          tempObj.value = {name : tempIngredientName.value,
          amount : tempIngredientAmount.value,
          unit : tempIngredientUnit.value}

          temporaryIngredients.value.push(tempObj.value)
          tempIngredientName.value = ''
          tempIngredientAmount.value = ''
          tempIngredientUnit.value = ''
        }
      }
    }

</script>

<style>

</style>
