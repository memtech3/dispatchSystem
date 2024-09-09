<script setup lang="ts">
import { computed } from 'vue'
import { useRepo } from 'pinia-orm'
import { CadEventEntity } from '@/stores/cadEvents'
import { useConsoleStateStore } from '@/stores/consoleState'

import EventCard from './EventCard.vue'

const consoleStateStore = useConsoleStateStore()

const cadEventsRepo = computed(() => {
  return useRepo(CadEventEntity)
})
</script>

<template>
  <div class="list-group">
    <EventCard
      v-for="cadEvent in cadEventsRepo.withAll().get()"
      :key="cadEvent.id"
      :id="cadEvent.id"
      :priority="cadEvent.priority"
      priority-clr="green"
      type-code="2319"
      :type-description="cadEvent.eventType"
      type-icon="bi bi-virus"
      :location="cadEvent.location"
      :assigned-units="cadEvent.assignedUnits"
      :created-time="cadEvent.createdAt.toLocaleString()"
      @click="consoleStateStore.setSelectedEvent(cadEvent?.id)"
      class="pointerCursor"
    />
  </div>
</template>

<style scoped lang="scss">
.pointerCursor {
  cursor: pointer;
}
</style>
