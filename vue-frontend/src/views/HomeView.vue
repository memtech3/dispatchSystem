<script setup lang="ts">
import CallsList from '../components/dispatching/CallsList.vue'
import UnitsList from '../components/dispatching/UnitsList.vue'

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
      <IxCol style="background-color: black"><IxTypography format="display">2</IxTypography></IxCol>
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
</style>
