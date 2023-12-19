<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/applicationFrame/navbar/Navbar.vue'

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <Navbar />
  <main class="p-4 pt-20 h-screen">
    <RouterView />
  </main>
</template>

<style scoped>
main {
  width: 100%;
}
</style>
