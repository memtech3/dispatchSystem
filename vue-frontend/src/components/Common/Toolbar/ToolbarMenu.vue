<script setup lang="ts">
import { ref } from 'vue'
import 'fundamental-styles/dist/popover.css'
import 'fundamental-styles/dist/menu.css'

const isPopoverVisible = ref(false)

function togglePopover() {
  isPopoverVisible.value = !isPopoverVisible.value
}
</script>

<template>
  <div class="fd-popover">
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
