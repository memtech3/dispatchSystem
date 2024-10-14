<script setup lang="ts">
import { computed } from 'vue'
import { useRepo } from 'pinia-orm'

import { UnitEntity } from '@/stores/units'
import { CadEventEntity } from '@/stores/cadEvents'

import { useSystemConfigStore } from '@/stores/systemConfig'

import { seedUnits } from '@/stores/seedData/units'
import { seedEvents } from '@/stores/seedData/cadEvents'
import { seedCadEventTypes } from '@/stores/seedData/cadEventTypes'
import { seedHowReportedOptions } from '@/stores/seedData/howReportedOptions'

import { DispatchCmd, invokeCommand } from '@/composables/commands'

import 'fundamental-styles/dist/button.css'
import 'fundamental-styles/dist/page.css'
import 'fundamental-styles/dist/bar.css'
import 'fundamental-styles/dist/icon.css'

const cadEventsRepo = computed(() => {
  return useRepo(CadEventEntity)
})

const unitsRepo = computed(() => {
  return useRepo(UnitEntity)
})

const systemConfigStore = useSystemConfigStore()

const addData = () => {
  unitsRepo.value.insert(seedUnits)
  cadEventsRepo.value.insert(seedEvents)

  systemConfigStore.eventTypes = seedCadEventTypes
  systemConfigStore.howReportedOptions = seedHowReportedOptions

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
  <button class="fd-button fd-button--emphasized is-compact" @click="addData">
    <span class="fd-button__text">Add Seed Data</span>
  </button>
</template>
