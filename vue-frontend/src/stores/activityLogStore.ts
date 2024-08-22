import { ref } from 'vue'
import { defineStore } from 'pinia'

export type LogEntry = {
  timestamp: string
  sector: number
  action: string
  actionParameters: string[]
  user: string
  associatedEvents: string[]
  associatedUnits: string[]
  result: boolean | Error
}

export const useActivityLog = defineStore('activityLog', () => {
  const activityLog = ref(Array<LogEntry>())

  function getLog() {
    return activityLog
  }
  function addLogEntry(logEntry: LogEntry) {
    activityLog.value.push(logEntry)
  }
  return { getLog, addLogEntry }
})
