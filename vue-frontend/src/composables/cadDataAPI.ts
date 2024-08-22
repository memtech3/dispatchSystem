import { computed } from 'vue'

import { useRepo } from 'pinia-orm'
import { UnitEntity } from '@/stores/units'
import { CadEventEntity } from '@/stores/cadEvents'

import { useActivityLog } from '@/stores/activityLogStore'
import type { LogEntry } from '@/stores/activityLogStore'

const activityLog = computed(() => {
  return useActivityLog()
})

const unitsRepo = computed(() => {
  return useRepo(UnitEntity)
})

const cadEventsRepo = computed(() => {
  return useRepo(CadEventEntity)
})

/**
 * set a unit's assigned event
 * @param unitCallsign
 * @param eventId
 *
 */
export function attachUnitToEvent(unitCallsign: string, eventId: string): void | Error {
  const unit = unitsRepo.value.where('callsign', unitCallsign).first()
  const event = cadEventsRepo.value.where('id', eventId).first()
  const logEntry: LogEntry = {
    timestamp: 'test',
    sector: 5,
    action: 'attachUnitToEvent',
    actionParameters: [unitCallsign, eventId],
    user: 'mguttman',
    associatedEvents: [],
    associatedUnits: [unitCallsign, eventId],
    result: true
  }

  let result: Error | boolean = true

  if (!unit && !event) {
    result = Error(
      'Unit with callsign ' + unitCallsign + ' and Event with ID ' + eventId + ' not found'
    )
    return result
  } else if (!unit) {
    result = Error('Unit with callsign ' + unitCallsign + ' not found')
    return result
  } else if (!event) {
    result = Error('Event with ID ' + eventId + ' not found')
    return result
  } else if (unit?.assignedEvent ?? false) {
    result = Error('Unit with callsign ' + unitCallsign + ' is already attached to an event')
    return result
  } else {
    unit.assignedEventId = event.id
    unitsRepo.value.save(unit)
    logEntry.result = result
    activityLog.value.addLogEntry(logEntry)
  }
}

/**
 * clear a unit from its assigned event
 * @param unitCallsign
 * @param eventId
 *
 */
export function clearUnitFromEvent(unitCallsign: string, eventId: string): void | Error {
  const unit = unitsRepo.value.where('callsign', unitCallsign).first()
  const event = cadEventsRepo.value.where('id', eventId).first()

  if (!unit && !event) {
    return Error(
      'Unit with callsign ' + unitCallsign + ' and Event with ID ' + eventId + ' not found'
    )
  } else if (!unit) {
    return Error('Unit with callsign ' + unitCallsign + ' not found')
  } else if (!event) {
    return Error('Event with ID ' + eventId + ' not found')
  } else if (unit?.assignedEvent != event) {
    return Error('Unit with callsign ' + unitCallsign + ' is not attached to that event')
  } else {
    unit.assignedEventId = event.id
    unitsRepo.value.save(unit)
  }
}

export function newEvent(cadEvent: CadEventEntity): CadEventEntity {
  return cadEventsRepo.value.save(cadEvent)
}

export function newUnit(unit: UnitEntity): UnitEntity {
  return unitsRepo.value.save(unit)
}
