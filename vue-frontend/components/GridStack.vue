<template>
  <div class="grid-stack">
    <slot />
  </div>
</template>

<script setup lang="ts">
import 'gridstack/dist/gridstack.min.css'
import { GridStack } from 'gridstack'
import { onMounted, watchEffect } from 'vue'

const props = defineProps({
  editable: { type: Boolean, required: true },
})

let grid: GridStack = null
let options = {
  margin: 0,
  column: 20,
  float: true,
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

<style lang="scss">
$columns: 20;
@function fixed($float) {
  @return round(calc($float * 1000) / 1000); // total 2+3 digits being %
}
.gs-#{$columns} > .grid-stack-item {
  width: fixed(calc(100% / $columns));

  @for $i from 1 through $columns - 1 {
    &[gs-x='#{$i}'] {
      left: fixed((calc(100% / $columns)) * $i);
    }
    &[gs-w='#{$i+1}'] {
      width: fixed((calc(100% / $columns)) * ($i + 1));
    }
  }
}
</style>
