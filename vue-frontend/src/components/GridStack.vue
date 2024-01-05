<script setup lang="ts">
import 'gridstack/dist/gridstack.min.css'
import { GridStack } from 'gridstack'
import { onMounted, watchEffect } from 'vue'

const props = defineProps({
  editable: { type: Boolean, required: true }
})

let grid = null
let options = {
  columnWidth: 1
  // This isn't working hmm
}

onMounted(() => {
  grid = GridStack.init(options)
  //   grid.el.appendChild(
  //     '<div id="gsi-1" gs-x="0" gs-y="0" gs-w="3" gs-h="2" gs-auto-position="true"></div>'
  //   )
  grid.makeWidget('.grid-stack-item')

  watchEffect(async () => {
    // enable/disable editing grid based on editable prop
    props.editable ? grid.enable() : grid.disable()
  })
})
</script>

<template>
  <div class="grid-stack bg-white">
    <slot />
  </div>
</template>
