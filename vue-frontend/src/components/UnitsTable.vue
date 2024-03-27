<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

// Mock data
const units = [
  {
    unitID: '1A-10',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  },
  {
    unitID: 'E-11',
    type: 'Fire',
    status: 'En Route',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SFD'
  },
  {
    unitID: '1A-30',
    type: 'Police',
    status: 'On Scene',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  },
  {
    unitID: 'ALS-1',
    type: 'EMS',
    status: 'Out of Service',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SFD'
  },
  {
    unitID: '1A-36',
    type: 'Police',
    status: 'Distress',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  },
  {
    unitID: '1A-37',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  },
  {
    unitID: '7A-15',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  },
  {
    unitID: '7A-16',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  }
]

// Columns
const columns = [
  { key: 'unitID', label: 'Unit ID' },
  { key: 'type', label: 'Type' },
  { key: 'status', label: 'Status' },
  { key: 'event', label: 'Event' },
  { key: 'currentLocation', label: 'Current Location' },
  { key: 'agency', label: 'Agency' }
]
</script>
<template>
  <DataTable :value="units" scrollable scrollHeight="flex" class="text-white">
    <Column v-for="col of columns" :key="col.key" :field="col.key" :header="col.label"></Column>
  </DataTable>
</template>
