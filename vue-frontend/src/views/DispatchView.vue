<script setup lang="ts">
import EventForm from '@/components/EventForm/EventForm.vue'
import MapComponent from '@/components/MapComponent.vue'
import UnitsTable from '@/components/UnitsTable.vue'
import EventCardBoard from '@/components/events/EventCardBoard.vue'
import NewEventWindow from '@/components/NewEventWindow.vue'
</script>
<template>
  <div class="row h-100">
    <div class="col-3 h-100">
      <EventForm />
    </div>
    <div class="col h-100">
      <EventCardBoard />
    </div>
    <div class="col h-100">
      <MapComponent class="h-50" />
      <UnitsTable />
    </div>
  </div>

  <NewEventWindow />
</template>
