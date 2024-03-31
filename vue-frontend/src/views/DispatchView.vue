<script setup>
import EventForm from '@/components/EventForm/EventForm.vue'
import MapComponent from '@/components/MapComponent.vue'
import UnitsTable from '@/components/UnitsTable.vue'
import CallsCardBoard from '@/components/calls/CallCardBoard.vue'
</script>
<template>
  <section class="pf-v5-c-page__main-section">
    <div class="pf-v5-l-grid pf-m-gutter">
      <div class="pf-v5-l-grid__item pf-m-gutter pf-m-3-col">
        <div class="pf-v5-c-card" id="dashboard-demo-details-card-1">
          <div class="pf-v5-c-card__title">
            <h2 class="pf-v5-c-title pf-m-xl">Event Form</h2>
          </div>
          <div class="pf-v5-c-card__body">
            <EventForm />
          </div>
          <hr class="pf-v5-c-divider" />
          <div class="pf-v5-c-card__footer">
            <a href="#">View Settings</a>
          </div>
        </div>
      </div>
      <div class="pf-v5-l-grid__item pf-m-gutter pf-m-4-col">
        <div class="pf-v5-c-card" id="dashboard-demo-details-card-1">
          <div class="pf-v5-c-card__title">
            <h2 class="pf-v5-c-title pf-m-xl">Calls Board</h2>
          </div>
          <div class="pf-v5-c-card__body">
            <CallsCardBoard />
          </div>
        </div>
      </div>
      <div class="pf-v5-l-grid__item pf-m-gutter pf-m-5-col">
        <div class="pf-v5-l-flex pf-m-column pf-m-row-on-md pf-m-column-on-lg">
          <div class="pf-v5-c-card" id="dashboard-demo-details-card-1">
            <div class="pf-v5-c-card__title">
              <h2 class="pf-v5-c-title pf-m-xl">Map</h2>
            </div>
            <div class="pf-v5-c-card__body">
              <MapComponent />
            </div>
          </div>
          <div class="pf-v5-c-card" id="dashboard-demo-details-card-1">
            <div class="pf-v5-c-card__title">
              <h2 class="pf-v5-c-title pf-m-xl">Units Board</h2>
            </div>
            <div class="pf-v5-c-card__body">
              <UnitsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
