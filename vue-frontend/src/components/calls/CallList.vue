<script setup lang="ts">
import CallListItem from './CallListItem.vue'
</script>

<template>
  <div>
    <div class="text-md text-gray-900 dark:text-white ms-2 mb-2">
      <h3 class="font-semibold">Pending (5)</h3>
    </div>
    <ul class="space-y-2 text-sm font-medium text-gray-900 dark:text-white">
      <li>
        <CallListItem
          call-id="H345"
          call-priority="1"
          call-priority-clr="priorityColor-green"
          call-type-code="2319"
          call-type-description="Human Contamination"
          call-type-icon="bi bi-virus"
          call-location="Scare Floor Sector 7G"
          call-assigned-resources="P135, PS34, H43, H44"
        />
      </li>
      <li>
        <CallListItem
          call-id="H345"
          call-priority="1"
          call-priority-clr="priorityColor-green"
          call-type-code="2319"
          call-type-description="Human Contamination"
          call-type-icon="bi bi-virus"
          call-location="Scare Floor Sector 7G"
          call-assigned-resources="P135, PS34, H43, H44"
        />
      </li>
      <li>
        <CallListItem
          call-id="H345"
          call-priority="1"
          call-priority-clr="priorityColor-green"
          call-type-code="2319"
          call-type-description="Human Contamination"
          call-type-icon="bi bi-virus"
          call-location="Scare Floor Sector 7G"
          call-assigned-resources="P135, PS34, H43, H44"
        />
      </li>
      <li>
        <CallListItem
          call-id="H345"
          call-priority="1"
          call-priority-clr="priorityColor-green"
          call-type-code="2319"
          call-type-description="Human Contamination"
          call-type-icon="bi bi-virus"
          call-location="Scare Floor Sector 7G"
          call-assigned-resources="P135, PS34, H43, H44"
        />
      </li>
      <li>
        <CallListItem
          call-id="H345"
          call-priority="1"
          call-priority-clr="priorityColor-green"
          call-type-code="2319"
          call-type-description="Human Contamination"
          call-type-icon="bi bi-virus"
          call-location="Scare Floor Sector 7G"
          call-assigned-resources="P135, PS34, H43, H44"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
