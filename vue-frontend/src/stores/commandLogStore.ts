import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { UnitCommandResult } from '@/composables/newCommands'

export type LogEntry = {
  timestamp: Date
  command: UnitCommandResult
  user: string
}

export const useCommandLog = defineStore('commandLog', () => {
  const commandLog = ref(Array<LogEntry>())

  function getLog() {
    return commandLog
  }
  function addLogEntry(commandResult: UnitCommandResult) {
    commandLog.value.push({
      timestamp: new Date(),
      command: commandResult,
      user: 'mguttman'
    })
  }
  return { commandLog, getLog, addLogEntry }
})
