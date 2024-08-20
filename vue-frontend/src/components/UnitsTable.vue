<script setup lang="ts">
import Panel from '@/components/Common/Panel.vue'
import { computed } from 'vue'
// import { useUnitsStore } from '@/stores/units'

import { useRepo } from 'pinia-orm'
import { UnitEntity } from '@/stores/units'
import { CadEventEntity } from '@/stores/cadEvents'

const unitsRepo = computed(() => {
  return useRepo(UnitEntity)
})

const cadEventsRepo = computed(() => {
  return useRepo(CadEventEntity)
})
cadEventsRepo.value.save([
  {
    eventType: 'Fire',
    location: '123 Main St',
    narrative: 'Fire in the kitchen',
    reportingParty: 'Joe'
  },
  {
    eventType: 'Medical',
    location: '456 Elm St',
    narrative: 'Person with chest pain',
    reportingParty: 'Jane'
  },
  {
    eventType: 'Fire',
    location: '789 Oak St',
    narrative: 'Fire in the living room',
    reportingParty: 'Jim'
  },

  {
    eventType: 'Medical',
    location: '101 Pine St',
    narrative: 'Person with shortness of breath',
    reportingParty: 'Jill'
  }
])
unitsRepo.value.save([
  {
    callsign: '7A-15',
    unitType: 'Police',
    location: 'string',
    status: 'Available'
  },

  {
    callsign: 'E-12',
    unitType: 'Fire',
    location: 'string',
    status: 'Available'
  },

  {
    callsign: 'ALS-5',
    unitType: 'Medical',
    location: 'string',
    status: 'Available'
  },

  {
    callsign: '7A-21',
    unitType: 'Police',
    location: 'string',
    status: 'Available'
  }
])

import { attachUnitToEvent } from '@/composables/cadDataAPI'

attachUnitToEvent('ALS-5', cadEventsRepo.value.where('eventType', 'Medical').get()[0].id)
attachUnitToEvent('E-12', cadEventsRepo.value.where('eventType', 'Fire').withAll().get()[0].id)
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
