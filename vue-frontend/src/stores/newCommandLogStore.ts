import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Command } from '@/composables/newCommands'

export type LogEntry = {
  timestamp: Date
  sector: number
  command: Command
  user: string
  associatedEvents: string[]
  associatedUnits: string[]
  result: boolean | Error
}

export const useNewCommandLog = defineStore('newCommandLog', () => {
  const newCommandLog = ref(Array<LogEntry>())

  function getLog() {
    return newCommandLog
  }
  function addLogEntry(logEntry: LogEntry) {
    newCommandLog.value.push(logEntry)
  }
  return { newCommandLog, getLog, addLogEntry }
})
