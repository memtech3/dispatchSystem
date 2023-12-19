<script setup lang="ts">
import CallsList from '../components/dispatching/CallsList.vue'
import UnitsList from '../components/dispatching/UnitsList.vue'
import MapComponent from '../components/dispatching/MapComponent.vue'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4 h-full w-full">
    <div
      class="md:col-span-2 lg:col-span-1"
    >
      <UnitsList />
    </div>
    <div
      class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 md:col-span-2 lg:col-span-3"
    >
      <!-- <MapComponent /> -->
    </div>
    <div
      class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 md:col-span-4 lg:col-span-2"
    >
      <!-- <CallsList /> -->
    </div>
  </div>
</template>

<style scoped>
#main-grid {
  width: 100%;
  height: 100%;
}
</style>
