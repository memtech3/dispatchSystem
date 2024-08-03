<script lang="ts" setup>
import AppNavbar from '@/components/ApplicationFrame/AppNavbar.vue'
</script>
<template>
  <AppNavbar />
  <main class="container-fluid h-100 px-0" id="appMain">
    <RouterView />
  </main>
</template>

<style scoped>
#appMain {
  padding-top: 2.5rem;
}
</style>
./components/ApplicationFrame/AppNavbar.vue