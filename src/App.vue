<template>
  <RouterView/>
</template>

<script setup>

import {onMounted, onUnmounted, ref} from 'vue'

let smallScreen = ref(true)

onMounted(() => {
  window.addEventListener("resize", onResize)
})

onUnmounted(() => {
  window.addEventListener("resize", onResize)
})

function onResize(e) {
  if (window.innerWidth < 760) {
    smallScreen.value = true
  } else {
    smallScreen.value = false
  }
}

</script>

<style>

</style>
