import { computed } from 'vue'

import { useRepo } from 'pinia-orm'
import { UnitEntity } from '@/stores/units'
import { CadEventEntity } from '@/stores/cadEvents'

type CommandHandlerResult =
  | {
      associatedUnits: Array<string>
      associatedEvents: Array<string>
    }
  | Error

const unitsRepo = computed(() => {
  return useRepo(UnitEntity)
})

const cadEventsRepo = computed(() => {
  return useRepo(CadEventEntity)
})

function withLogging<T extends (...args: any[]) => any>(action: string, funcToWrap: T): T {
  const newFunc = function (...args: Parameters<T>): ReturnType<T> {
    const result = funcToWrap(...args)

    return result
  } as T

  return newFunc
}

/**
 * set a unit's assigned event
 * @param unitCallsign
 * @param eventId
 *
 */
export const attachUnitToEvent = withLogging(
  'attachUnitToEvent',
  (unitCallsign: string, eventId: string): CommandHandlerResult => {
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
    } else if (unit?.assignedEvent ?? false) {
      return Error('Unit with callsign ' + unitCallsign + ' is already attached to an event')
    } else {
      unit.assignedEventId = event.id
      unitsRepo.value.save(unit)
      return { associatedEvents: [eventId], associatedUnits: [unitCallsign] }
    }
  }
)

/**
 * clear a unit from its assigned event
 * @param unitCallsign
 * @param eventId
 *
 */
export const clearUnitFromEvent = withLogging(
  'clearUnitFromEvent',
  (unitCallsign: string, eventId: string): CommandHandlerResult => {
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
      return { associatedEvents: [eventId], associatedUnits: [unitCallsign] }
    }
  }
)

export const newEvent = withLogging(
  'newEvent',
  (cadEvent: CadEventEntity): CommandHandlerResult => {
    const result = cadEventsRepo.value.save(cadEvent)
    return { associatedEvents: [result.id], associatedUnits: [] }
  }
)

export const newUnit = withLogging('newUnit', (unit: UnitEntity): CommandHandlerResult => {
  const result = unitsRepo.value.save(unit)
  return { associatedEvents: [], associatedUnits: [result.callsign] }
})
