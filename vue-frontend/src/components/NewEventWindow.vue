<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { VueWinBox } from 'vue-winbox'
import { useMagicKeys, whenever } from '@vueuse/core'
import { useCadEventsStore, type CadEvent } from '@/stores/cadEvents'
import InputText from '@/components/Common/InputText.vue'
import AutoCompleteDropdown from '@/components/Common/AutoCompleteDropdown.vue'

const cadEventsStore = useCadEventsStore()
const cadEventRef = ref(<CadEvent>{})
const formFirstInputRef = ref()

function createCadEvent() {
  if (cadEventRef.value === <CadEvent>{}) {
    console.log('Warning: event is empty')
    return false
  } else {
    cadEventsStore.create(cadEventRef.value)
    cadEventRef.value = <CadEvent>{}
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
  y: 'bottom'
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
    cadEventRef.value = <CadEvent>{}
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
      <form class="row gy-1 p-2" @submit.prevent="createCadEvent(), wbRef.winbox.close()">
        <InputText
          class="col-md-12"
          id="location"
          label="Location"
          v-model="cadEventRef.location"
          ref="formFirstInputRef"
        />
        <InputText class="col-md-6" id="type" label="Event Type" v-model="cadEventRef.eventType" />
        <InputText class="col-md-6" id="subtype" label="Event Subtype" />
        <InputText class="col-md-6" label="Source" id="callSource" />
        <InputText class="col-md-6" label="Reporting Party" id="reportingParty" />
        <InputText class="col-md-12" label="Callback Number" id="callBackNumber" />
        <InputText class="col-md-12" label="Additional Persons" id="additionalPersons" />
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Create Event</button>
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
