<script setup>
import CommentItem from './CommentItem.vue'
</script>
<template>
  <!-- Content -->
  <div class="border">
    <textarea
      class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
      rows="3"
      placeholder="This is a textarea placeholder"
    ></textarea>
    <ul class="p-2">
      <CommentItem comment="Additional report of mva, RP states 3 vehicles involved" />
      <CommentItem comment="Caller witnessed mva on highway 9" />
    </ul>
  </div>
  <!-- End Content -->
</template>
