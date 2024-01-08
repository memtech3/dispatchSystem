<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from '../InputText.vue'
import { FilterMatchMode } from 'primevue/api'
import { ref } from 'vue'

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  representative: { value: null, matchMode: FilterMatchMode.IN },
  status: { value: null, matchMode: FilterMatchMode.EQUALS },
  verified: { value: null, matchMode: FilterMatchMode.EQUALS }
})

const units = ref()
units.value = [
  {
    unitID: '1A-45',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
    selected: false
  },
  {
    unitID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
    selected: false
  },
  {
    unitID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
    selected: false
  },
  {
    unitID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
    selected: false
  },
  {
    unitID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
    selected: false
  },
  {
    unitID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
    selected: false
  },
  {
    unitID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
    selected: false
  },
  {
    unitID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
    selected: false
  }
]
</script>

<template>
  <DataTable
    v-model:filters="filters"
    :value="units"
    scrollable
    scrollHeight="flex"
    tableStyle="min-width: 50rem"
  >
    <template #header>
      <div class="flex justify-content-end py-2">
        <InputText
          name="Search"
          type="text"
          id="searchBar"
          label="Search"
          placeholder="Enter your query..."
          icon="bi bi-search"
          v-model="filters['global'].value"
        />
      </div>
    </template>
    <Column field="select">
      <template #body="{ data }">
        <div class="flex items-center">
          <input
            type="checkbox"
            :value="data.selected"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      </template>
    </Column>
    <Column field="unitID" header="Unit ID">
      <template #body="{ data }">
        <strong class="text-black dark:text-white">
          {{ data.unitID }}
        </strong>
      </template>
    </Column>
    <Column field="type" header="Type"></Column>
    <Column field="status" header="Status"></Column>
    <Column field="event" header="Event"></Column>
    <Column field="currentLocation" header="Location"></Column>
    <Column field="Agency" header="Agency"></Column>
  </DataTable>
</template>

<style lang="scss">
.p-datatable {
  table {
    @apply w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400;
    thead {
      @apply text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400;
      tr {
        th {
          @apply py-2;
          @apply px-6;
        }
      }
    }
    tbody {
      @apply bg-gray-800;
      tr {
        @apply bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600;
        td {
          @apply w-4 p-4;
        }
      }
    }
  }
}
</style>
