<script setup lang="ts">
import { IxEventList, IxEventListItem } from '@siemens/ix-vue'
import CallsListItem from './CallsListItem.vue'
</script>

<template>
  <IxEventList itemHeight="L">
    <CallsListItem
      callID="12"
      callTypeCode="11-71"
      callTypeDescription="Structure Fire"
      callLocation="1501 Northpoint Ln, College Station"
    />
    <CallsListItem />
    <CallsListItem />
    <CallsListItem />
  </IxEventList>
</template>

<style scoped></style>
