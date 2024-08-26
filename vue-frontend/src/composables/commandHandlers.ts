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
    associatedEvents: [eventId],
    associatedUnits: [unitCallsign],
    result: true
  }

  let result: Error | boolean

  if (!unit && !event) {
    result = Error(
      'Unit with callsign ' + unitCallsign + ' and Event with ID ' + eventId + ' not found'
    )
  } else if (!unit) {
    result = Error('Unit with callsign ' + unitCallsign + ' not found')
  } else if (!event) {
    result = Error('Event with ID ' + eventId + ' not found')
  } else if (unit?.assignedEvent ?? false) {
    result = Error('Unit with callsign ' + unitCallsign + ' is already attached to an event')
  } else {
    unit.assignedEventId = event.id
    unitsRepo.value.save(unit)
    result = true
  }
  logEntry.result = result
  commandLog.value.addLogEntry(logEntry)
  if (result instanceof Error) {
    return result
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
  const logEntry: LogEntry = {
    timestamp: 'test',
    sector: 5,
    action: 'clearUnitFromEvent',
    actionParameters: [unitCallsign, eventId],
    user: 'mguttman',
    associatedEvents: [eventId],
    associatedUnits: [unitCallsign],
    result: true
  }

  let result: Error | boolean

  if (!unit && !event) {
    return Error(
      'Unit with callsign ' + unitCallsign + ' and Event with ID ' + eventId + ' not found'
    )
  } else if (!unit) {
    result = Error('Unit with callsign ' + unitCallsign + ' not found')
  } else if (!event) {
    result = Error('Event with ID ' + eventId + ' not found')
  } else if (unit?.assignedEvent != event) {
    result = Error('Unit with callsign ' + unitCallsign + ' is not attached to that event')
  } else {
    unit.assignedEventId = event.id
    unitsRepo.value.save(unit)
    result = true
  }
  logEntry.result = result
  commandLog.value.addLogEntry(logEntry)
  if (result instanceof Error) {
    return result
  }
}

export function newEvent(cadEvent: CadEventEntity): CadEventEntity {
  const logEntry: LogEntry = {
    timestamp: 'test',
    sector: 5,
    action: 'newEvent',
    actionParameters: [JSON.stringify(cadEvent)],
    user: 'mguttman',
    associatedEvents: [],
    associatedUnits: [],
    result: true
  }

  logEntry.result = true
  const result = cadEventsRepo.value.save(cadEvent)
  logEntry.associatedEvents.push(result.id)
  commandLog.value.addLogEntry(logEntry)
  return result
}

export function newUnit(unit: UnitEntity): UnitEntity {
  const logEntry: LogEntry = {
    timestamp: 'test',
    sector: 5,
    action: 'newUnit',
    actionParameters: [JSON.stringify(unit)],
    user: 'mguttman',
    associatedEvents: [],
    associatedUnits: [],
    result: true
  }

  logEntry.result = true
  const result = unitsRepo.value.save(unit)
  logEntry.associatedUnits.push(result.id)
  commandLog.value.addLogEntry(logEntry)
  return result
}
