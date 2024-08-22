<script setup lang="ts">
import { useActivityLog } from '@/stores/activityLogStore'

const activityLog = useActivityLog()
</script>
<template>
  <table class="table table-sm">
    <thead>
      <tr>
        <th v-for="(value, key) in activityLog.getLog().value[0]" v-bind:key="key" scope="col">
          {{ key }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="activity in activityLog.getLog().value" v-bind:key="activity.timestamp">
        <td v-for="(value, key) in activity" v-bind:key="key">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>
