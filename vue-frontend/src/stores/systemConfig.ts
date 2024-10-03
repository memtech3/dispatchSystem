import { ref } from 'vue'
import { defineStore } from 'pinia'

export type EventType = {
  id: number
  name: string
  defaultPriority: number
}

export type HowReportedType = {
  id: number
  name: string
  position: number
}

export const useSystemConfigStore = defineStore('systemConfig', () => {
  const eventTypes = ref(Array<EventType>())
  const howReportedOptions = ref(Array<HowReportedType>())
  return { eventTypes, howReportedOptions }
})
