import { computed } from 'vue'
import { Command, CommandList } from './commandCore'

import { newEvent, attachUnitToEvent } from '@/composables/cadDataAPI'
import { useConsoleStateStore } from '@/stores/consoleState'
import { CadEventEntity } from '@/stores/cadEvents'

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
      const result = newEvent(new CadEventEntity({ location: args[0], eventType: args[1] }))
      if (result instanceof Error) {
        return result
      } else {
        return
      }
    }
  ),
  new Command(
    'Select Event',
    ['se', 'selectevent'],
    [{ name: 'Event ID', required: true }],
    (args: string[]) => {
      return consoleStateStore.value.setSelectedEvent(args[0])
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
      return attachUnitToEvent(args[0], event.id)
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
      return attachUnitToEvent(args[0], args[1])
    }
  )
]

export const commandList = new CommandList(commands)
