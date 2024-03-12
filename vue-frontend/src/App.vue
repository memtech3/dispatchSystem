<script setup>
import Navbar from './components/applicationFrame/Navbar.vue';
</script>
<template>
  <div class="appGrid h-screen w-screen">
    <Navbar class="self-start w-full" />
    <main class="overflow-auto">
      <slot />
    </main>
    <ApplicationFrameFooter class="self-end w-full" />
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
}
</style>
