import type { ComputedRef } from 'vue'
import { Command, CommandList } from './commandCore'
import type { Repository } from 'pinia-orm'
import type { UnitEntity } from '@/stores/units'
import type { CadEventEntity } from '@/stores/cadEvents'


const commands: Command[] = [
  new Command(
    'New Event',
    ['ne', 'newevent'],
    [
      {
        name: 'Location',
        description: 'Location of event',
        required: true
      },
      {
        name: 'type',
        description: 'Event type',
        required: true
      }
    ],
    (
      args: string[],
      consoleStateStore: any,
      unitEntityStore: ComputedRef<Repository<UnitEntity>>,
      cadEventEntityStore: ComputedRef<Repository<CadEventEntity>>
    ) => {
      cadEventEntityStore.value.save({ location: args[0], eventType: args[1] })
      return true
    }
  ),
  new Command(
    'Select Event',
    ['se', 'selectevent'],
    [{ name: 'Event ID', description: 'ID of event to select', required: true }],
    (
      args: string[],
      consoleStateStore: any,
      _unitEntityStore: ComputedRef<Repository<UnitEntity>>,
      _cadEventEntityStore: ComputedRef<Repository<CadEventEntity>>
    ) => consoleStateStore.setSelectedEvent(args[0])
  ),
  new Command(
    'New Field Initiated Event',
    ['nfe', 'newfieldevent'],
    [
      {
        name: 'Unit',
        description: 'Unit initiating field initiated event',
        required: true
      },
      {
        name: 'Location',
        description: 'Location of event',
        required: true
      },
      {
        name: 'type',
        description: 'Event type',
        required: true
      }
    ],
    (
      args: string[],
      consoleStateStore: any,
      unitEntityStore: ComputedRef<Repository<UnitEntity>>,
      cadEventEntityStore: ComputedRef<Repository<CadEventEntity>>
    ) => {
      const unit = unitEntityStore.value.where('callsign', args[0]).withAll().first()
      if (unit) {
        const event = cadEventEntityStore.value.save({ location: args[1], eventType: args[2] })
        unit.assignedEventId = event.id
        unitEntityStore.value.save(unit)
        return true
      } else {
        return new Error('Unit not found')
      }
    }
  )
]

export const commandList = new CommandList(commands)
