<script setup lang="ts">
import CallsList from './CallsList.vue'
import TextInput from '../TextInput.vue'
</script>

<template>
  <div class="px-2">
    <div class="my-2">
      <TextInput
        name="Search"
        type="text"
        id="searchBar"
        label="Search"
        placeholder="Enter your query..."
        icon="bi bi-search"
      />
    </div>
    <div class="grid grid-cols-2 space-x-2 overflow-auto">
      <CallsList />
      <CallsList />
    </div>
  </div>
</template>

<style scoped></style>
