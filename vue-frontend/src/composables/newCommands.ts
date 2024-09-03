import { computed } from 'vue'

import { useRepo } from 'pinia-orm'
import { UnitEntity } from '@/stores/units'
import { CadEventEntity } from '@/stores/cadEvents'

import { useCommandLog } from '@/stores/commandLogStore'
import type { LogEntry } from '@/stores/commandLogStore'

const commandLog = computed(() => {
  return useCommandLog()
})

const unitsRepo = computed(() => {
  return useRepo(UnitEntity)
})

const cadEventsRepo = computed(() => {
  return useRepo(CadEventEntity)
})

type UnitCommandResult = {
  associatedUnits?: string[]
  associatedEvent?: string
  unitNewStatus?: string
  comment?: string
}

export interface Command {
  run(): UnitCommandResult
}

function invokeCommand(cmd: Command) {
  const result = cmd.run()
  console.log(result)
}

class InServiceCmd implements Command {
  constructor(
    private unitId: string,
    private comment?: string
  ) {}

  run() {
    const unit = unitsRepo.value.find(this.unitId)
    if (unit) {
      unit.status = 'Available'
      unitsRepo.value.update(unit)
    }
    return { associatedUnits: [this.unitId], unitNewStatus: 'Available', comment: this.comment }
  }
}

class DispatchCmd implements Command {
  constructor(
    private unitId: string,
    private eventId: string,
    private comment?: string
  ) {}

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

class AknowledgeCmd implements Command {
  constructor(
    private unitId: string,
    private eventId?: string,
    private comment?: string
  ) {}

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

class EnRouteCmd implements Command {
  constructor(
    private unitId: string,
    private eventId?: string,
    private comment?: string
  ) {}

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
class ArriveCmd implements Command {
  constructor(
    private unitId: string,
    private eventId?: string,
    private comment?: string
  ) {}

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

class FreeCmd implements Command {
  constructor(
    private unitId: string,
    private comment?: string
  ) {}

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

class ClearCmd implements Command {
  constructor(
    private unitId: string,
    private eventId?: string,
    private comment?: string
  ) {}

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

class LogCmd implements Command {
  constructor(
    private comment: string,
    private unitId: string,
    private eventId?: string
  ) {}

  run() {
    return {
      associatedUnits: [this.unitId],
      associatedEvent: this.eventId,
      comment: this.comment
    }
  }
}
class MiscCmd implements Command {
  constructor(
    private unitId: string,
    private eventId?: string,
    private comment?: string
  ) {}

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

class OutOfServiceCmd implements Command {
  constructor(
    private unitId: string,
    private comment?: string
  ) {}

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
