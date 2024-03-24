<script setup>
import AutoComplete from 'primevue/autocomplete'
</script>
<template>
  <div class="flex flex-col gap-1">
    <label class="text-xs font-bold" for="callSource">Source</label>
    <AutoComplete
      v-model="value"
      dropdown
      :suggestions="items"
      @complete="search"
      
    />
  </div>
</template>
