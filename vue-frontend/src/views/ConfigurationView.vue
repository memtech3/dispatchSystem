<script setup lang="ts">
import InputText from '@/components/Common/InputText.vue'
import { useSystemConfigStore } from '@/stores/systemConfig'
import EditableTable from '@/components/Common/EditableTable.vue'

const systemConfigStore = useSystemConfigStore()
</script>
<template>
  <div>
    <h1>Configuration</h1>
    <p>This is the configuration view. Things that belong here:</p>
    <ul>
      <li>Editable list of event types</li>
      <li>Editable list of how reported options</li>
    </ul>
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
