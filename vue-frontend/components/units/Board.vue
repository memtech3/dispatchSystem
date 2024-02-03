<script lang="ts" setup>
// Mock data
const units = [
  {
    unitID: '1A-10',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
  },
  {
    unitID: 'E-11',
    type: 'Fire',
    status: 'En Route',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SFD',
  },
  {
    unitID: '1A-30',
    type: 'Police',
    status: 'On Scene',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
  },
  {
    unitID: 'ALS-1',
    type: 'EMS',
    status: 'Out of Service',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SFD',
  },
  {
    unitID: '1A-36',
    type: 'Police',
    status: 'Distress',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
  },
  {
    unitID: '1A-37',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
  },
  {
    unitID: '7A-15',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
  },
  {
    unitID: '7A-16',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
  },
]

// Columns
const columns = [
  { key: 'unitID', label: 'Unit ID' },
  { key: 'type', label: 'Type' },
  { key: 'status', label: 'Status' },
  { key: 'event', label: 'Event' },
  { key: 'currentLocation', label: 'Current Location' },
  { key: 'agency', label: 'Agency' },
]

const selectedColumns = ref(columns)
const columnsTable = computed(() =>
  columns.filter((column) => selectedColumns.value.includes(column))
)

// Selected Rows
const selectedRows = ref([])

function select(row: { id: string }) {
  const index = selectedRows.value.findIndex((item) => item.id === row.id)
  if (index === -1) {
    selectedRows.value.push(row)
  } else {
    selectedRows.value.splice(index, 1)
  }
}

// Actions
const actions = [
  [
    {
      key: 'completed',
      label: 'Completed',
      icon: 'i-heroicons-check',
    },
  ],
  [
    {
      key: 'uncompleted',
      label: 'In Progress',
      icon: 'i-heroicons-arrow-path',
    },
  ],
]

// Filters

const search = ref('')
const selectedStatus = ref([])

const resetFilters = () => {
  search.value = ''
  selectedStatus.value = []
}

// Pagination
const sort = ref({ column: 'unitID', direction: 'asc' as const })

// Search
const searchQuery = ref('')

const filteredRows = computed(() => {
  if (!searchQuery.value) {
    return units
  }

  return units.filter((unit) => {
    return Object.values(unit).some((value) => {
      return String(value)
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase())
    })
  })
})
</script>

<template>
  <UCard
    class="h-full"
    :ui="{
      divide: 'divide-y divide-gray-200 dark:divide-gray-700',
      header: { padding: 'py-1' },
      body: {
        padding: '',
        base: 'divide-y divide-gray-200 dark:divide-gray-700',
      },
    }"
  >
    <template #header>
      <header
        class="font-semibold text-sm text-gray-900 dark:text-white leading-tight"
      >
        Units
      </header>
    </template>

    <!-- Header and Action buttons -->
    <div class="flex justify-between items-center w-full px-4 py-2">
      <div class="flex items-center gap-1.5">
        <UInput
          v-model="searchQuery"
          icon="i-heroicons-magnifying-glass-20-solid"
          placeholder="Search..."
        />
      </div>

      <div class="flex gap-1.5 items-center">
        <UDropdown
          v-if="selectedRows.length > 1"
          :items="actions"
          :ui="{ width: 'w-36' }"
        >
          <UButton
            icon="i-heroicons-chevron-down"
            trailing
            color="gray"
            size="xs"
          >
            Mark as
          </UButton>
        </UDropdown>

        <USelectMenu v-model="selectedColumns" :options="columns" multiple>
          <UButton icon="i-heroicons-view-columns" color="gray" size="xs">
            Columns
          </UButton>
        </USelectMenu>

        <UButton
          icon="i-heroicons-funnel"
          color="gray"
          size="xs"
          :disabled="search === '' && selectedStatus.length === 0"
          @click="resetFilters"
        >
          Reset
        </UButton>
      </div>
    </div>

    <!-- Table -->
    <UTable
      v-model="selectedRows"
      v-model:sort="sort"
      :rows="filteredRows"
      :columns="columnsTable"
      sort-asc-icon="i-heroicons-arrow-up"
      sort-desc-icon="i-heroicons-arrow-down"
      sort-mode="manual"
      :ui="{
        th: {
          padding: 'py-2',
        },
        td: {
          padding: 'py-2',
        },
      }"
      @select="select"
    >
      <template #status-data="{ row }">
        <UBadge
          v-if="row.status == 'Available'"
          size="xs"
          label="Available"
          color="emerald"
          variant="subtle"
        />
        <UBadge
          v-if="row.status == 'En Route'"
          size="xs"
          label="En Route"
          color="blue"
          variant="subtle"
        />
        <UBadge
          v-if="row.status == 'Out of Service'"
          size="xs"
          label="Out of Service"
          color="zinc"
          variant="subtle"
        />
        <UBadge
          v-if="row.status == 'On Scene'"
          size="xs"
          label="On Scene"
          color="orange"
          variant="subtle"
        />
        <UBadge
          v-if="row.status == 'Distress'"
          size="xs"
          label="Distress"
          color="red"
          variant="subtle"
        />
      </template>
    </UTable>
  </UCard>
</template>
