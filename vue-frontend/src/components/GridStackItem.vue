<script setup lang="ts">
import 'gridstack/dist/gridstack.min.css'
</script>

<template>
  <div class="grid-stack-item bg-red-400">
    <div class="grid-stack-item-content page-bg">
      <slot />
    </div>
  </div>
</template>
