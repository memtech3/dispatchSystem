import { ref } from 'vue'
import { defineStore } from 'pinia'

export type EventType = {
  name: string
  defaultPriority: number
}

export type HowReportedType = {
  name: string
  position: number
}

export const useSystemConfigStore = defineStore('systemConfig', () => {
  const eventTypes = ref(Array<EventType>())
  const howReportedOptions = ref(Array<HowReportedType>())
  return { eventTypes, howReportedOptions }
})
