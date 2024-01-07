<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import TextInputVue from '../TextInput.vue'
import InputText from 'primevue/inputtext'
import { FilterService } from 'primevue/api'

// defineProps<{
//   name: string
//   type: string
//   id: string
//   label: string
//   placeholder: string
//   icon: string
// }>()

import { ref } from 'vue'

const units = ref()
units.value = [
  {
    untID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  },
  {
    untID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  },
  {
    untID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  },
  {
    untID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  },
  {
    untID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  },
  {
    untID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  },
  {
    untID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  },
  {
    untID: '1A-30',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  }
]
</script>

<template>
  <DataTable :value="units" scrollable scrollHeight="flex" tableStyle="min-width: 50rem">
    <template #header>
      <div class="flex justify-content-end">
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText placeholder="Keyword Search" />
          <TextInputVue />
        </span>
      </div>
    </template>
    <Column class="font-bold" field="untID" header="Unit ID"></Column>
    <Column field="type" header="Type"></Column>
    <Column field="status" header="Status"></Column>
    <Column field="event" header="Event"></Column>
    <Column field="currentLocation" header="Current Location"></Column>
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
