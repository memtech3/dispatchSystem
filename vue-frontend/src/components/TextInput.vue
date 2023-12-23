<script setup lang="ts">
import 'bootstrap-icons/font/bootstrap-icons.css'

defineProps<{
  name: string
  type: string
  id: string
  label: string
  placeholder: string
  icon: string
}>()
</script>

<template>
  <label :for="id" class="sr-only">{{ name }}</label>
  <div class="relative w-full">
    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
      <span class="text-gray-500 dark:text-gray-400" :class="icon"></span>
    </div>
    <input :type="type" :name="name" :id="id" class="" :placeholder="placeholder" />
  </div>
</template>

<style lang="scss" scoped>
input {
  @apply bg-gray-50 dark:bg-gray-700
      border border-gray-300 dark:border-gray-600
      text-gray-900 dark:text-white dark:placeholder-gray-400 sm:text-sm 
      focus:ring-primary-500 dark:focus:ring-primary-500
      focus:border-primary-500 dark:focus:border-primary-500
      block w-full pl-9 p-2;
}
</style>
