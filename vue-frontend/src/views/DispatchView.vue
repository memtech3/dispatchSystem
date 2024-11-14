<script setup lang="ts">
import { onMounted } from 'vue'
import NewEventWindow from '@/components/NewEventWindow.vue'
import { DockviewVue } from 'dockview-vue'

import Toolbar from '@/components/Common/Toolbar/Toolbar.vue'

import type { DockviewReadyEvent } from 'dockview-vue'
import ToolbarMenu from '@/components/Common/Toolbar/ToolbarMenu.vue'
import ToolbarMenuItem from '@/components/Common/Toolbar/ToolbarMenuItem.vue'
import ToolbarMenuSubMenu from '@/components/Common/Toolbar/ToolbarMenuSubMenu.vue'
import ToolbarButton from '@/components/Common/Toolbar/ToolbarButton.vue'

let dockviewAPI: DockviewReadyEvent['api']

const onReady = (event: DockviewReadyEvent) => {
  dockviewAPI = event.api
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

function addPanel(component: string, title: string): string {
  let id: string = 'panel' + (dockviewAPI.totalPanels + 1).toString()
  dockviewAPI.addPanel({
    id: id,
    component: component,
    title: title
  })

  return id
}

onMounted(() => {
  window.addEventListener('keydown', (event) => {
    if (event.key === 'F2' && dockviewAPI) {
      let id: string = 'panel' + (dockviewAPI.totalPanels + 1).toString()
      dockviewAPI.addPanel({
        id: id,
        component: 'EventDetailsBoard',
        title: 'Floating Panel',
        floating: {
          width: 800,
          height: 400 
        }
      })
    }
  })
})
</script>
<template>
  <div id="viewContainer">
    <Toolbar id="viewToolbar" class="fd-toolbar" role="toolbar" aria-label="Toolbar">
      <ToolbarMenu>
        <template #button-text> Layout </template>
        <template #menu-items>
          <ToolbarMenuItem @click="loadLayout">Load Layout</ToolbarMenuItem>
          <ToolbarMenuItem @click="saveLayout">Save Layout</ToolbarMenuItem>
          <ToolbarMenuSubMenu>
            <template #button-text>Add Panel</template>
            <template #menu-items>
              <ToolbarMenuItem @click="addPanel('UnitsTable', 'Unit Monitor')"
                >Unit Monitor</ToolbarMenuItem
              >
              <ToolbarMenuItem @click="addPanel('EventCardList', 'Event Monitor')"
                >Event Monitor</ToolbarMenuItem
              >
              <ToolbarMenuItem @click="addPanel('EventDetailsBoard', 'Event Details')"
                >Event Details</ToolbarMenuItem
              >
              <ToolbarMenuItem @click="addPanel('CommandLogView', 'Command Monitor')"
                >Command Monitor</ToolbarMenuItem
              >
            </template>
          </ToolbarMenuSubMenu>
        </template>
      </ToolbarMenu>
      <ToolbarButton>Another Button</ToolbarButton>
    </Toolbar>

    <DockviewVue
      id="viewMain"
      class="dockview-theme-abyss"
      className="dockview-theme-dispatchSystem"
      floating-group-bounds="boundedWithinViewport"
      @ready="onReady"
    />
  </div>
  <NewEventWindow />
</template>
<style lang="scss">
#viewContainer {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'toolbar'
    'main';
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100%;
  height: 100%;
}
#viewToolbar {
  grid-area: toolbar;
}
#viewMain {
  grid-area: main;
  width: 100%;
  height: 100%;
}

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
