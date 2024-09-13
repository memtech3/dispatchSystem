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

export type CommandLogInfo = {
  associatedUnits?: string[]
  associatedEvents?: string[]
  logString: string
  comment?: string
}

export abstract class Command {
  abstract commandName: string
  abstract run(): void
  abstract getLogInfo(): CommandLogInfo
}

export abstract class UnitCommand implements Command {
  abstract commandName: string
  constructor(
    public unitId: string,
    public comment?: string
  ) {}
  abstract run(): void
  getLogInfo(): CommandLogInfo {
    return {
      associatedUnits: [this.unitId],
      logString: this.commandName,
      comment: this.comment
    }
  }
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
  abstract run(): void
  getLogInfo(): CommandLogInfo {
    return {
      associatedUnits: [this.unitId],
      associatedEvents: [this.eventId],
      logString: this.commandName,
      comment: this.comment
    }
  }
}

export function invokeCommand(cmd: Command) {
  cmd.run()
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
  }
}

export class LogCmd extends Command {
  commandName = 'Log'
  constructor(
    private comment: string,
    private unitId?: string,
    private eventId?: string
  ) {
    super()
  }

  run() {
    // Do nothing
  }

  getLogInfo(): CommandLogInfo {
    return {
      associatedUnits: this.unitId ? [this.unitId] : undefined,
      associatedEvents: this.eventId ? [this.eventId] : undefined,
      logString: this.commandName,
      comment: this.comment
    }
  }
}
