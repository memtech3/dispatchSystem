<script setup lang="ts">
import NewEventWindow from '@/components/NewEventWindow.vue'
import { DockviewVue } from 'dockview-vue'

import type { DockviewReadyEvent } from 'dockview-vue'

let dockviewAPI: DockviewReadyEvent['api']

const onReady = (event: DockviewReadyEvent) => {
  dockviewAPI = event.api
  const panel = event.api.addPanel({
    id: 'panel_1',
    component: 'UnitsTable',
    title: 'Units Table'
  })

  event.api.addPanel({
    id: 'panel_2',
    component: 'EventsBoard',
    title: 'Events Board',
    position: { referencePanel: panel }
  })

  const panel3 = event.api.addPanel({
    id: 'panel_3',
    component: 'CommandLogView',
    title: 'Map',
    renderer: 'always',
    position: { referencePanel: panel, direction: 'right' }
  })
  event.api.addPanel({
    id: 'panel_4',
    component: 'EventDetailsBoard',
    title: 'Event Details',
    position: { referencePanel: panel3 }
  })
  event.api.addPanel({
    id: 'panel_5',
    component: 'CommandLogView',
    title: 'Command Log',
    position: { referencePanel: panel3 }
  })
}

const saveLayout = () => {
  if (dockviewAPI) {
    let layout = dockviewAPI.toJSON()
    localStorage.setItem('dockviewLayout', JSON.stringify(layout))
  }
}

const loadLayout = () => {
  const savedLayout = localStorage.getItem('dockviewLayout')
  if (savedLayout && dockviewAPI) {
    let layout = JSON.parse(savedLayout)
    dockviewAPI.fromJSON(layout)
  }
}
</script>
<template>
  <div>
    <button @click="saveLayout">Save Layout</button>
    <button @click="loadLayout">Load Layout</button>
  </div>
  <DockviewVue style="width: 100%; height: 100%" class="dockview-theme-abyss" @ready="onReady" />
  <NewEventWindow />
</template>
