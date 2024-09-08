import { computed } from 'vue'
import { CommandBarCmd, CommandList } from './commandBarCore'

import { newEvent, attachUnitToEvent } from '@/composables/commandHandlers'
import { useConsoleStateStore } from '@/stores/consoleState'
import { CadEventEntity } from '@/stores/cadEvents'

const consoleStateStore = computed(() => {
  return useConsoleStateStore()
})

const commands: CommandBarCmd[] = [
  {
    name: 'New Event',
    aliases: ['ne', 'newevent'],
    argTypes: [
      { name: 'Location', required: true },
      { name: 'type', required: true }
    ],
    execute: (args: string[]) => {
      newEvent(new CadEventEntity({ location: args[0], eventType: args[1] }))
    }
  },
  {
    name: 'Select Event',
    aliases: ['se', 'selectevent'],
    argTypes: [{ name: 'Event ID', required: true }],
    execute: (args: string[]) => {
      consoleStateStore.value.setSelectedEvent(args[0])
    }
  },
  {
    name: 'New Field Initiated Event',
    aliases: ['nfe', 'newfieldevent'],
    argTypes: [
      { name: 'Unit', required: true },
      { name: 'Location', required: true },
      { name: 'type', required: true }
    ],
    execute: (args: string[]) => {
      const eventResult = newEvent(new CadEventEntity({ location: args[0], eventType: args[1] }))
      if (eventResult instanceof Error) {
        return
      } else {
        attachUnitToEvent(args[0], eventResult.associatedEvents[0])
      }
    }
  },
  {
    name: 'Attach Unit to Event',
    aliases: ['au', 'attachunit'],
    argTypes: [
      { name: 'Unit Callsign', required: true },
      { name: 'Event ID', required: true }
    ],
    execute: (args: string[]) => {
      const result = attachUnitToEvent(args[0], args[1])
      if (result instanceof Error) {
        return
      }
    }
  }
]

export const commandList = new CommandList(commands)
