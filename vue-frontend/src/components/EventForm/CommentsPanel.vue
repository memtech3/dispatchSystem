<script setup>
import CommentItem from './CommentItem.vue'
</script>
<template>
  <div>
    <h1>Comments</h1>
    <pf-textarea
      resize-orientation="vertical"
      max-height="100"
      pattern="[0-9\s]+"
      placeholder="Numbers and spaces only"
    />
    <ul class="p-2">
      <CommentItem comment="Additional report of mva, RP states 3 vehicles involved" />
      <CommentItem comment="Caller witnessed mva on highway 9" />
    </ul>
  </div>
</template>
