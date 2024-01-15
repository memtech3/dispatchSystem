<script setup lang="ts">
import { ref } from 'vue'

const units = ref()
const columns = [
  {
    key: 'unitID',
    label: 'Unit ID',
  },
  {
    key: 'type',
    label: 'Type',
  },
  {
    key: 'status',
    label: 'Status',
  },
  {
    key: 'event',
    label: 'Event',
  },
  {
    key: 'currentLocation',
    label: 'Current Location',
  },
]
units.value = [
  {
    unitID: '1A-45',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
    selected: false,
  },
  {
    unitID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
    selected: false,
  },
  {
    unitID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
    selected: false,
  },
  {
    unitID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
    selected: false,
  },
  {
    unitID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
    selected: false,
  },
  {
    unitID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
    selected: false,
  },
  {
    unitID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
    selected: false,
  },
  {
    unitID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
    selected: false,
  },
]
</script>

<template>
  <UTable :rows="units" :columns="columns" />
</template>

<style lang="scss"></style>
