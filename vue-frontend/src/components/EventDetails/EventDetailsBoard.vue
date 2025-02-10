<script setup lang="ts">
import { computed } from 'vue'
import { useRepo } from 'pinia-orm'
import { CadEventEntity } from '@/stores/cadEvents'
import { useConsoleStateStore } from '@/stores/consoleState'

import CommentsPanel from './CommentsPanel.vue'
import EventCard from '@/components/EventsBoard/EventCard.vue'
import ReportingPartiesPanel from './ReportingPartiesPanel.vue'

import 'fundamental-styles/dist/list.css'
import 'fundamental-styles/dist/vertical-nav.css'

const consoleStateStore = useConsoleStateStore()

const cadEventsRepo = computed(() => {
  return useRepo(CadEventEntity)
})

const currentCadEvent = computed(() => {
  return cadEventsRepo.value.withAll().where('id', consoleStateStore.getSelectedEvent()).get()[0]
})
</script>

<template>
  <div class="fd-list fd-list--byline">
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
    />
  </div>
  <div class="row g-0 h-100">
    <div class="col-2 h-100">
      <div class="fd-vertical-nav fd-vertical-nav--condensed">
        <nav class="fd-vertical-nav__main-navigation" aria-label="Main Menu 2">
          <ul class="fd-list" aria-label="Main Menu List 2">
            <li class="fd-list__navigation-item fd-list__navigation-item--condensed" tabindex="0">
              <i role="presentation" class="fd-list__navigation-item-icon sap-icon--home"></i>
              <span class="fd-list__navigation-item-text">Overview</span>
            </li>
            <li class="fd-list__navigation-item fd-list__navigation-item--condensed" tabindex="0">
              <i role="presentation" class="fd-list__navigation-item-icon sap-icon--calendar"></i>
              <span class="fd-list__navigation-item-text">Calendar</span>
            </li>
            <li class="fd-list__navigation-item fd-list__navigation-item--condensed" tabindex="0">
              <i role="presentation" class="fd-list__navigation-item-icon sap-icon--customer"></i>
              <span class="fd-list__navigation-item-text">Customers</span>
            </li>
            <li class="fd-list__navigation-item fd-list__navigation-item--condensed" tabindex="0">
              <i
                role="presentation"
                class="fd-list__navigation-item-icon sap-icon--shipping-status"
              ></i>
              <span class="fd-list__navigation-item-text">Deliveries</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="col h-100 d-flex flex-column">
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
