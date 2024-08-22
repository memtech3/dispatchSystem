<script setup lang="ts">
import { useActivityLog } from '@/stores/activityLogStore'

const activityLog = useActivityLog()
</script>
<template>
  <p v-for="activity in activityLog.getLog().value" v-bind:key="activity.timestamp">
    {{ activity }}
  </p>
</template>
