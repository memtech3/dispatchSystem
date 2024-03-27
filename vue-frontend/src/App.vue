<script setup>
import Navbar from './components/applicationFrame/Navbar.vue'
import AppFooter from './components/applicationFrame/AppFooter.vue'
</script>
<template>
  <div class="appGrid bg-slate-950 dark">
    <Navbar class="mainNav" />
    <main class="overflow-auto">
      <RouterView />
    </main>
    <AppFooter class="self-end w-full" />
  </div>
</template>
<script lang="ts" setup></script>

<style>
.appGrid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100vh;
  width: 100vw;
}
.mainNav {
  align-self: flex-start;
  width: 100;
}
</style>
