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
        <div class="pf-v5-c-card pf-m-compact pf-v5-u-h-100" id="dashboard-demo-details-card-1">
          <div class="pf-v5-c-card__title">
            <h2 class="pf-v5-c-title pf-m-xl">Event Form</h2>
          </div>
          <div class="pf-v5-c-card__body overflow-auto">
            <EventForm />
          </div>
          <hr class="pf-v5-c-divider" />
          <div class="pf-v5-c-card__footer">
            <a href="#">View Settings</a>
          </div>
        </div>
      </div>
      <div class="pf-v5-l-grid__item pf-m-gutter pf-m-4-col pf-v5-u-h-100">
        <div class="pf-v5-c-card pf-m-compact pf-v5-u-h-100" id="dashboard-demo-details-card-1">
          <div class="pf-v5-c-card__title">
            <h2 class="pf-v5-c-title pf-m-xl">Calls Board</h2>
          </div>
          <div class="pf-v5-c-card__body">
            <CallsCardBoard />
          </div>
        </div>
      </div>
      <div class="pf-v5-l-grid__item pf-m-gutter pf-m-5-col pf-v5-u-h-100">
        <div class="pf-v5-l-flex pf-m-column pf-v5-u-h-100">
          <MapComponent class="pf-m-flex-1" />
          <hr class="pf-v5-c-divider" />
          <div class="pf-v5-c-card pf-m-compact pf-m-flex-1" id="dashboard-demo-details-card-1">
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
