import { defineStore } from 'pinia'
import { ref } from 'vue'

export type CadEvent = {
  eventType: string
  location: string
  narrative: string
  reportingParty: string
}

export const useCadEventsStore = defineStore('cadEvents', () => {
  const count = ref(0)
  const data = ref<Map<number, CadEvent>>(
    new Map([
      [
        0,
        {
          eventType: 'Fire',
          location: '123 Main St',
          narrative: 'Fire in the kitchen',
          reportingParty: 'Joe'
        }
      ],
      [
        1,
        {
          eventType: 'Medical',
          location: '456 Elm St',
          narrative: 'Person with chest pain',
          reportingParty: 'Jane'
        }
      ],
      [
        2,
        {
          eventType: 'Fire',
          location: '789 Oak St',
          narrative: 'Fire in the living room',
          reportingParty: 'Jim'
        }
      ],
      [
        3,
        {
          eventType: 'Medical',
          location: '101 Pine St',
          narrative: 'Person with shortness of breath',
          reportingParty: 'Jill'
        }
      ]
    ])
  )

  function create(cadEvent: CadEvent) {
    const id: number = count.value
    data.value.set(id, cadEvent)
    count.value++
  }

  function update(id: number, cadEvent: CadEvent) {
    data.value.set(id, cadEvent)
  }

  function remove(id: number) {
    data.value.delete(id)
    count.value--
  }

  return { count, data, create, update, remove }
})
