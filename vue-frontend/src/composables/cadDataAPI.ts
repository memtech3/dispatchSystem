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
 * update a unit's assigned event and add the unit to the event's assignedUnits list
 * @param unitCallsign
 * @param eventId
 *
 */
export function attachUnitToEvent(unitCallsign: string, eventId: string): void {
  const unit = unitsRepo.value.where('callsign', unitCallsign).first()
  const event = cadEventsRepo.value.where('id', eventId).first()
  if (unit && event && !unit.assignedEvent) {
    unit.assignedEventId = event.id
    unitsRepo.value.save(unit)
  } else {
    console.log('attach unit ', unit, ' failed')
    if (!unit) {
      console.error('Unit with callsign ' + unitCallsign + ' not found')
    }
    if (!event) {
      console.error('Event with ID ' + eventId + ' not found', unitCallsign, eventId)
    }
    if (unit?.assignedEvent ?? false) {
      console.error(
        'Unit with callsign ' + unitCallsign + ' is already attached to an event',
        unitCallsign,
        eventId
      )
    }
    // TODO: better error handling
  }
}

/**
 * clear a unit's assigned event and remove the unit from the event's assignedUnits list
 * @param unitCallsign
 * @param eventId
 *
 */
export function clearUnitFromEvent(unitCallsign: string, eventId: string): void {
  const unit = unitsRepo.value.where('callsign', unitCallsign).first()
  const event = cadEventsRepo.value.where('id', eventId).first()
  if (unit && event && unit.assignedEvent == event) {
    unit.assignedEventId = event.id
    unitsRepo.value.save(unit)
  } else {
    console.log('attach unit ', unit, ' failed')
    if (!unit) {
      console.error('Unit with callsign ' + unitCallsign + ' not found')
    }
    if (!event) {
      console.error('Event with ID ' + eventId + ' not found', unitCallsign, eventId)
    }
    if (unit?.assignedEvent != event) {
      console.error(
        'Unit with callsign ' + unitCallsign + ' is not already attached to that event',
        unitCallsign,
        eventId
      )
    }
    // TODO: better error handling
  }
}

export function newEvent(location: string, eventType: string): CadEventEntity {
  return cadEventsRepo.value.save({ location, eventType })
}

export function newUnit(callsign: string): UnitEntity {
  return unitsRepo.value.save({ callsign })
}
