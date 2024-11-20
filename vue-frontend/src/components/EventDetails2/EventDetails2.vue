<script setup lang="ts">
import { CadEventEntity } from '@/stores/cadEvents'
import { useConsoleStateStore } from '@/stores/consoleState'
import { useRepo } from 'pinia-orm'
import { computed } from 'vue'

import 'fundamental-styles/dist/quick-view.css'
import 'fundamental-styles/dist/avatar.css'
import 'fundamental-styles/dist/form-group.css'
import 'fundamental-styles/dist/form-item.css'
import 'fundamental-styles/dist/form-label.css'

const consoleStateStore = useConsoleStateStore()

const cadEventsRepo = computed(() => {
  return useRepo(CadEventEntity)
})

const currentCadEvent = computed(() => {
  return cadEventsRepo.value.withAll().where('id', consoleStateStore.getSelectedEvent()).get()[0]
})
</script>
<template>
  <div class="fd-quick-view">
    <div class="fd-quick-view__content">
      <div class="fd-bar fd-bar--header-with-subheader">
        <div class="fd-bar__left">
          <!-- this is a span because bootstrap css wants to style h5 -->
          <span class="fd-avatar fd-avatar--s" role="presentation">
            <i role="presentation" class="fd-avatar__icon sap-icon--building"></i>
          </span>

          <div class="fd-quick-view__subheader-text">
            <span class="fd-title fd-title--h5">{{ currentCadEvent.eventType }}</span>
            <div class="fd-quick-view__subtitle">{{ currentCadEvent.location }}</div>
          </div>
        </div>
      </div>

      <div class="fd-form-group" role="group">
        <div class="fd-form-group__header">
          <h1 class="fd-form-group__header-text">Initial Event Information</h1>
        </div>
        <div class="fd-form-item">
          <label class="fd-form-label">Narrative</label>
          <span class="fd-text">
            {{ currentCadEvent.narrative }}
          </span>
        </div>
        <div class="fd-form-item">
          <label class="fd-form-label">How Reported</label>
          <span class="fd-text">[HOW REPORTED HERE]</span>
        </div>
      </div>

      <br />
      <div class="fd-form-group" role="group">
        <div class="fd-form-group__header" aria-labelledby="mainContact">
          <h1 class="fd-form-group__header-text" id="mainContact">Reporting Party</h1>
        </div>
        <div class="fd-form-item">
          <label class="fd-form-label">Name</label>
          <span class="fd-text">Michael Adams</span>
        </div>
        <div class="fd-form-item">
          <label class="fd-form-label">Mobile</label>
          <a class="fd-link" href="tel:+1 605 555 5555"
            ><span class="fd-link__content">+1 605 555 5555</span></a
          >
        </div>
        <div class="fd-form-item">
          <label class="fd-form-label">Mobile</label>
          <a class="fd-link" href="tel:+1 605 555 5555"
            ><span class="fd-link__content">+1 605 555 5555</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
