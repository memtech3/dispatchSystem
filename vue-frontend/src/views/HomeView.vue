<script setup lang="ts">
import CallCardBoard from '../components/dispatching/CallCardBoard.vue'
import CallDetailsPanel from '../components/dispatching/CallDetailsPanel.vue'
import UnitsList from '../components/dispatching/UnitsList.vue'
import MapComponent from '../components/dispatching/MapComponent.vue'
</script>

<template>
  <div class="grid grid-cols-10 mb-2 h-full w-full">
    <div class="col-span-2 h-full">
      <CallDetailsPanel />
    </div>
    <div class="col-span-4">
      <CallCardBoard />
    </div>
    <div class="col-span-4">
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
