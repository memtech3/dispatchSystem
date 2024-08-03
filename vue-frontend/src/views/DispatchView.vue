<script setup lang="ts">
import EventForm from '@/components/EventDetails/EventDetailsBoard.vue'
import MapComponent from '@/components/MapComponent.vue'
import UnitsTable from '@/components/UnitsTable.vue'
import EventsBoard from '@/components/EventsBoard/EventsBoard.vue'
import NewEventWindow from '@/components/NewEventWindow.vue'
</script>
<template>
  <div class="row h-100">
    <div class="col-3 ps-0 h-100">
      <EventForm />
    </div>
    <div class="col h-100">
      <EventsBoard />
    </div>
    <div class="col pe-0 h-100">
      <MapComponent class="h-50" />
      <UnitsTable class="h-50" />
    </div>
  </div>

  <NewEventWindow />
</template>
