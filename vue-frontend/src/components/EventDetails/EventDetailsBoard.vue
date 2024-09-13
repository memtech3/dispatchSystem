<script setup lang="ts">
import { computed } from 'vue'
import { useRepo } from 'pinia-orm'
import { CadEventEntity } from '@/stores/cadEvents'
import { useConsoleStateStore } from '@/stores/consoleState'

import CommentsPanel from './CommentsPanel.vue'
import EventCard from '@/components/EventsBoard/EventCard.vue'
import ReportingPartiesPanel from './ReportingPartiesPanel.vue'

const consoleStateStore = useConsoleStateStore()

const cadEventsRepo = computed(() => {
  return useRepo(CadEventEntity)
})

const currentCadEvent = computed(() => {
  return cadEventsRepo.value.withAll().where('id', consoleStateStore.getSelectedEvent()).get()[0]
})
</script>

<template>
    <div class="row g-0 h-100 border">
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
        <div class="flex-fill overflow-auto">
          <div id="narrativeSection" class="border-bottom p-2">
            <p>Narrative: {{ currentCadEvent?.narrative }}</p>
          </div>
          <div id="reportingPartiesSection" class="border-bottom p-2">
            <span class="fw-bold"> Reporting Parties </span>
            <ReportingPartiesPanel :reproting-parties="currentCadEvent?.reportingParties" />
          </div>
          <div id="commentsSection" class="border-bottom p-2">
            <CommentsPanel :selected-event-id="consoleStateStore.getSelectedEvent()" />
          </div>
        </div>
      </div>
    </div>
</template>
