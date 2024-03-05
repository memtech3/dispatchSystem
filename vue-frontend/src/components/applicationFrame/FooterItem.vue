<template>
  <li class="flex">
    <span class="h-full bg-primary-500 px-2">{{ keyboardShortcut }}</span>
    <p class="ps-3">{{ actionName }}</p>
  </li>
</template>

<script lang="ts" setup>
const props = defineProps({
  keyboardShortcut: String,
  actionName: String,
})
</script>

<style></style>
