<script setup lang="ts">
import CallCardBoard from '../components/dispatching/CallCardBoard.vue'
import CallDetailsPanel from '../components/dispatching/CallDetailsPanel.vue'
import UnitsList from '../components/dispatching/UnitsList.vue'
import MapComponent from '../components/dispatching/MapComponent.vue'
import CallFormWindow from '../components/callFormWindow/CallFormWindow.vue'
import GridStack from '@/components/GridStack.vue'
import GridStackItem from '@/components/GridStackItem.vue'
import { ref, watchEffect } from 'vue'
import { useMagicKeys } from '@vueuse/core'

const editable = ref(false)
const keys = useMagicKeys()

watchEffect(async () => {
  editable.value = keys['Ctrl+Alt'].value
})
</script>

<template>
  <CallFormWindow />
  <GridStack gs-row="20" class="page-bg" :editable="editable">
    <GridStackItem gs-w="3" gs-h="5">
      <CallDetailsPanel />
    </GridStackItem>
    <GridStackItem gs-w="4" gs-h="5">
      <CallCardBoard />
    </GridStackItem>
    <GridStackItem gs-w="4" gs-h="2">
      <MapComponent />
    </GridStackItem>
    <GridStackItem gs-w="4" gs-h="2">
      <UnitsList />
    </GridStackItem>
  </GridStack>
</template>

<style scoped>
#main-grid {
  width: 100%;
  height: 100%;
}

.halfHeight {
  /* set height of element to half of (height of viewport minus height of navbar) */
  height: calc((100vh - 59px - 24px) / 2);
}
</style>
