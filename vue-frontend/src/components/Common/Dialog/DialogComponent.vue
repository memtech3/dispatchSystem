<script setup lang="ts">
import 'fundamental-styles/dist/dialog.css'
import 'fundamental-styles/dist/bar.css'

import { onUnmounted, ref, watch } from 'vue'

const dialogVisible = ref(false)

function show() {
  dialogVisible.value = true
}
function hide() {
  dialogVisible.value = false
}

defineExpose({
  show,
  hide
})

function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape' && dialogVisible.value) {
    hide()
  }
}

watch(dialogVisible, () => {
  if (dialogVisible.value) {
    window.addEventListener('keydown', handleEscape)
  } else {
    window.removeEventListener('keydown', handleEscape)
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
})
</script>
<template>
  <section class="fd-dialog fd-dialog--active" v-if="dialogVisible" @keydown.esc="hide">
    <div
      class="fd-dialog__content"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title-1"
    >
      <span class="fd-dialog__resize-handle"></span>
      <slot name="header"></slot>
      <slot name="subheader"></slot>
      <div class="fd-dialog__body">
        <slot name="body"></slot>
      </div>
      <slot name="footer"></slot>
    </div>
  </section>
</template>
<style>
.fd-dialog--active {
  z-index: 9999;
}
</style>
