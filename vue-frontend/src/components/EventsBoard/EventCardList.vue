<script setup lang="ts">
import { computed } from 'vue'
import { useRepo } from 'pinia-orm'
import { CadEventPiniaORM } from '@/stores/cadEventsPiniaORM'

import EventCard from './EventCard.vue'

const cadEventsPiniaORMRepo = computed(() => {
  return useRepo(CadEventPiniaORM)
})
</script>

<template>
  <div class="list-group">
    <EventCard
      v-for="cadEvent in cadEventsPiniaORMRepo.withAll().get()"
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
