<script setup lang="ts">
import CallsListItem from './CallsListItem.vue'
</script>

<template>
  <div>
    <div class="text-md text-gray-900 dark:text-white ms-2 mb-2">
      <h3 class="font-semibold">Pending (5)</h3>
    </div>
    <ul class="divide-y text-sm font-medium text-gray-900 border dark:text-white">
      <CallsListItem />
      <CallsListItem />
      <CallsListItem />
      <CallsListItem />
    </ul>
  </div>
</template>

<style scoped></style>
