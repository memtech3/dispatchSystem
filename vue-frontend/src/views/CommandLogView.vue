<script setup lang="ts">
import { useCommandLog } from '@/stores/commandLogStore'

const commandLog = useCommandLog()
</script>
<template>
  <table class="table table-sm">
    <thead>
      <tr>
        <th scope="col">Timestamp</th>
        <th scope="col">Command</th>
        <th scope="col">User</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="activity in commandLog.getLog().value" v-bind:key="activity.timestamp.toLocaleString()">
        <td>{{ activity.timestamp.toLocaleString() }}</td>
        <td>{{ activity.command }}</td>
        <td>{{ activity.user }}</td>
      </tr>
    </tbody>
  </table>
</template>
