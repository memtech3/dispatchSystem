<script setup lang="ts">
import Panel from '@/components/Common/Panel.vue'
import { computed } from 'vue'

import { useRepo } from 'pinia-orm'
import { UnitEntity } from '@/stores/units'

const unitsRepo = computed(() => {
  return useRepo(UnitEntity)
})
</script>
<template>
  <Panel>
    <template v-slot:body>
      <div class="row g-0">
        <table class="table table-sm table-hover">
          <thead>
            <tr>
              <th scope="col">Unit</th>
              <th scope="col">Type</th>
              <th scope="col">Status</th>
              <th scope="col">Location</th>
              <th scope="col">Assigned Event</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="unit in unitsRepo.withAll().get()" :key="unit.id">
              <th scope="row">{{ unit.callsign }}</th>
              <td>{{ unit.unitType }}</td>
              <td>{{ unit.status }}</td>
              <td>{{ unit.location }}</td>
              <td>{{ unit.assignedEvent?.id }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </Panel>
</template>
@/stores/units
