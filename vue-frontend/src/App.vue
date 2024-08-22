<script lang="ts" setup>
import AppNavbar from '@/components/ApplicationFrame/AppNavbar.vue'
import CommandBar from '@/components/ApplicationFrame/CommandBar/CommandBar.vue'
</script>
<template>
  <div id="mainGridContainer">
    <AppNavbar id="appNavbar" />
    <main class="container-fluid px-0" id="appMain">
      <RouterView v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </RouterView>
    </main>
    <CommandBar id="appCommandBar" />
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
}
#appCommandBar {
  grid-area: commandBar;
}
</style>
