import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Command } from '@/composables/commands'

export type LogEntry = {
  timestamp: Date
  command: Command
  user: string
}

export const useCommandLog = defineStore('commandLog', () => {
  const commandLog = ref(Array<LogEntry>())

  function getLog() {
    return commandLog
  }
  function addLogEntry(cmd: Command) {
    commandLog.value.push({
      timestamp: new Date(),
      command: cmd,
      user: 'mguttman'
    })
  }
  return { commandLog, getLog, addLogEntry }
})
