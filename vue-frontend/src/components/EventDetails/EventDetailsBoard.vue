<script setup lang="ts">
import { computed } from 'vue'
import { useRepo } from 'pinia-orm'
import { CadEventEntity } from '@/stores/cadEvents'
import { useConsoleStateStore } from '@/stores/consoleState'

import CommentsPanel from './CommentsPanel.vue'
import EventCard from '@/components/EventsBoard/EventCard.vue'

const consoleStateStore = useConsoleStateStore()

const cadEventsRepo = computed(() => {
  return useRepo(CadEventEntity)
})

const currentCadEvent = computed(() => {
  return cadEventsRepo.value.withAll().where('id', consoleStateStore.getSelectedEvent()).get()[0]
})
</script>

<template>
  <div class="card h-100" style="max-width: 540px">
    <div class="row g-0 h-100">
      <div class="col-1 h-100 bg-body-tertiary">
        <!-- TODO: Navigation tabs go here -->
      </div>
      <div class="col-11 h-100 d-flex flex-column">
        <div>
          <EventCard
            :id="currentCadEvent?.id"
            :priority="currentCadEvent?.priority"
            priority-clr="green"
            type-code="2319"
            :type-description="currentCadEvent?.eventType"
            type-icon="bi bi-virus"
            :location="currentCadEvent?.location"
            :assigned-units="currentCadEvent?.assignedUnits"
            :created-time="currentCadEvent?.createdAt.toLocaleString()"
            class="border-bottom"
          />
        </div>
        <div class="card-body flex-fill overflow-auto">
          <p>Reporting Party: {{ currentCadEvent?.reportingParties }}</p>
          <p>Narrative: {{ currentCadEvent?.narrative }}</p>
          <CommentsPanel :selected-event-id="consoleStateStore.getSelectedEvent()" />
        </div>
      </div>
    </div>
  </div>
</template>
