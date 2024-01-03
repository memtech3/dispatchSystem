<script setup lang="ts">
defineProps<{
  keyboardShorcut: string
  actionName: string
}>()
</script>
<template>
  <li class="flex">
    <span class="h-full bg-blue-500 px-2">{{ keyboardShorcut }}</span>
    <p class="ps-3">{{ actionName }}</p>
  </li>
</template>
<style lang="scss"></style>
