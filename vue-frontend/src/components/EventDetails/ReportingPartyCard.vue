<script setup lang="ts">
import type { ReportingParty } from '@/stores/cadEvents'

defineProps<{
  reportingParty: ReportingParty
}>()
</script>
<template>
  <div class="list-group-item list-group-item-action d-flex px-2 py-1 gap-2">
    <div class="w-100">
      <div class="d-flex flex-row align-items-center w-100">
        <span class="fw-bold opacity-50 flex-grow-1"
          >{{ reportingParty.lastName }}, {{ reportingParty.firstName }}
          {{ reportingParty.middleName }}
      </span>
        <span class="fw-bold opacity-50">{{ reportingParty.howReported }}</span>
      </div>
      <p class="mb-0 opacity-75">
        Callback Phone: {{ reportingParty.callbackPhone }} <br />
        From Phone: {{ reportingParty.fromPhone }} <br />
        Location: {{ reportingParty.reportingPartyLocation }}
      </p>
    </div>
  </div>
</template>
