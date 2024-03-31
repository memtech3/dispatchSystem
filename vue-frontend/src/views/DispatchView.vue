<script setup>
import EventForm from '@/components/EventForm/EventForm.vue'
import MapComponent from '@/components/MapComponent.vue'
import UnitsTable from '@/components/UnitsTable.vue'
import CallsCardBoard from '@/components/calls/CallCardBoard.vue'
</script>
<template>
  <section class="pf-v5-c-page__main-section pf-v5-u-h-100">
    <div class="pf-v5-l-grid pf-m-gutter pf-v5-u-h-100">
      <div class="pf-v5-l-grid__item pf-m-gutter pf-m-3-col pf-v5-u-h-100">
        <EventForm />
      </div>
      <div class="pf-v5-l-grid__item pf-m-gutter pf-m-4-col pf-v5-u-h-100">
        <CallsCardBoard />
      </div>
      <div class="pf-v5-l-grid__item pf-m-gutter pf-m-5-col pf-v5-u-h-100">
        <div class="pf-v5-l-flex pf-m-column pf-v5-u-h-100">
          <MapComponent class="pf-m-flex-1" />
          <UnitsTable />
        </div>
      </div>
    </div>
  </section>
</template>
