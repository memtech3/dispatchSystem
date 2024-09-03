import { computed } from 'vue'
import { Command, CommandList } from './commandCore'

import { newEvent, attachUnitToEvent } from '@/composables/commandHandlers'
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
      const eventResult = newEvent(new CadEventEntity({ location: args[0], eventType: args[1] }))
      if (eventResult instanceof Error) {
        return eventResult
      } else {
        attachUnitToEvent(args[0], eventResult.associatedEvents[0])
      }
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
      const result = attachUnitToEvent(args[0], args[1])
      if (result instanceof Error) {
        return
      }
    }
  )
]

export const commandList = new CommandList(commands)
