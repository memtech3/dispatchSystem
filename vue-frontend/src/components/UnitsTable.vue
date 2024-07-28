<script setup lang="ts">
import { computed } from 'vue'
// import { useUnitsStore } from '@/stores/units'

import { useRepo } from 'pinia-orm'
import { UnitPiniaORM } from '@/stores/unitsPiniaORM'
import { CadEventPiniaORM } from '@/stores/cadEventsPiniaORM'

const unitsPiniaORMRepo = computed(() => {
  return useRepo(UnitPiniaORM)
})

const cadEventsPiniaORMRepo = computed(() => {
  return useRepo(CadEventPiniaORM)
})
cadEventsPiniaORMRepo.value.save([
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
unitsPiniaORMRepo.value.save([
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
try {
  let myUnit = unitsPiniaORMRepo.value.where('callsign', 'ALS-5').withAll().get()[0]
  myUnit.assignedEventId = cadEventsPiniaORMRepo.value.where('eventType', 'Medical').get()[0].id
  unitsPiniaORMRepo.value.save(myUnit)

  let myEvent = cadEventsPiniaORMRepo.value.where('eventType', 'Fire').withAll().get()[0]
  myEvent.assignedUnits.push(unitsPiniaORMRepo.value.where('callsign', 'E-12').get()[0])
  console.log(myEvent)
  cadEventsPiniaORMRepo.value.save(myEvent)
  console.log('Modified event')
  console.log(cadEventsPiniaORMRepo.value.where('eventType', 'Fire').withAll().get()[0])
  console.log('Modified unit')
  console.log(unitsPiniaORMRepo.value.where('callsign', 'ALS-5').withAll().get()[0])
  console.log(cadEventsPiniaORMRepo.value.where('eventType', 'Medical').withAll().get()[0])
} catch (error) {
  console.log(error)
}

// unitsPiniaORMRepo.value.save( )

// const unitsStore = useUnitsStore()
</script>
<template>
  <div class="card">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="true" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
    <div class="card-body p-2 overflow-auto">
      <div class="row g-0">
        <table class="table">
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
            <tr v-for="unit in unitsPiniaORMRepo.withAll().get()" :key="unit.id">
              <th scope="row">{{ unit.callsign }}</th>
              <td>{{ unit.unitType }}</td>
              <td>{{ unit.status }}</td>
              <td>{{ unit.location }}</td>
              <td>{{ unit.assignedEvent?.id }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
