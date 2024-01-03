<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/applicationFrame/navbar/Navbar.vue'
import Footer from './components/applicationFrame/footer/Footer.vue'

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
  <Footer />
</template>

<style scoped>
main {
  /* set height of main element to height of viewport minus height of navbar */
  height: calc(100vh - 59px - 24px);
}
</style>
