<script setup lang="ts">
import EventListItem from './EventListItem.vue'

import { useCadEventsStore} from '@/stores/cadEvents'

const cadEventsStore = useCadEventsStore()
</script>

<template>
  <div class="list-group">
    <EventListItem
      v-for="[cadEventId, cadEvent] in cadEventsStore.data"
      :key="cadEventId"
      :id="cadEventId.toString()"
      :priority="5"
      priority-clr="green"
      type-code="2319"
      :type-description="cadEvent.eventType"
      type-icon="bi bi-virus"
      :location="cadEvent.location"
      assigned-resources="P135, PS34, H43, H44"
      created-time="11:11 PM"
    />
  </div>
</template>
