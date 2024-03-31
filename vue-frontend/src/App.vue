<script lang="ts" setup>
import AppNavbar from './components/applicationFrame/AppNavbar.vue'
import AppFooter from './components/applicationFrame/AppFooter.vue'
</script>
<template>
  <div class="pf-v5-c-page dark">
    <AppNavbar />
    <main class="pf-v5-c-page__main">
      <RouterView />
    </main>
    <!-- <AppFooter class="self-end w-full" /> -->
  </div>
</template>
