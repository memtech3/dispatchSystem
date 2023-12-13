<script setup lang="ts">
import { IxEventList, IxEventListItem } from '@siemens/ix-vue'
import UnitsListItem from './UnitsListItem.vue'
</script>

<template>
  <IxEventList>
    <UnitsListItem unitID="1A-34" unitStatus="En Route" unitCurrentCall="12" />
    <UnitsListItem />
    <UnitsListItem />
    <UnitsListItem />
  </IxEventList>
</template>

<style scoped></style>
