<script setup lang="ts">
import UnitLinkList from '@/components/Common/SpecialLinks/UnitLinkList.vue'
import CadEventLinkList from '@/components/Common/SpecialLinks/CadEventLinkList.vue'
import { useCommandLog } from '@/stores/commandLogStore'

const commandLog = useCommandLog()
</script>
<template>
  <table class="fd-table">
    <thead class="fd-table__header">
      <tr class="fd-table__row">
        <th class="fd-table__cell" scope="col">Timestamp</th>
        <th class="fd-table__cell" scope="col">Event</th>
        <th class="fd-table__cell" scope="col">User</th>
        <th class="fd-table__cell" scope="col">Unit</th>
        <th class="fd-table__cell" scope="col">Command</th>
      </tr>
    </thead>
    <tbody class="fd-table__body">
      <tr
        class="fd-table__row"
        v-for="item in commandLog.getLog().value"
        v-bind:key="item.timestamp.toLocaleString()"
      >
        <td class="fd-table__cell">{{ item.timestamp.toLocaleString() }}</td>
        <td class="fd-table__cell">
          <CadEventLinkList :cadEventIds="item.command.getLogInfo().associatedEvents" />
        </td>
        <td class="fd-table__cell">{{ item.user }}</td>
        <td class="fd-table__cell">
          <UnitLinkList :unitIds="item.command.getLogInfo().associatedUnits" />
        </td>
        <td class="fd-table__cell">
          {{ item.command.getLogInfo().logString }}
          <span v-if="item.command.getLogInfo().comment">
            - {{ item.command.getLogInfo().comment }}</span
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>
