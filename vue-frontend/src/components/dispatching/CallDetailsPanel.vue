<script setup lang="ts">
import CallDetailCard from './CallDetailCard.vue'
import Sidebar from '../applicationFrame/sidebar/Sidebar.vue'
</script>

<template>
  <div class="flex flex-col h-full">
    <CallDetailCard
      call-id="H345"
      call-priority="1"
      call-priority-clr="priorityColor-green"
      call-type-code="2319"
      call-type-description="Human Contamination"
      call-type-icon="bi bi-virus"
      call-location="Scare Floor Sector 7G"
      call-assigned-resources="P135, PS34, H43, H44"
    />
    <Sidebar />
  </div>
</template>

<style lang="scss" scoped>
.sideBarButton {
  @apply inline-flex items-center justify-center 
    w-8 h-8
    text-xl font-semibold text-gray-800 dark:text-gray-300
    bg-gray-100 dark:bg-blue-800 hover:bg-blue-900
    rounded-full mb-5;
}
</style>
