<script setup lang="ts">
defineProps<{
  commentId: string
  comment: string
  when: string
  source: string
}>()
</script>

<template>
  <div class="list-group-item list-group-item-action d-flex px-2 py-1 gap-2">
    <div class="w-100">
      <div class="d-flex flex-row align-items-center w-100">
        <img
          src="https://github.com/twbs.png"
          alt="twbs"
          width="16"
          height="16"
          class="rounded-circle flex-shrink-0"
        />
        <small class="opacity-50 px-2 flex-grow-1">{{ source }}</small>
        <small class="opacity-50">{{ when }}</small>
      </div>
      <p class="mb-0 opacity-75">{{ comment }}</p>
    </div>
  </div>
</template>
