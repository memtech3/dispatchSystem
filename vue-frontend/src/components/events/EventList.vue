<script setup lang="ts">
import { ref } from 'vue'
import EventListItem from './EventListItem.vue'
import { gql, useQuery } from '@urql/vue'

const result = useQuery({
  query: gql`
    {
      events {
        id
        location
        priority
        cadLogEntries {
          id
          name
        }
        assignedUnits {
          id
          name
        }
      }
    }
  `
})

const reactiveResult = ref(result)
</script>

<template>
  <ul
    class="pf-v5-c-data-list pf-m-compact"
    role="list"
    aria-label="Simple data list example"
    id="data-list-static-bottom-example-data-list"
  >
    <div v-if="reactiveResult.fetching">Loading...</div>
    <div v-else-if="reactiveResult.error">Oh no... {{ reactiveResult.error }}</div>
    <div v-else>
      <ul v-if="reactiveResult.data.events">
        <li
          v-for="event in reactiveResult.data.events"
          :key="event.id"
          class="pf-v5-c-data-list__item"
        >
          <EventListItem
            :event-ID="event.id"
            :event-priority="event.priority"
            event-priority-clr="green"
            event-type-code="2319"
            event-type-description="Human Contamination"
            event-type-icon="bi bi-virus"
            :event-location="event.location"
            event-assigned-resources="P135, PS34, H43, H44"
            event-created-time="test"
          />
        </li>
      </ul>
    </div>
    <!--
    <EventListItem
      event-ID="H345"
      event-priority="1"
      event-priority-clr="green"
      event-type-code="2319"
      event-type-description="Human Contamination"
      event-type-icon="bi bi-virus"
      event-location="Scare Floor Sector 7G"
      event-assigned-resources="P135, PS34, H43, H44"
    /> -->
  </ul>
</template>
