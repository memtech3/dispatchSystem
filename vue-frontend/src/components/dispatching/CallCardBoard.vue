<script setup lang="ts">
import CallsList from './CallsList.vue'
</script>

<template>
  <div class="bg-white dark:bg-gray-700 h-full p-2">
    <div class="mb-2">
      <label for="voice-search" class="sr-only">Search</label>
      <div class="relative w-full text-gray-900 dark:text-white">
        <input
          type="text"
          id="voice-search"
          class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search calls"
          required
        />
        <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
          <span class="bi bi-search"></span>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-2">
      <CallsList />
      <CallsList />
    </div>
  </div>
</template>

<style scoped></style>
