import { computed } from 'vue'

import { useRepo } from 'pinia-orm'
import { UnitEntity } from '@/stores/units'
import { CadEventEntity } from '@/stores/cadEvents'

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

export function newEvent(location: string, eventType: string): CadEventEntity {
  return cadEventsRepo.value.save({ location, eventType })
}

export function newUnit(callsign: string): UnitEntity {
  return unitsRepo.value.save({ callsign })
}
