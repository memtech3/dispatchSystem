<script setup lang="ts">
import { useSystemConfigStore } from '@/stores/systemConfig'
import EditableTable from '@/components/Common/EditableTable.vue'
import type Row from '@/components/Common/EditableTable.vue'

const systemConfigStore = useSystemConfigStore()

function updateEventTypes(value: Row[]) {
  systemConfigStore.eventTypes = value
}

function updateHowReported(value: Row[]) {
  systemConfigStore.howReportedOptions = value
}
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
        @rowsUpdated="updateEventTypes"
      />
      <EditableTable
        id="howReported"
        :columns="[
          { key: 'name', label: 'Name' },
          { key: 'position', label: 'Position' }
        ]"
        :rows="systemConfigStore.howReportedOptions"
        @rowsUpdated="updateHowReported"
      />
    </div>
  </div>
</template>
