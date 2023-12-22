<script setup lang="ts">
import UnitsListItem from './UnitsListItem.vue'
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div
      class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4"
    >
      <label for="table-search" class="sr-only">Search</label>
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for items"
        />
      </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="p-4"></th>
          <th scope="col" class="px-6">Unit ID</th>
          <th scope="col" class="px-6">Stauts</th>
          <th scope="col" class="px-6">Current Call</th>
          <th scope="col" class="px-6">Price</th>
          <th scope="col" class="px-6">Action</th>
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
