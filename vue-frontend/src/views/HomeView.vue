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
  <GridStack class="page-bg" :editable="editable">
    <GridStackItem gs-w="4" gs-h="9">
      <CallDetailsPanel />
    </GridStackItem>
    <GridStackItem gs-w="8" gs-h="9">
      <CallCardBoard />
    </GridStackItem>
    <GridStackItem gs-w="8" gs-h="4">
      <MapComponent />
    </GridStackItem>
    <GridStackItem gs-w="8" gs-h="4">
      <UnitsList />
    </GridStackItem>
  </GridStack>
</template>
