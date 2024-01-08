<script setup lang="ts">
import CallsList from './CallsList.vue'
import InputText from '../InputText.vue'
</script>

<template>
  <div class="px-2">
    <div class="my-2">
      <InputText
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
