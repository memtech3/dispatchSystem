<script setup lang="ts">
import { ref } from 'vue'
import { VueWinBox } from 'vue-winbox'

const wbRef = ref()

//WinBox options
const options = {
  title: 'New Event',
  overflow: true
}
</script>

<template>
  <VueWinBox ref="wbRef" :options="options" @onmove="onMove"> winbox window </VueWinBox>
</template>

<style lang="scss">
.winbox {
  @apply bg-gray-700;
  box-shadow: none;
}

.wb-body {
  /* set the width of window border via margin: */
  margin: 4px;
  @apply bg-gray-950 text-white;
}

.wb-title {
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 600;
}
</style>
