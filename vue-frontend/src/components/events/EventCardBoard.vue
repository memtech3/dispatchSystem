<script setup lang="ts">
import EventList from './EventList.vue'
</script>

<template>
  <div class="card h-100">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="true" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
    <div class="card-body p-2 overflow-auto">
      <div class="row g-0">
        <div class="col-6"><EventList /></div>
        <div class="col-6"><EventList /></div>
      </div>
    </div>
  </div>
</template>
