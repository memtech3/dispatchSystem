<script lang="ts" setup>
import AppNavbar from './components/applicationFrame/AppNavbar.vue'
</script>
<template>
  <AppNavbar />
  <main class="container-fluid h-100" id="appMain">
    <RouterView />
  </main>
</template>

<style scoped>
#appMain {
  padding-top: 2.5rem;
}
</style>
