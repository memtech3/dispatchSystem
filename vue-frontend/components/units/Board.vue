<script lang="ts" setup>
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
const todoStatus = [
  {
    key: 'uncompleted',
    label: 'In Progress',
    value: false,
  },
  {
    key: 'completed',
    label: 'Completed',
    value: true,
  },
]

const search = ref('')
const selectedStatus = ref([])
const searchStatus = computed(() => {
  if (selectedStatus.value?.length === 0) {
    return ''
  }

  if (selectedStatus?.value?.length > 1) {
    return `?completed=${selectedStatus.value[0].value}&completed=${selectedStatus.value[1].value}`
  }

  return `?completed=${selectedStatus.value[0].value}`
})

const resetFilters = () => {
  search.value = ''
  selectedStatus.value = []
}

// Pagination
const sort = ref({ column: 'unitID', direction: 'asc' as const })

const units = ref()
units.value = [
  {
    unitID: '1A-10',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
  },
  {
    unitID: '1A-11',
    type: 'Police',
    status: 'En Route',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
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
    unitID: '1A-35',
    type: 'Police',
    status: 'Out of Service',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD',
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
</script>

<template>
  <UCard
    class="w-full"
    :ui="{
      base: '',
      ring: '',
      divide: 'divide-y divide-gray-200 dark:divide-gray-700',
      header: { padding: 'px-4 py-1' },
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
    <div class="flex justify-between items-center w-full px-4 py-3">
      <div class="flex items-center gap-1.5">
        <UInput
          v-model="search"
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
      :rows="units"
      :columns="columnsTable"
      sort-asc-icon="i-heroicons-arrow-up"
      sort-desc-icon="i-heroicons-arrow-down"
      sort-mode="manual"
      class="w-full"
      :ui="{ td: { base: 'max-w-[0] truncate' } }"
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

      <template #actions-data="{ row }">
        <UButton
          v-if="!row.completed"
          icon="i-heroicons-check"
          size="2xs"
          color="emerald"
          variant="outline"
          :ui="{ rounded: 'rounded-full' }"
          square
        />

        <UButton
          v-else
          icon="i-heroicons-arrow-path"
          size="2xs"
          color="orange"
          variant="outline"
          :ui="{ rounded: 'rounded-full' }"
          square
        />
      </template>
    </UTable>
  </UCard>
</template>
