<script setup lang="ts">
import CadEventLink from '@/components/Common/SpecialLinks/CadEventLink.vue'

defineProps<{
  cadEventIds: string[]
}>()
</script>
<template>
  <span v-for="(cadEventId, index) in cadEventIds" :key="cadEventId">
    <CadEventLink :cadEventId="cadEventId" />
    <span v-if="index != cadEventIds.length - 1">, </span>
  </span>
</template>
