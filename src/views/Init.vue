<template>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'

    const router = useRouter()

    function isSmallScreen() {
            if (screen.width <= 1024) {
                return true;
            } else {
                return false;
            }
        }

    onMounted(() => {

        if (isSmallScreen()) {
            router.push({ path : '/MainMobile' })
        } else {
            router.push({ path : '/Main' })
        }
    })

</script>

<style>

</style>