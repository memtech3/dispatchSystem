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

export const useCommandLog = defineStore('commandLog', () => {
  const commandLog = ref(Array<LogEntry>())

  function getLog() {
    return commandLog
  }
  function addLogEntry(logEntry: LogEntry) {
    commandLog.value.push(logEntry)
  }
  return { commandLog, getLog, addLogEntry }
})
