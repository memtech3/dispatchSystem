<script setup lang="ts">
import 'fundamental-styles/dist/dialog.css'
import 'fundamental-styles/dist/busy-indicator.css'
</script>
<template>
  <div class="fd-dialog__loader">
    <div class="fd-busy-indicator fd-busy-indicator--m" aria-hidden="false" aria-label="Loading">
      <div class="fd-busy-indicator__circle"></div>
      <div class="fd-busy-indicator__circle"></div>
      <div class="fd-busy-indicator__circle"></div>
    </div>
    <br /><br />
  </div>
</template>
