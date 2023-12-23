<script setup lang="ts">
import UnitsListItem from './UnitsListItem.vue'
import TextInput from '../TextInput.vue'
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="my-2">
      <TextInput
        name="Search"
        type="text"
        id="searchBar"
        label="Search"
        placeholder="Enter your query..."
        icon="bi bi-search"
      />
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="p-4"></th>
          <th scope="col" class="px-6">Unit ID</th>
          <th scope="col" class="px-6">Stauts</th>
          <th scope="col" class="px-6">Current Call</th>
        </tr>
      </thead>
      <tbody class="overflow-scroll">
        <UnitsListItem unitID="1A-34" unitStatus="Available" unitCurrentCall="PD36" />
        <UnitsListItem unitID="1A-34" unitStatus="Available" unitCurrentCall="PD36" />
        <UnitsListItem unitID="1A-34" unitStatus="Available" unitCurrentCall="PD36" />
        <UnitsListItem unitID="1A-34" unitStatus="Available" unitCurrentCall="PD36" />
        <UnitsListItem unitID="1A-34" unitStatus="Available" unitCurrentCall="PD36" />
        <UnitsListItem unitID="1A-34" unitStatus="Available" unitCurrentCall="PD36" />
        <UnitsListItem unitID="1A-34" unitStatus="Available" unitCurrentCall="PD36" />
        <UnitsListItem unitID="1A-34" unitStatus="Available" unitCurrentCall="PD36" />
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
