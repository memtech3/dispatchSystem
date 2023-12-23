<script setup lang="ts">
import CallCardBoard from '../components/dispatching/CallCardBoard.vue'
import CallDetailsPanel from '../components/dispatching/CallDetailsPanel.vue'
import UnitsList from '../components/dispatching/UnitsList.vue'
import MapComponent from '../components/dispatching/MapComponent.vue'
</script>

<template>
  <div class="grid grid-cols-10 h-full w-full">
    <div class="col-span-2 h-full">
      <CallDetailsPanel />
    </div>
    <div class="col-span-4 h-full">
      <CallCardBoard />
    </div>
    <div class="col-span-4 h-full">
      <div class="h-full grid grid-rows-2">
        <div class="halfHeight">
          <MapComponent />
        </div>
        <div class="halfHeight overflow-auto">
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

.halfHeight {
  /* set height of element to half of (height of viewport minus height of navbar) */
  height: calc((100vh - 59px) / 2);
}
</style>
