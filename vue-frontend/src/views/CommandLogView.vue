<script setup lang="ts">
import UnitLink from '@/components/Common/UnitLink.vue'
import CadEventLink from '@/components/Common/CadEventLink.vue'
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
      <tr
        v-for="activity in commandLog.getLog().value"
        v-bind:key="activity.timestamp.toLocaleString()"
      >
        <td>{{ activity.timestamp.toLocaleString() }}</td>
        <td>
          {{ activity.command.commandName }} <UnitLink :unitId="activity.command.unitId" />
          {{ activity.command.comment }} to <CadEventLink :cadEventId="activity.command.eventId" />
        </td>
        <td>{{ activity.user }}</td>
      </tr>
    </tbody>
  </table>
</template>
