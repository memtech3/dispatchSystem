<script setup lang="ts">
import { IxEventListItem } from '@siemens/ix-vue'

defineProps<{
  callID: string
  callTypeCode: string
  callTypeDescription: string
  callLocation: string
  callAssignedResources: string // this needs to be an array
}>()
</script>

<template>
  <IxEventListItem color="color-primary">
    {{ callID }} <br />
    {{ callTypeCode }}: {{ callTypeDescription }} <br />
    {{ callLocation }} <br />
    {{ callAssignedResources }}
  </IxEventListItem>
</template>

<style scoped></style>
