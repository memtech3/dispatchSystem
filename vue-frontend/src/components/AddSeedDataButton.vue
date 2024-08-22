<script setup lang="ts">
import { computed } from 'vue'
import { useRepo } from 'pinia-orm'

import { UnitEntity } from '@/stores/units'
import { CadEventEntity } from '@/stores/cadEvents'

import { seedUnits } from '@/stores/seedData/units'
import { seedEvents } from '@/stores/seedData/cadEvents'

import { attachUnitToEvent } from '@/composables/cadDataAPI'

const unitsRepo = computed(() => {
  return useRepo(UnitEntity)
})
const cadEventsRepo = computed(() => {
  return useRepo(CadEventEntity)
})

const addData = () => {
  unitsRepo.value.save(seedUnits)
  cadEventsRepo.value.save(seedEvents)

  attachUnitToEvent('ALS-5', cadEventsRepo.value.where('eventType', 'Medical').get()[0].id)
  attachUnitToEvent('E-12', cadEventsRepo.value.where('eventType', 'Fire').withAll().get()[0].id)
}
</script>
<template>
  <button class="btn btn-primary" @click="addData">Add Seed Data</button>
</template>
