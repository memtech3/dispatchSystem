<script setup lang="ts">
const props = defineProps<{
  id: string
  label: string
  ariaDescription: string
}>()
</script>
<template>
  <div class="flex flex-col gap-1 w-full">
    <label class="block text-sm font-medium dark:text-white" :for="id">{{ label }}</label>
    <Input
      :id="id"
      class="p-1 block w-full border-gray-200 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
      v-model="value"
      :aria-describedby="ariaDescription"
    />
  </div>
</template>
