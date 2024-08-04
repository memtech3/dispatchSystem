<script lang="ts" setup>
import AppNavbar from '@/components/ApplicationFrame/AppNavbar.vue'
import CommandBar from '@/components/ApplicationFrame/CommandBar.vue'
</script>
<template>
  <AppNavbar />
  <main class="container-fluid h-100 px-0" id="appMain">
    <RouterView />
    <CommandBar />
  </main>
</template>

<style scoped>
#appMain {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
</style>
