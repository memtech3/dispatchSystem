<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {
  IxBasicNavigation,
  IxMenu,
  IxMenuItem,
  IxMenuSettings,
  IxMenuSettingsItem
} from '@siemens/ix-vue'
</script>

<template>
  <IxBasicNavigation applicationName="Test" breakpoints="['sm','md']">
    <div className="placeholder-logo" slot="logo"></div>
    <IxMenu>
      <RouterLink :to="{ name: 'home' }">
        <IxMenuItem home-tab tab-icon="home"> Home </IxMenuItem>
      </RouterLink>
      <RouterLink :to="{ name: 'about' }">
        <IxMenuItem tab-icon="about"> About </IxMenuItem>
      </RouterLink>
      <IxMenuSettings>
        <IxMenuSettingsItem label="Example Setting 1"></IxMenuSettingsItem>
        <IxMenuSettingsItem label="Example Setting 2"></IxMenuSettingsItem>
      </IxMenuSettings>
    </IxMenu>
    <main>
      <RouterView />
    </main>
  </IxBasicNavigation>
</template>

<style scoped>
main {
  width: 100%;
}
</style>
