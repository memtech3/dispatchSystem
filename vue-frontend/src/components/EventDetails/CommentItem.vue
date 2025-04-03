<script setup lang="ts">
defineProps<{
  commentId: string
  when: string
  source: string
}>()
</script>

<template>
  <div class="list-group-item list-group-item-action d-flex px-2 py-1 gap-2">
    <div class="w-100">
      <div class="d-flex flex-row align-items-center w-100">
        <small class="opacity-50 flex-grow-1">{{ source }}</small>
        <small class="opacity-50">{{ when }}</small>
      </div>
      <p class="mb-0">
        <slot></slot>
      </p>
    </div>
  </div>
</template>
