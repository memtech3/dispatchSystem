<script setup lang="ts">
import CommentItem from './CommentItem.vue'
import InputText from '../Common/InputText.vue'
import UnitLinkList from '@/components/Common/SpecialLinks/UnitLinkList.vue'
import { useCommandLog } from '@/stores/commandLogStore'
import { computed, ref } from 'vue'
import { invokeCommand, LogCmd } from '@/composables/commands'

const props = defineProps<{
  selectedEventId: string
}>()

const commandLog = useCommandLog()

const associatedEntries = computed(() => {
  return commandLog.getLog().value.filter((entry) => entry.command.eventId == props.selectedEventId)
})

const inputValue = ref()

function addLogEntry() {
  // do nothing if input is empty
  if (inputValue.value) {
    let cmd = new LogCmd(inputValue.value, undefined, props.selectedEventId)
    invokeCommand(cmd)
    inputValue.value = ''
  }
}
</script>
<template>
  <div class="row g-3">
    <InputText
      v-model="inputValue"
      id="commentsTextArea"
      placeholder="Add Comment"
      ariaDescription="Add comment"
      @keydown.enter="addLogEntry"
    />
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
