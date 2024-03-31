<script setup lang="ts">
import CallList from './CallList.vue'
</script>

<template>
  <div class="pf-v5-c-card pf-m-compact pf-v5-u-h-100" id="dashboard-demo-details-card-1">
    <div class="pf-v5-c-card__title">
      <h2 class="pf-v5-c-title pf-m-xl">Calls Board</h2>
    </div>
    <div class="pf-v5-c-card__body">
      <div class="px-2">
        <div class="my-2">
          <InputText
            name="Search"
            type="text"
            id="searchBar"
            label="Search"
            placeholder="Enter your query..."
            icon="bi bi-search"
          />
        </div>
        <div class="grid grid-cols-2 space-x-2 overflow-auto">
          <CallList />
          <CallList />
        </div>
      </div>
    </div>
  </div>
</template>
