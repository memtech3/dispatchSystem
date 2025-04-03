<script setup lang="ts">
import { CadEventEntity } from '@/stores/cadEvents'
import { useConsoleStateStore } from '@/stores/consoleState'
import { useRepo } from 'pinia-orm'
import { computed } from 'vue'

const consoleStateStore = useConsoleStateStore()

const cadEventsRepo = computed(() => {
  return useRepo(CadEventEntity)
})

const currentCadEvent = computed(() => {
  return cadEventsRepo.value.withAll().where('id', consoleStateStore.getSelectedEvent()).get()[0]
})
</script>
<template>
  <div class="eventDetailsContainer">
    <div class="eventForm ">
      
    </div>
  </div>
</template>
<style scoped lang="scss">
.eventDetailsContainer {
  // if wide enough, show event form stuffs on the left
  // and associated people, places, and related events on the right
}
</style>
