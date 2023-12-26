<script setup lang="ts">
defineProps<{
  linkTo: string
  state: string
  icon: string
}>()
</script>

<template>
  <button class="w-full py-2" :class="state">
    <div class="sideBarButton">
      <span :class="icon"></span>
    </div>
  </button>
</template>

<style lang="scss" scoped>
.sideBarButton {
  @apply inline-flex items-center justify-center 
    w-10 h-10
    text-lg font-semibold text-gray-800 dark:text-gray-300 
    bg-gray-50  dark:bg-gray-700
    rounded-full;
}

.default {
  @apply hover:text-gray-900 dark:hover:text-white
    hover:bg-gray-100 dark:hover:bg-gray-600;
}

.active {
  @apply text-white bg-blue-700 dark:bg-blue-600;
}

.disabled {
  @apply text-gray-400 cursor-not-allowed dark:text-gray-500;
}
</style>
