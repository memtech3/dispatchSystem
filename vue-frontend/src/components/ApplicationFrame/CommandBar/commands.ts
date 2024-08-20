import { computed } from 'vue'
import { Command, CommandList } from './commandCore'

import { newEvent, attachUnitToEvent } from '@/composables/cadDataAPI'
import { useConsoleStateStore } from '@/stores/consoleState'

const consoleStateStore = computed(() => {
  return useConsoleStateStore()
})

const commands: Command[] = [
  new Command(
    'New Event',
    ['ne', 'newevent'],
    [
      {
        name: 'Location',
        required: true
      },
      {
        name: 'type',
        required: true
      }
    ],
    (args: string[]) => {
      newEvent(args[0], args[1])
      return true
    }
  ),
  new Command(
    'Select Event',
    ['se', 'selectevent'],
    [{ name: 'Event ID', required: true }],
    (args: string[]) => {
      consoleStateStore.value.setSelectedEvent(args[0])
      return true
    }
  ),
  new Command(
    'New Field Initiated Event',
    ['nfe', 'newfieldevent'],
    [
      {
        name: 'Unit',
        required: true
      },
      {
        name: 'Location',
        required: true
      },
      {
        name: 'type',
        required: true
      }
    ],
    (args: string[]) => {
      const event = newEvent(args[1], args[2])
      attachUnitToEvent(args[0], event.id)
      return true
    }
  ),
  new Command(
    'Attach Unit to Event',
    ['au', 'attachunit'],
    [
      {
        name: 'Unit Callsign',
        required: true
      },
      {
        name: 'Event ID',
        required: true
      }
    ],
    (args: string[]) => {
      attachUnitToEvent(args[0], args[1])
      return true
    }
  )
]

export const commandList = new CommandList(commands)
