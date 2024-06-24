<script setup lang="ts">
import { createApp } from 'vue'
import EventForm from '@/components/EventForm/EventForm.vue'
import MapComponent from '@/components/MapComponent.vue'
import UnitsTable from '@/components/UnitsTable.vue'
import EventCardBoard from '@/components/events/EventCardBoard.vue'
import { useMagicKeys, whenever } from '@vueuse/core'

const keys = useMagicKeys()

whenever(keys.F2, async () => {
  // Dynamically import the NewEventWindow component
  const { default: NewEventWindow } = await import('@/components/NewEventWindow.vue')
  // Create an instance of the component
  const NewEventWindowInstance = createApp(NewEventWindow)
  // Mount the component to the body or a specific element
  NewEventWindowInstance.mount("#windows")
  console.log('Stuff')
})
</script>
<template>
  <section class="pf-v5-c-page__main-section pf-v5-u-h-100">
    <div class="pf-v5-l-grid pf-m-gutter pf-v5-u-h-100">
      <div class="pf-v5-l-grid__item pf-m-gutter pf-m-3-col pf-v5-u-h-100">
        <EventForm />
      </div>
      <div class="pf-v5-l-grid__item pf-m-gutter pf-m-4-col pf-v5-u-h-100">
        <EventCardBoard />
      </div>
      <div class="pf-v5-l-grid__item pf-m-gutter pf-m-5-col pf-v5-u-h-100">
        <div class="pf-v5-l-flex pf-m-column pf-v5-u-h-100">
          <MapComponent class="pf-m-flex-1" />
          <UnitsTable />
        </div>
      </div>
    </div>
  </section>

  <div id="windows" v-for="number in numbers">

  </div>
</template>
