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
  <main class="w-full overflow-auto">
    <RouterView />
  </main>
</template>

<style scoped>
main {
  height: calc(100vh - 67px);
}
</style>
