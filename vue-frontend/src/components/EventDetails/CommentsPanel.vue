<script setup lang="ts">
import CommentItem from './CommentItem.vue'
import InputText from '../Common/InputText.vue'
import UnitLinkList from '@/components/Common/SpecialLinks/UnitLinkList.vue'
import { useCommandLog } from '@/stores/commandLogStore'
import { computed } from 'vue'

const props = defineProps<{
  selectedEventId: string
}>()

const commandLog = useCommandLog()

const associatedEntries = computed(() => {
  return commandLog.getLog().value.filter((entry) => entry.command.eventId == props.selectedEventId)
})
</script>
<template>
  <div class="row g-3">
    <InputText id="commentsTextArea" placeholder="Add Comment" ariaDescription="Add comment" />
    <ul class="list-group px-2">
      <li
        v-for="entry in associatedEntries.slice().reverse()"
        v-bind:key="entry.timestamp.toString()"
      >
        <CommentItem commentId="000" :source="entry.user" :when="entry.timestamp.toLocaleString()">
          <slot>
            {{ entry.command.getLogInfo().logString }}
            <UnitLinkList :unitIds="entry.command.getLogInfo().associatedUnits" />
            <span v-if="entry.command.getLogInfo().comment">
              - {{ entry.command.getLogInfo().comment }}</span
            >
          </slot>
        </CommentItem>
      </li>
    </ul>
  </div>
</template>
