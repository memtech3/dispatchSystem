<script setup lang="ts">
import CallsList from '../components/dispatching/CallsList.vue'
import UnitsList from '../components/dispatching/UnitsList.vue'
import MapComponent from '../components/dispatching/MapComponent.vue'

import {
  IxEventList,
  IxEventListItem,
  IxCol,
  IxLayoutGrid,
  IxRow,
  IxTypography
} from '@siemens/ix-vue'
</script>

<template>
  <IxLayoutGrid id="main-grid">
    <IxRow style="height: 100%">
      <IxCol size="2">
        <CallsList />
      </IxCol>
      <IxCol size="2">
        <CallsList />
      </IxCol>
      <IxCol>
        <MapComponent />
      </IxCol>
      <IxCol size="2">
        <UnitsList />
      </IxCol>
    </IxRow>
  </IxLayoutGrid>
</template>

<style scoped>
#main-grid {
  width: 100%;
  height: 100%;
}

/* ix-col {
  background-color: var(--theme-color-primary);
  border: var(--theme-std-bdr-2);
  text-align: center;
  color: var(--theme-color-inv-contrast-text);
} */
</style>
