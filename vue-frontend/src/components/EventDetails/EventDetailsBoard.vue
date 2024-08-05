<script setup lang="ts">
import { computed } from 'vue'
import { useRepo } from 'pinia-orm'
import { CadEventEntity } from '@/stores/cadEvents'
import { useConsoleStateStore } from '@/stores/consoleState'

import InputText from '@/components/Common/InputText.vue'
import AutoCompleteDropdown from '@/components/Common/AutoCompleteDropdown.vue'
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
      <div class="col-md-1">
        <!-- TODO: Navigation tabs go here -->
      </div>
      <div class="col-md-11 h-100">
        <div class="card-body h-100 overflow-auto">
          <EventCard
            id="CFS00"
            :priority="5"
            priority-clr="green"
            type-code="2319"
            :type-description="currentCadEvent?.eventType"
            type-icon="bi bi-virus"
            :location="currentCadEvent?.location"
            :assigned-units="currentCadEvent?.assignedUnits"
            created-time="11:11 PM"
          />
          <p>ID: {{ currentCadEvent?.id }}</p>
          <p>Reporting Party: {{ currentCadEvent?.reportingParty }}</p>
          <p>Narrative: {{ currentCadEvent?.narrative }}</p>
          <CommentsPanel />
        </div>
      </div>
    </div>
  </div>
</template>
