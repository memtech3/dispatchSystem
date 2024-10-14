<script setup lang="ts">
import { ref, nextTick, computed } from 'vue'
import { VueWinBox } from 'vue-winbox'
import { useMagicKeys, whenever } from '@vueuse/core'
import { useRepo } from 'pinia-orm'
import { CadEventEntity, ReportingParty } from '@/stores/cadEvents'
import { useSystemConfigStore } from '@/stores/systemConfig'

import InputText from '@/components/Common/InputText.vue'
import InputTextArea from '@/components/Common/InputTextArea.vue'
import AutoCompleteDropdown from '@/components/Common/AutoCompleteDropdown.vue'

import 'fundamental-styles/dist/form-layout-grid.css'

const cadEventsRepo = computed(() => {
  return useRepo(CadEventEntity)
})
const cadEventRef = ref(<CadEventEntity>{})
const reportingPartyRef = ref(<ReportingParty>{})
const formFirstInputRef = ref()
const systemConfigStore = useSystemConfigStore()

function createCadEvent() {
  if (Object.keys(cadEventRef.value).length === 0) {
    console.log('Warning: event is empty')
    return false
  } else {
    cadEventRef.value.reportingParties = [reportingPartyRef.value]
    cadEventsRepo.value.insert(cadEventRef.value)
    cadEventRef.value = <CadEventEntity>{}
    reportingPartyRef.value = <ReportingParty>{}
    return true
  }
}

const wbRef = ref()
const windowIsOpenRef = ref(false)

//WinBox options
const options = {
  title: 'New Event',
  overflow: true,
  index: 2000,
  x: 'center',
  y: 'center',
  height: 600,
  width: 400
}

const keys = useMagicKeys()

whenever(keys.F2, () => {
  if (windowIsOpenRef.value && wbRef.value) {
    wbRef.value.winbox.focus()
    formFirstInputRef.value.inputRef.focus()
  } else {
    windowIsOpenRef.value = true
    wbRef.value?.initialize()
    nextTick(() => {
      formFirstInputRef.value.inputRef.focus()
    })
  }
})

whenever(keys.Escape, () => {
  if (windowIsOpenRef.value && wbRef.value) {
    wbRef.value.winbox.close()
    cadEventRef.value = <CadEventEntity>{}
  }
})
</script>

<template>
  <div id="windows" v-if="windowIsOpenRef">
    <VueWinBox
      ref="wbRef"
      :options="options"
      @focus="windowIsOpenRef = true"
      @close="windowIsOpenRef = false"
    >
      <form
        class="fd-container fd-form-layout-grid-container fd-form-group is-compact"
        autocomplete="off"
        @submit.prevent=""
        @keyup.ctrl.enter="createCadEvent(), wbRef.winbox.close()"
      >
        <InputText
          class="fd-col--12"
          id="location"
          label="Location"
          v-model="cadEventRef.location"
          ref="formFirstInputRef"
        />

        <AutoCompleteDropdown
          class="fd-col--8"
          id="type"
          label="Event Type"
          v-model="cadEventRef.eventType"
          :options="systemConfigStore.eventTypes.map((option) => option.name)"
        />
        <InputText
          class="fd-col--4"
          id="priority"
          label="Priority"
          v-model.number="cadEventRef.priority"
        />

        <InputText
          class="fd-col--4"
          id="firstName"
          label="First Name"
          v-model="reportingPartyRef.firstName"
        />
        <InputText
          class="fd-col--4"
          id="middleName"
          label="Middle Name"
          v-model="reportingPartyRef.middleName"
        />
        <InputText
          class="fd-col--4"
          id="lastName"
          label="Last Name"
          v-model="reportingPartyRef.lastName"
        />

        <InputText
          class="fd-col--6"
          id="fromPhone"
          label="From Phone"
          v-model="reportingPartyRef.fromPhone"
        />
        <AutoCompleteDropdown
          class="fd-col--6"
          id="howReported"
          label="How Reported"
          v-model="reportingPartyRef.howReported"
          :options="systemConfigStore.howReportedOptions.map((option) => option.name)"
        />

        <InputText
          class="fd-col--12"
          id="callbackPhone"
          label="Callback Phone"
          v-model="reportingPartyRef.callbackPhone"
        />

        <InputText
          class="fd-col--12"
          id="reportingPartyLocation"
          label="Reporting Party Location"
          v-model="reportingPartyRef.reportingPartyLocation"
        />

        <InputTextArea
          class="fd-col--12"
          label="Narrative"
          id="narrative"
          v-model="cadEventRef.narrative"
        />
        <div class="fd-col--12">
          <button class="fd-button" type="submit" @click="createCadEvent(), wbRef.winbox.close()">
            <span class="fd-button__text">Create Event</span>
          </button>
        </div>
      </form>
    </VueWinBox>
  </div>
</template>

<style lang="scss">
.winbox {
  box-shadow: none;
}

.wb-body {
  /* set the width of window border via margin: */
  margin: 4px;
  background: var(--bs-body-bg);
}

.wb-title {
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 600;
}
</style>
