import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useConsoleStateStore = defineStore('consoleState', () => {
  const selectedEvent = ref('')

  function getSelectedEvent() {
    return selectedEvent.value
  }
  function setSelectedEvent(cadEventId: string) {
    selectedEvent.value = cadEventId
  }

  return { getSelectedEvent, setSelectedEvent }
})
