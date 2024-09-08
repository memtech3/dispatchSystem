<script setup lang="ts">
import { computed } from 'vue'
import { useRepo } from 'pinia-orm'

import { UnitEntity } from '@/stores/units'
import { CadEventEntity } from '@/stores/cadEvents'

import { seedUnits } from '@/stores/seedData/units'
import { seedEvents } from '@/stores/seedData/cadEvents'

import { DispatchCmd, invokeCommand } from '@/composables/commands'

const cadEventsRepo = computed(() => {
  return useRepo(CadEventEntity)
})

const unitsRepo = computed(() => {
  return useRepo(UnitEntity)
})

const addData = () => {
  unitsRepo.value.insert(seedUnits)
  cadEventsRepo.value.insert(seedEvents)

  invokeCommand(
    new DispatchCmd(
      unitsRepo.value.where('callsign', 'ALS-5').get()[0].id,
      cadEventsRepo.value.where('eventType', 'Medical').get()[0].id
    )
  )
  invokeCommand(
    new DispatchCmd(
      unitsRepo.value.where('callsign', 'E-12').get()[0].id,
      cadEventsRepo.value.where('eventType', 'Fire').get()[0].id
    )
  )
}
</script>
<template>
  <button class="btn btn-primary" @click="addData">Add Seed Data</button>
</template>
