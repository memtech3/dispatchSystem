<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import 'fundamental-styles/dist/popover.css'
import 'fundamental-styles/dist/menu.css'

const popoverElement = ref(null)
const isPopoverVisible = ref(false)

function togglePopover() {
  isPopoverVisible.value = !isPopoverVisible.value
}

function handleClickOutside(event: MouseEvent) {
  if (popoverElement.value && !popoverElement.value.contains(event.target as Node)) {
    isPopoverVisible.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="fd-popover" ref="popoverElement">
    <div class="fd-popover__control">
      <button class="fd-button fd-button--transparent fd-button--menu" @click="togglePopover">
        <span class="fd-button__text">
          <slot name="button-text"></slot>
        </span>
        <i class="sap-icon--slim-arrow-down"></i>
      </button>
    </div>
    <div class="fd-popover__body" v-if="isPopoverVisible">
      <nav class="fd-menu" style="overflow: visible">
        <ul class="fd-menu__list" role="menu">
          <slot name="menu-items"></slot>
        </ul>
      </nav>
    </div>
  </div>
</template>
