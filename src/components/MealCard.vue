<template>
  <!-- card style -->
    <div class="mt-6 py-4 px-6 rounded-sm bg-blue-900 shadow-lg text-white">

      <!-- title -->
      <div class="text-xl font-bold text-white">
        {{mealcard.recipe.recipeName}}
        <hr class="mt-1 w-4/6">
      </div>

      <!-- flex for info -->
      <div class="mt-4 flex flex-row justify-between">
        <div class="inline-flex flex-col">
          <div>
            Portions
          </div>
          <div class="font-bold text-lg text-white">
            {{mealcard.recipe.mealCount}}
          </div>
        </div>
        <div class="inline-flex flex-col">
          <div>
            Cook time
          </div>
          <div class="font-bold text-lg text-white">
            {{mealcard.recipe.cookTime}} min
          </div>
        </div>
        <div class="inline-flex flex-col">
          <div>
            Ingredients
          </div>
          <div class="font-bold text-lg text-white">
            6
          </div>
        </div>
      </div>

      <!-- description + ingredients -->
      <div class="mt-6">
        <div v-if ="!openedRecipe" class="text-sm text-justify">
          {{mealcard.recipe.recipeDescription.slice(0,200)}}
        </div>
        <div v-else class="text-sm text-justify">

          <h1 class="text-lg font-bold">Ingredients</h1>
          <div class="border w-1/2 mb-2"></div>
          <!-- ingredients -->
          
          <div class="flex" v-for="ingredient in mealcard.recipe.ingredientNames">
              <div class="w-4/6 text-left">{{ingredient.name}}</div>
              <div class="w-1/6 text-center">{{ingredient.amount}}</div>
              <div class="w-1/6 text-right">{{ingredient.unit}}</div>
          </div>

          <!-- full length description -->
          <h1 class="text-lg font-bold mt-6">Instructions</h1>
          <div class="border w-1/2 mb-2"></div>
          <div>
            {{mealcard.recipe.recipeDescription}}
          </div>
        </div>
        <button class="block text-lg m-auto mt-6 bg-purple1 py-0.5 w-3/4 px-2 font-semibold border-green-900 border rounded-md text-white" v-on:click="toggleRecipe">{{ButtonName}}</button>
      </div>
    </div>
</template>


<script setup>

  import { ref } from 'vue'

  defineProps(["mealcard"])

  let openedRecipe = ref(false)
  let ButtonName = ref("View Recipe")

  function toggleRecipe() {
    openedRecipe.value = !openedRecipe.value
    if (openedRecipe.value) {
      ButtonName.value = "Close Recipe"
    } else {
      ButtonName.value = "View Recipe"
    }
  }



</script>

<style></style>