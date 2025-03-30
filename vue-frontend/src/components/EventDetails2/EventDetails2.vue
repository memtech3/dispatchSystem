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
import 'fundamental-styles/dist/message-page.css'

const consoleStateStore = useConsoleStateStore()

const cadEventsRepo = computed(() => {
  return useRepo(CadEventEntity)
})

const currentCadEvent = computed(() => {
  return cadEventsRepo.value.withAll().where('id', consoleStateStore.getSelectedEvent()).get()[0]
})
</script>
<template>
  <div class="fd-message-page" v-if="!currentCadEvent">
    <div class="fd-message-page__container">
      <div class="fd-message-page__icon-container">
        <i role="presentation" class="sap-icon--filter fd-message-page__icon"></i>
      </div>
      <div role="status" aria-live="polite" class="fd-message-page__content">
        <div class="fd-message-page__title">No event selected</div>
        <div class="fd-message-page__subtitle">Select an event.</div>
      </div>
    </div>
  </div>

  <div class="my-content" v-else>
    <div class="fd-bar fd-bar--header-with-subheader my-bar">
      <div class="fd-bar__left">
        <!-- this is a span because bootstrap css wants to style h5 -->
        <span class="fd-avatar fd-avatar--s" role="presentation">
          <i role="presentation" class="fd-avatar__icon sap-icon--building"></i>
        </span>

        <div class="my-subheader">
          <span class="fd-title fd-title--h5">{{ currentCadEvent.eventType }}</span>
          <span class="">{{ currentCadEvent.location }}</span>
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
</template>
<style scoped lang="scss">
.my-content {
  padding-block: 1rem;
  padding-inline: 1rem;
  background-color: var(--sapBackgroundColor);
}
.my-bar {
  padding-inline: 0;
  padding-block: 0;
  height: auto;

  padding-block-end: 0.75rem;
  background: none;
}
.my-subheader {
  margin-inline-start: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  justify-content: center;

  max-width: 100%;
  height: 100%;
  min-width: 0; // fix for flex width https://github.com/philipwalton/flexbugs#flexbug-17
}
</style>
