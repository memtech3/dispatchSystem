<script setup lang="ts">
import UnitLink from '@/components/Common/SpecialLinks/UnitLink.vue'

defineProps<{
  unitIds: string[]
}>()
</script>
<template>
  <span v-for="(unitId, index) in unitIds" :key="unitId">
    <UnitLink :unitId="unitId" />
    <span v-if="index != unitIds.length - 1">, </span>
  </span>
</template>
