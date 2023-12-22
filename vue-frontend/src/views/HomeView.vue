<script setup lang="ts">
import CallCardBoard from '../components/dispatching/CallCardBoard.vue'
import UnitsList from '../components/dispatching/UnitsList.vue'
import MapComponent from '../components/dispatching/MapComponent.vue'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-10 mb-2 h-full w-full">
    <div class="col-span-2 border-2"></div>
    <div class="md:col-span-4 lg:col-span-4">
      <CallCardBoard />
    </div>
    <div class="rounded-lg md:col-span-2 lg:col-span-4">
      <div class="h-full grid grid-rows-2">
        <div class="row-span-1">
          <MapComponent />
        </div>
        <div class="row-span-1">
          <UnitsList />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#main-grid {
  width: 100%;
  height: 100%;
}
</style>
