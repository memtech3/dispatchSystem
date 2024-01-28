<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useMagicKeys } from '@vueuse/core'
// import CallCardBoard from '../components/dispatching/CallCardBoard.vue'
// import CallDetailsPanel from '../components/dispatching/CallDetailsPanel.vue'
// import CallFormWindow from '../components/callFormWindow/CallFormWindow.vue'

const editable = ref(false)
const keys = useMagicKeys()

watchEffect(async () => {
  editable.value = keys['Ctrl+Alt'].value
})
</script>

<template>
  <!-- <CallFormWindow /> -->
  <div class="grid grid-cols-[25%_1fr_1fr] h-full w-full">
    <div class="bg-blue-500">1</div>
    <div>2</div>
    <div class="h-full grid grid-rows-2 overflow-auto divide-x divide-y divide-gray-200 dark:divide-gray-700">
      <div class="">
        <MapComponent />
      </div>
      <div class="overflow-auto">
        <UnitsBoard />
      </div>
    </div>
  </div>
</template>
