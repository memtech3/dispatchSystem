<script setup lang="ts">
import { computed } from 'vue'
import { useRepo } from 'pinia-orm'
import { CadEventEntity } from '@/stores/cadEvents'

import EventCard from './EventCard.vue'

const cadEventsRepo = computed(() => {
  return useRepo(CadEventEntity)
})
</script>

<template>
  <div class="list-group">
    <EventCard
      v-for="cadEvent in cadEventsRepo.withAll().get()"
      :key="cadEvent.id"
      id="CFS00"
      :priority="5"
      priority-clr="green"
      type-code="2319"
      :type-description="cadEvent.eventType"
      type-icon="bi bi-virus"
      :location="cadEvent.location"
      :assigned-units="cadEvent.assignedUnits"
      created-time="11:11 PM"
    />
  </div>
</template>
