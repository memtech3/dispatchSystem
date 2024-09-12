<script setup lang="ts">
import { computed } from 'vue'

import { useRepo } from 'pinia-orm'
import { UnitEntity } from '@/stores/units'

defineProps<{
  unitId: string
}>()

const unitsRepo = computed(() => {
  return useRepo(UnitEntity)
})
</script>
<template>
  <a href="">{{ unitsRepo.find(unitId)?.callsign }}</a>
</template>
