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
    component: 'EventCardList',
    title: 'Events Card List',
    position: { referencePanel: panel }
  })

  event.api.addPanel({
    id: 'panel_2_2',
    component: 'EventCardList',
    title: 'Events Card List',
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
  <DockviewVue
    style="width: 100%; height: 100%"
    class="dockview-theme-abyss"
    leftHeaderActionsComponent="NewTabButton"
    className="dockview-theme-dispatchSystem"
    @ready="onReady"
  />
  <NewEventWindow />
</template>
<style lang="scss">
// dockview theming
@mixin dockview-theme-dispatchSystem-mixin {
  --dv-paneview-active-outline-color: var(--sapList_SelectionBorderColor);
  --dv-tabs-and-actions-container-font-size: var(--sapFontSize);
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: white;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  //
  --dv-group-view-background-color: var(--sapBackgroundColor);
  //
  --dv-tabs-and-actions-container-background-color: var(--sapPageHeader_Background);
  //
  --dv-activegroup-visiblepanel-tab-background-color: var(--sapList_SelectionBackgroundColor);
  --dv-activegroup-hiddenpanel-tab-background-color: #10192c;
  --dv-inactivegroup-visiblepanel-tab-background-color: #000c18;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #10192c;
  --dv-tab-divider-color: var(--sapToolbar_SeparatorColor);
  //
  --dv-activegroup-visiblepanel-tab-color: white;
  --dv-activegroup-hiddenpanel-tab-color: rgba(255, 255, 255, 0.5);
  --dv-inactivegroup-visiblepanel-tab-color: rgba(255, 255, 255, 0.5);
  --dv-inactivegroup-hiddenpanel-tab-color: rgba(255, 255, 255, 0.25);
  //
  --dv-separator-border: #2b2b4a;
  --dv-paneview-header-border-color: #2b2b4a;

  --dv-paneview-active-outline-color: #596f99;
}

.dockview-theme-dispatchSystem {
  @include dockview-theme-dispatchSystem-mixin();
}
</style>
