<script setup lang="ts">
import type { ReportingParty } from '@/stores/cadEvents'
import ReportingPartyCard from './ReportingPartyCard.vue'

defineProps<{
  reprotingParties: ReportingParty[]
}>()
</script>
<template>
  <div class="row g-3">
    <ul class="list-group p-2">
      <li v-for="reportingParty in reprotingParties" v-bind:key="String(reportingParty)">
        <ReportingPartyCard :reporting-party="reportingParty" />
      </li>
    </ul>
  </div>
</template>
