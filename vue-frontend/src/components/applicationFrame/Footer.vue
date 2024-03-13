<template>
  <footer class="bg-gray-800 text-white">
    <ul class="list-none flex gap-4">
      <FooterItem keyboard-shortcut="F1" action-name="Command Bar" />
      <FooterItem keyboard-shortcut="F2" action-name="New Event (Ext Src)" />
      <FooterItem keyboard-shortcut="F3" action-name="New Event (Int Src)" />
      <FooterItem keyboard-shortcut="F4" action-name="Post Current Event" />
      <FooterItem keyboard-shortcut="Ctrl + Alt" action-name="Move Grid Items (Hold)" />
    </ul>
  </footer>
</template>

<script lang="ts" setup>
import FooterItem from './FooterItem.vue'
</script>

<style></style>
