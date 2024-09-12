import { computed } from 'vue'
import { CommandBarCmd, CommandList } from './commandBarCore'

import { useConsoleStateStore } from '@/stores/consoleState'

import { useRepo } from 'pinia-orm'
import { UnitEntity } from '@/stores/units'

import {
  InServiceCmd,
  DispatchCmd,
  AknowledgeCmd,
  EnRouteCmd,
  ArriveCmd,
  ClearCmd,
  FreeCmd,
  LogCmd,
  OutOfServiceCmd,
  MiscCmd
} from '@/composables/commands'
import type { UnitCommand, UnitEventCommand } from '@/composables/commands'

const consoleStateStore = computed(() => {
  return useConsoleStateStore()
})

const unitsRepo = computed(() => {
  return useRepo(UnitEntity)
})

function getUnitIdByCallsign(callsign: string): string {
  const unit = unitsRepo.value.all().find((unit) => unit.callsign === callsign)
  return unit ? unit.id : ''
}

function makeUnitCommand<commandClass extends UnitCommand>(
  name: string,
  aliases: string[],
  commandClass: new (unitId: string, comment?: string) => commandClass
): CommandBarCmd {
  return {
    name: name,
    aliases: aliases,
    argTypes: [
      { name: 'Unit', required: true },
      { name: 'Comment', required: false }
    ],
    mapArgsToCommand: (args: string[]) => {
      return new commandClass(getUnitIdByCallsign(args[0]), args[1])
    }
  }
}

function makeUnitEventCommand<commandClass extends UnitEventCommand>(
  name: string,
  aliases: string[],
  commandClass: new (unitId: string, eventId: string, comment?: string) => commandClass
): CommandBarCmd {
  return {
    name: name,
    aliases: aliases,
    argTypes: [
      { name: 'Unit', required: true },
      { name: 'Event', required: true },
      { name: 'Comment', required: false }
    ],
    mapArgsToCommand: (args: string[]) => {
      return new commandClass(getUnitIdByCallsign(args[0]), args[1], args[2])
    }
  }
}

const commandBarCmds: CommandBarCmd[] = [
  makeUnitCommand('In Service Unit', ['is', 'inservice'], InServiceCmd),
  makeUnitEventCommand('Dispatch Unit', ['du', 'dispatch'], DispatchCmd),
  makeUnitEventCommand('Acknowledge Unit', ['ak', 'acknowledge'], AknowledgeCmd),
  makeUnitEventCommand('En Route Unit', ['er', 'enroute'], EnRouteCmd),
  makeUnitEventCommand('Arrive Unit', ['ar', 'arrive'], ArriveCmd),
  makeUnitEventCommand('Clear Unit', ['cl', 'clear'], ClearCmd),
  makeUnitCommand('Free Unit', ['fr', 'free'], FreeCmd),
  {
    name: 'Log',
    aliases: ['l', 'log'],
    argTypes: [
      { name: 'Comment', required: true },
      { name: 'Unit', required: false },
      { name: 'Event', required: false }
    ],
    mapArgsToCommand: (args: string[]) => {
      return new LogCmd(args[0], getUnitIdByCallsign(args[1]), args[2])
    }
  },
  makeUnitCommand('Out of Service Unit', ['os', 'outofservice'], OutOfServiceCmd),
  makeUnitEventCommand('Misc Unit', ['mi', 'misc'], MiscCmd)
]

export const commandList = new CommandList(commandBarCmds)
