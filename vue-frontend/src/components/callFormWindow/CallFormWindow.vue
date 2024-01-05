<script setup lang="ts">
import { ref } from 'vue'
import { VueWinBox } from 'vue-winbox'

const count = ref(0)
const wbRef = ref()

//WinBox options
const options = {
  title: 'Current count: 0'
}

setInterval(() => {
  count.value++
  wbRef.value?.winbox?.setTitle(`Current count: ${count.value}`)
}, 500)
</script>

<template>
  <VueWinBox ref="wbRef" :options="options" @onmove="onMove">
    <div>Window 1: {{ count }}</div>
  </VueWinBox>
</template>

<style lang="scss">
.winbox {
  @apply bg-gray-700;
  box-shadow: none;
}

.winbox.min {
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
