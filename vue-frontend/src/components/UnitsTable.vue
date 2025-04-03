<script setup lang="ts">
import { computed } from 'vue'

import { useRepo } from 'pinia-orm'
import { UnitEntity } from '@/stores/units'

import 'fundamental-styles/dist/table.css'

const unitsRepo = computed(() => {
  return useRepo(UnitEntity)
})
</script>
<template>
  <table class="fd-table">
    <thead class="fd-table__header">
      <tr class="fd-table__row">
        <th class="fd-table__cell" scope="col">Unit</th>
        <th class="fd-table__cell" scope="col">Type</th>
        <th class="fd-table__cell" scope="col">Status</th>
        <th class="fd-table__cell" scope="col">Location</th>
        <th class="fd-table__cell" scope="col">Assigned Event</th>
      </tr>
    </thead>
    <tbody class="fd-table__body">
      <tr class="fd-table__row" v-for="unit in unitsRepo.withAll().get()" :key="unit.id">
        <td class="fd-table__cell">{{ unit.callsign }}</td>
        <td class="fd-table__cell">{{ unit.unitType }}</td>
        <td class="fd-table__cell">{{ unit.status }}</td>
        <td class="fd-table__cell">{{ unit.location }}</td>
        <td class="fd-table__cell">{{ unit.assignedEvent?.id }}</td>
      </tr>
    </tbody>
  </table>
</template>
