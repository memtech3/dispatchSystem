<script lang="ts" setup>
import AppNavbar from '@/components/ApplicationFrame/AppNavbar.vue'
import CommandBar from '@/components/ApplicationFrame/CommandBar/CommandBar.vue'
import StatusBar from './components/ApplicationFrame/StatusBar.vue'
</script>
<template>
  <div id="mainGridContainer" class="is-compact">
    <AppNavbar id="appNavbar" />
    <main id="appMain">
      <RouterView v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </RouterView>
    </main>
    <CommandBar id="appCommandBar" />
    <StatusBar />
  </div>
</template>

<style scoped>
#mainGridContainer {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'navbar'
    'main'
    'commandBar';
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100vw;
  height: 100vh;
}
#appNavbar {
  grid-area: navbar;
}
#appMain {
  grid-area: main;
  overflow: auto;
  padding-right: 0;
  padding-left: 0;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
}
#appCommandBar {
  grid-area: commandBar;
}
</style>
