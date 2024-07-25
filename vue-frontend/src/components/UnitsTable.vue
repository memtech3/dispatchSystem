<script setup lang="ts">
import { useUnitsStore } from '@/stores/units'

const unitsStore = useUnitsStore()
</script>
<template>
  <div class="card">
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
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Unit</th>
              <th scope="col">Type</th>
              <th scope="col">Status</th>
              <th scope="col">Location</th>
              <th scope="col">Assigned Event</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="[unitId, unit] in unitsStore.data" :key="unitId">
              <th scope="row">{{ unit.callsign }}</th>
              <td>{{ unit.unitType }}</td>
              <td>{{ unit.status }}</td>
              <td>{{ unit.location }}</td>
              <td>{{ unit.assignedEvent }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
