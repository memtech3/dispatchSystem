<script setup lang="ts">
import { DockviewVue } from 'dockview-vue'

import type { DockviewReadyEvent } from 'dockview-vue'
import CommandBar from '@/components/ApplicationFrame/CommandBar/CommandBar.vue'
import StatusBar from '@/components/ApplicationFrame/StatusBar.vue'

const onReady = (event: DockviewReadyEvent) => {
  const panel = event.api.addPanel({
    id: 'panel_1',
    component: 'UnitsTable',
    title: 'Units Table'
  })

  event.api.addPanel({
    id: 'panel_2',
    component: 'EventsBoard',
    title: 'Panel 2',
    position: { referencePanel: panel }
  })

  const panel3 = event.api.addPanel({
    id: 'panel_3',
    component: 'MapComponent',
    title: 'Panel 3',
    position: { referencePanel: panel, direction: 'right' }
  })

  event.api.addPanel({
    id: 'panel_4',
    component: 'AddSeedDataButton',
    title: 'Panel 4',
    position: { referencePanel: panel3 }
  })
}
</script>
<template>
  <DockviewVue style="width: 100%; height: 100%" class="dockview-theme-abyss" @ready="onReady" />
  <CommandBar id="appCommandBar" />
  <StatusBar />
</template>
