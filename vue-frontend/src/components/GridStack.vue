<script setup lang="ts">
import 'gridstack/dist/gridstack.min.css'
import { GridStack } from 'gridstack'
import { onMounted } from 'vue'

let grid = null

onMounted(() => {
  grid = GridStack.init()
  //   grid.el.appendChild(
  //     '<div id="gsi-1" gs-x="0" gs-y="0" gs-w="3" gs-h="2" gs-auto-position="true"></div>'
  //   )
  grid.makeWidget('.grid-stack-item')
})
</script>

<template>
  <div class="grid-stack bg-white">
    <div class="grid-stack-item bg-red-400">
      <div class="grid-stack-item-content">Item 1</div>
    </div>
    <div class="grid-stack-item bg-green-400" gs-w="2">
      <div class="grid-stack-item-content">Item 2</div>
    </div>
  </div>
</template>
