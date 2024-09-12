import { computed } from 'vue'

import { useRepo } from 'pinia-orm'
import { UnitEntity } from '@/stores/units'
import { CadEventEntity } from '@/stores/cadEvents'

import { useCommandLog } from '@/stores/commandLogStore'

const commandLog = computed(() => {
  return useCommandLog()
})

const unitsRepo = computed(() => {
  return useRepo(UnitEntity)
})

const cadEventsRepo = computed(() => {
  return useRepo(CadEventEntity)
})

export type UnitCommandResult = {
  associatedUnits?: string[]
  associatedEvent?: string
  unitNewStatus?: string
  comment?: string
}

export abstract class Command {
  abstract commandName: string
  abstract run(): UnitCommandResult
}

export abstract class UnitCommand implements Command {
  abstract commandName: string
  constructor(
    public unitId: string,
    public comment?: string
  ) {}
  abstract run(): UnitCommandResult
}

export abstract class UnitEventCommand extends UnitCommand {
  abstract commandName: string
  constructor(
    public unitId: string,
    public eventId: string,
    public comment?: string
  ) {
    super(unitId, comment)
  }
  abstract run(): UnitCommandResult
}

export function invokeCommand(cmd: Command) {
  const result = cmd.run()
  console.log(result)
  commandLog.value.addLogEntry(cmd)
}

export class InServiceCmd extends UnitCommand {
  commandName = 'InService'
  run() {
    const unit = unitsRepo.value.find(this.unitId)
    if (unit) {
      unit.status = 'Available'
      unitsRepo.value.update(unit)
    }
    return { associatedUnits: [this.unitId], unitNewStatus: 'Available', comment: this.comment }
  }
}

export class DispatchCmd extends UnitEventCommand {
  commandName = 'Dispatch'
  run() {
    const unit = unitsRepo.value.find(this.unitId)
    if (unit) {
      unit.status = 'Dispatched'
      unit.assignedEventId = this.eventId
      unitsRepo.value.update(unit)
    }
    return {
      associatedUnits: [this.unitId],
      associatedEvent: this.eventId,
      unitNewStatus: 'Dispatched',
      comment: this.comment
    }
  }
}

export class AknowledgeCmd extends UnitEventCommand {
  commandName = 'Aknowledge'
  run() {
    const unit = unitsRepo.value.find(this.unitId)
    if (unit) {
      unit.status = 'Aknowledged'
      unitsRepo.value.update(unit)
    }
    return {
      associatedUnits: [this.unitId],
      associatedEvent: this.eventId,
      unitNewStatus: 'Aknowledged',
      comment: this.comment
    }
  }
}

export class EnRouteCmd extends UnitEventCommand {
  commandName = 'EnRoute'
  run() {
    const unit = unitsRepo.value.find(this.unitId)
    if (unit) {
      unit.status = 'EnRoute'
      unitsRepo.value.update(unit)
    }
    return {
      associatedUnits: [this.unitId],
      associatedEvent: this.eventId,
      unitNewStatus: 'EnRoute',
      comment: this.comment
    }
  }
}
export class ArriveCmd extends UnitEventCommand {
  commandName = 'Arrive'
  run() {
    const unit = unitsRepo.value.find(this.unitId)
    if (unit) {
      unit.status = 'Arrived'
      unitsRepo.value.update(unit)
    }
    return {
      associatedUnits: [this.unitId],
      associatedEvent: this.eventId,
      unitNewStatus: 'Arrived',
      comment: this.comment
    }
  }
}

export class FreeCmd extends UnitCommand {
  commandName = 'Free'
  run() {
    const unit = unitsRepo.value.find(this.unitId)
    if (unit) {
      unit.status = 'Available'
      unit.assignedEvent = null
      unitsRepo.value.update(unit)
    }
    return {
      associatedUnits: [this.unitId],
      unitNewStatus: 'Freed',
      comment: this.comment
    }
  }
}

export class ClearCmd extends UnitEventCommand {
  commandName = 'Clear'
  run() {
    const unit = unitsRepo.value.find(this.unitId)
    if (unit) {
      unit.status = 'Available'
      unit.assignedEvent = null
      unitsRepo.value.update(unit)
    }
    return {
      associatedUnits: [this.unitId],
      associatedEvent: this.eventId,
      unitNewStatus: 'Cleared',
      comment: this.comment
    }
  }
}

export class MiscCmd extends UnitEventCommand {
  commandName = 'Misc'
  run() {
    const unit = unitsRepo.value.find(this.unitId)
    if (unit) {
      unit.status = 'Misc'
      unitsRepo.value.update(unit)
    }
    return {
      associatedUnits: [this.unitId],
      associatedEvent: this.eventId,
      unitNewStatus: 'Misc',
      comment: this.comment
    }
  }
}

export class OutOfServiceCmd extends UnitCommand {
  commandName = 'OutOfService'
  run() {
    const unit = unitsRepo.value.find(this.unitId)
    if (unit) {
      unit.status = 'Out of Service'
      unitsRepo.value.update(unit)
    }
    return {
      associatedUnits: [this.unitId],
      unitNewStatus: 'Out of Service',
      comment: this.comment
    }
  }
}

export class LogCmd extends Command {
  commandName = 'Log'
  constructor(
    private comment: string,
    private unitId: string,
    private eventId?: string
  ) {
    super()
  }

  run() {
    return {
      associatedUnits: [this.unitId],
      associatedEvent: this.eventId,
      comment: this.comment
    }
  }
}
