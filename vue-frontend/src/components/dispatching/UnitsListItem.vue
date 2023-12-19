<script setup lang="ts">
import { IxEventListItem, IxIcon, IxCol, IxTile } from '@siemens/ix-vue'

defineProps<{
  unitID: string
  unitStatus: string
  unitCurrentCall: string
}>()
</script>

<template>
  <li
    class="flex items-center p-2 mb-4 text-sm text-white rounded-md bg-blue-50 dark:bg-gray-800 dark:text-white"
    role="alert"
  >
    <span class="bg-blue-700 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded">{{
      unitID
    }}</span>
    <span class="pl-16 pr-4 font-medium">{{ unitStatus }}</span>
    <span>2m 35s</span>
  </li>
</template>

<style scoped>
.unitID-badge {
  background-color: blueviolet;
}
</style>
