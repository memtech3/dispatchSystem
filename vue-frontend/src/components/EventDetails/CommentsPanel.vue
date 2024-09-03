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
    .value.filter((entry) => entry.associatedEvents.includes(props.selectedEventId))
})
</script>
<template>
  <div class="row g-3">
    <InputTextArea id="commentsTextArea" label="Add Comment" ariaDescription="Add comment" />
    <div class="list-group">
      <CommentItem
        v-for="entry in associatedEntries.slice().reverse()"
        v-bind:key="entry.timestamp"
        commentId="000"
        :comment="entry.action + ' ' + entry.actionParameters"
        :source="entry.user"
        :when="entry.timestamp.toLocaleString()"
      />
    </div>
  </div>
</template>
