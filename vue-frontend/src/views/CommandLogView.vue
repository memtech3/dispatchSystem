<script setup lang="ts">
import { useCommandLog } from '@/stores/commandLogStore'

const commandLog = useCommandLog()
</script>
<template>
  <table class="table table-sm">
    <thead>
      <tr>
        <th v-for="(value, key) in commandLog.getLog().value[0]" v-bind:key="key" scope="col">
          {{ key }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="activity in commandLog.getLog().value" v-bind:key="activity.timestamp">
        <td v-for="(value, key) in activity" v-bind:key="key">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>
