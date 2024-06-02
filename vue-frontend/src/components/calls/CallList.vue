<script setup lang="ts">
import { ref } from 'vue'
import CallListItem from './CallListItem.vue'
import { gql, useQuery } from '@urql/vue'

const result = useQuery({
  query: gql`
    {
      events {
        id
        location
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
          <CallListItem
            :call-ID="event.id"
            call-priority="1"
            call-priority-clr="green"
            call-type-code="2319"
            call-type-description=""
            call-type-icon="bi bi-virus"
            :call-location="event.location"
            call-assigned-resources="P135, PS34, H43, H44"
          />
        </li>
      </ul>
    </div>
    <!--
    <CallListItem
      call-ID="H345"
      call-priority="1"
      call-priority-clr="green"
      call-type-code="2319"
      call-type-description="Human Contamination"
      call-type-icon="bi bi-virus"
      call-location="Scare Floor Sector 7G"
      call-assigned-resources="P135, PS34, H43, H44"
    /> -->
  </ul>
</template>
