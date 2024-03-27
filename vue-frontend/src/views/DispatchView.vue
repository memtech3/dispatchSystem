<script setup>
import NewEventWindow from '@/components/NewEventWindow.vue'
import EventForm from '@/components/EventForm/EventForm.vue'
import MapComponent from '@/components/MapComponent.vue'
import UnitsTable from '@/components/UnitsTable.vue'
import CallsCardBoard from '@/components/calls/CallCardBoard.vue'
</script>
<template>
  <!-- <NewEventWindow /> -->
  <div
    class="grid grid-cols-[25%_1fr_1fr] h-full w-full divide-x divide-y divide-gray-200 dark:divide-gray-700"
  >
    <div class="">
      <EventForm />
    </div>
    <div><CallsCardBoard /></div>
    <div
      class="h-full grid grid-rows-2 overflow-auto divide-x divide-y divide-gray-200 dark:divide-gray-700"
    >
      <div class="">
        <MapComponent />
      </div>
      <div>
        <UnitsTable />
      </div>
    </div>
  </div>
</template>
