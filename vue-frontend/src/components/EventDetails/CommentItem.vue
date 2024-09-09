<script setup lang="ts">
defineProps<{
  commentId: string
  comment: string
  when: string
  source: string
}>()
</script>

<template>
  <li class="list-group-item list-group-item-action d-flex p-2 gap-2">
    <img
      src="https://github.com/twbs.png"
      alt="twbs"
      width="32"
      height="32"
      class="rounded-circle flex-shrink-0"
    />
    <div class="w-100">
      <div class="d-flex flex-row w-100 justify-content-between">
        <h6 class="mb-0">{{ source }}</h6>
        <small class="opacity-50 text-nowrap">{{ when }}</small>
      </div>
      <p class="mb-0 opacity-75">{{ comment }}</p>
    </div>
  </li>
</template>
