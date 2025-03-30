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

export type SavedLayout = {
  id: number
  name: string
  layoutJSON: JSON
}

export const useSystemConfigStore = defineStore('systemConfig', () => {
  const eventTypes = ref(Array<EventType>())
  const howReportedOptions = ref(Array<HowReportedType>())
  const savedLayouts = ref()
  return { eventTypes, howReportedOptions, savedLayouts }
})
