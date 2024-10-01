<script setup lang="ts">
import { useSystemConfigStore } from '@/stores/systemConfig'
import EditableTable from '@/components/Common/EditableTable.vue'

const systemConfigStore = useSystemConfigStore()
</script>
<template>
  <div>
    <div class="row m-5">
      <EditableTable
        id="eventTypes"
        :columns="[
          { key: 'name', label: 'Name' },
          { key: 'defaultPriority', label: 'Default Priority' }
        ]"
        :rows="systemConfigStore.eventTypes"
      />
      <EditableTable
        id="eventTypes"
        :columns="[
          { key: 'name', label: 'Name' },
          { key: 'position', label: 'Position' }
        ]"
        :rows="systemConfigStore.howReportedOptions"
      />
    </div>
  </div>
</template>
