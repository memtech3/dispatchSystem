import { ref } from 'vue'
import { defineStore } from 'pinia'

export class CommandOutputEntry {
  input: string
  type: string
  output: string
  constructor(input: string, type: string, output: string) {
    this.input = input
    this.type = type
    this.output = output
  }
}

export const useConsoleStateStore = defineStore('consoleState', () => {
  const selectedEvent = ref('')
  const commandOutput = ref(Array<CommandOutputEntry>())

  function getSelectedEvent() {
    return selectedEvent.value
  }
  function setSelectedEvent(cadEventId: string) {
    selectedEvent.value = cadEventId
  }
  function addCommandOutput(input: string, type: string, output: string) {
    commandOutput.value.push(new CommandOutputEntry(input, type, output))
  }
  return { selectedEvent, getSelectedEvent, setSelectedEvent, commandOutput, addCommandOutput }
})
