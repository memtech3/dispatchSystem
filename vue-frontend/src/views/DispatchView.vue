<script setup lang="ts">
import EventForm from '@/components/EventForm/EventForm.vue'
import MapComponent from '@/components/MapComponent.vue'
import UnitsTable from '@/components/UnitsTable.vue'
import EventCardBoard from '@/components/events/EventCardBoard.vue'
import { useMagicKeys, whenever } from '@vueuse/core'

import { ref } from 'vue'
import { VueWinBox } from 'vue-winbox'

const wbRef = ref()
const windowIsOpenRef = ref(false)

//WinBox options
const options = {
  title: 'New Event',
  overflow: true,
  index: 2000,
  x: 'center',
  y: 'center'
}

const keys = useMagicKeys()

whenever(keys.F2, () => {
  if (windowIsOpenRef.value) {
    wbRef.value.winbox.focus()
  } else {
    windowIsOpenRef.value = true
    wbRef.value?.initialize()
  }
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

  <div id="windows" v-if="windowIsOpenRef">
    <VueWinBox
      ref="wbRef"
      :options="options"
      @focus="windowIsOpenRef = true"
      @close="windowIsOpenRef = false"
    >
      winbox window
    </VueWinBox>
  </div>
</template>

<style lang="scss">
.winbox {
  @apply bg-gray-700;
  box-shadow: none;
}

.wb-body {
  /* set the width of window border via margin: */
  margin: 4px;
  @apply bg-gray-950 text-white;
}

.wb-title {
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 600;
}
</style>
