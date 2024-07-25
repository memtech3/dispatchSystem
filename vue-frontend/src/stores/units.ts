import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Unit = {
  callsign: string
  unitType: string
  location: string
  status: string
  assignedEvent: string
}

export const useUnitsStore = defineStore('units', () => {
  const count = ref(0)
  const data = ref<Map<number, Unit>>(
    new Map([
      [
        0,
        {
          callsign: '7A-15',
          unitType: 'Police',
          location: 'string',
          status: 'Available',
          assignedEvent: '0'
        }
      ],
      [
        1,
        {
          callsign: 'E-12',
          unitType: 'Fire',
          location: 'string',
          status: 'Available',
          assignedEvent: '0'
        }
      ],
      [
        2,
        {
          callsign: 'ALS-5',
          unitType: 'Medical',
          location: 'string',
          status: 'Available',
          assignedEvent: '0'
        }
      ],
      [
        3,
        {
          callsign: '7A-21',
          unitType: 'Police',
          location: 'string',
          status: 'Available',
          assignedEvent: '0'
        }
      ]
    ])
  )

  function create(unit: Unit) {
    const id: number = count.value
    data.value.set(id, unit)
    count.value++
  }

  function update(id: number, unit: Unit) {
    data.value.set(id, unit)
  }

  function remove(id: number) {
    data.value.delete(id)
    count.value--
  }

  return { count, data, create, update, remove }
})
