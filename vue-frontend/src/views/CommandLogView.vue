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
        <th scope="col">Event</th>
        <th scope="col">Unit</th>
        <th scope="col">Command</th>
        <th scope="col">User</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in commandLog.getLog().value" v-bind:key="item.timestamp.toLocaleString()">
        <td>{{ item.timestamp.toLocaleString() }}</td>
        <td>
          <span
            v-for="(eventId, index) in item.command.getLogInfo().associatedEvents"
            v-bind:key="eventId"
          >
            <CadEventLink :cadEventId="eventId" />
            <span v-if="index != item.command.getLogInfo().associatedEvents?.length - 1">, </span>
          </span>
        </td>
        <td>
          <span v-for="(unitId, index) in item.command.getLogInfo().associatedUnits" :key="unitId">
            <UnitLink :unitId="unitId" />
            <span v-if="index != item.command.getLogInfo().associatedUnits?.length - 1">, </span>
          </span>
        </td>
        <td>
          {{ item.command.getLogInfo().logString }}
          <span v-if="item.command.getLogInfo().comment">
            - {{ item.command.getLogInfo().comment }}</span
          >
        </td>
        <td>{{ item.user }}</td>
      </tr>
    </tbody>
  </table>
</template>
