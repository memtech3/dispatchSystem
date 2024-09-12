<script setup lang="ts">
import CommentItem from './CommentItem.vue'
import InputTextArea from '@/components/Common/InputTextArea.vue'
import { useCommandLog } from '@/stores/commandLogStore'
import { computed } from 'vue'

const props = defineProps<{
  selectedEventId: string
}>()

const commandLog = useCommandLog()

const associatedEntries = computed(() => {
  return commandLog
    .getLog()
    .value.filter((entry) => entry.command.eventId == props.selectedEventId)
})
</script>
<template>
  <div class="row g-3">
    <InputTextArea id="commentsTextArea" label="Add Comment" ariaDescription="Add comment" />
    <ul class="list-group p-2">
      <li
        v-for="entry in associatedEntries.slice().reverse()"
        v-bind:key="entry.timestamp.toString()"
      >
        <CommentItem
          commentId="000"
          :comment="
            entry.command.commandName +
            ' ' +
            entry.command.unitId +
            ' ' +
            entry.command.comment
          "
          :source="entry.user"
          :when="entry.timestamp.toLocaleString()"
        />
      </li>
    </ul>
  </div>
</template>
