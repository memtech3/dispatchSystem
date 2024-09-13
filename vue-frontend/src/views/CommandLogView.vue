<script setup lang="ts">
import UnitLinkList from '@/components/Common/SpecialLinks/UnitLinkList.vue'
import CadEventLinkList from '@/components/Common/SpecialLinks/CadEventLinkList.vue'
import { useCommandLog } from '@/stores/commandLogStore'

const commandLog = useCommandLog()
</script>
<template>
  <table class="table table-sm">
    <thead>
      <tr>
        <th scope="col">Timestamp</th>
        <th scope="col">Event</th>
        <th scope="col">User</th>
        <th scope="col">Unit</th>
        <th scope="col">Command</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in commandLog.getLog().value" v-bind:key="item.timestamp.toLocaleString()">
        <td>{{ item.timestamp.toLocaleString() }}</td>
        <td>
          <CadEventLinkList :cadEventIds="item.command.getLogInfo().associatedEvents" />
        </td>
        <td>{{ item.user }}</td>
        <td>
          <UnitLinkList :unitIds="item.command.getLogInfo().associatedUnits" />
        </td>
        <td>
          {{ item.command.getLogInfo().logString }}
          <span v-if="item.command.getLogInfo().comment">
            - {{ item.command.getLogInfo().comment }}</span
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>
