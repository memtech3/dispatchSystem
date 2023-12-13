<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/navigation/Sidebar.vue'
import Masthead from './components/navigation/Masthead.vue'
</script>

<template>
  <pf-page managed-sidebar>
    <template #skeleton>
      <Masthead />
      <Sidebar />
    </template>
    <RouterView />
  </pf-page>
</template>

<style scoped></style>
