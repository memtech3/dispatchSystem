<script setup lang="ts">
const props = defineProps<{
  id: string
  comment: string
}>()
</script>

<template>
  <!-- Chat Bubble -->
  <li class="p-2 border">
    <div class="max-w-4xl">
      <div class="max-w-2xl flex gap-x-2 sm:gap-x-4">
        <span
          class="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600"
        >
          <span class="text-sm font-medium text-white leading-none">AZ</span>
        </span>

        <div class="grow mt-2 space-y-3">
          <p class="text-gray-800 dark:text-gray-200">{{ comment }}</p>
        </div>
      </div>
    </div>
  </li>
  <!-- End Chat Bubble -->
</template>
