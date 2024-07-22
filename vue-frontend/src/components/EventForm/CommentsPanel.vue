<script setup lang="ts">
import CommentItem from './CommentItem.vue'
import InputTextArea from './InputTextArea.vue'
</script>
<template>
  <div class="row g-3">
    <h1>Comments</h1>
    <InputTextArea id="commentsTextArea" label="Add Comment" ariaDescription="Add comment" />
    <div class="list-group">
      <CommentItem
        commentId="2"
        comment="Additional report of mva, RP states 3 vehicles involved"
        source="Jane Doe - Dispatcher"
        when="4:52 PM"
      />
      <CommentItem
        commentId="2"
        comment="Caller witnessed mva on highway 9"
        source="Jane Doe - Dispatcher"
        when="4:50 PM"
      />
    </div>
  </div>
</template>
