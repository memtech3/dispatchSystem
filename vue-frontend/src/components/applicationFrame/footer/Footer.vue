<script setup>
import FooterItem from './FooterItem.vue'
</script>
<template>
  <footer class="bg-blue-900 text-white">
    <ul class="list-none flex gap-4">
      <FooterItem keyboardShorcut="F1" actionName="Command Bar" />
      <FooterItem keyboardShorcut="F2" actionName="New Event (Ext Src)" />
      <FooterItem keyboardShorcut="F3" actionName="New Event (Int Src)" />
      <FooterItem keyboardShorcut="F4" actionName="Post Current Event" />
      <FooterItem keyboardShorcut="Ctrl + Alt" actionName="Move Grid Items (Hold)" />
    </ul>
  </footer>
</template>
<style lang="scss"></style>
