<script setup lang="ts">
import { ref } from 'vue'
import 'fundamental-styles/dist/popover.css'
import 'fundamental-styles/dist/menu.css'

const isPopoverVisible = ref(false)

function togglePopover() {
  console.log('togglePopover')
  isPopoverVisible.value = !isPopoverVisible.value
}
</script>

<template>
  <div class="fd-popover">
    <div class="fd-popover__control">
      <li class="fd-menu__item" role="presentation" @click="togglePopover">
        <a class="fd-menu__link" href="#" role="menuitem">
          <span class="fd-menu__title">
            <slot name="button-text"></slot>
          </span>
          <span class="fd-menu__addon-after fd-menu__addon-after--submenu">
            <i class="sap-icon--slim-arrow-right"></i>
          </span>
        </a>
      </li>
    </div>
    <div
      class="fd-popover__body fd-popover__body--after fd-popover__body--no-arrow"
      v-if="isPopoverVisible"
    >
      <nav class="fd-menu">
        <ul class="fd-menu__list" role="menu">
          <slot name="menu-items"></slot>
        </ul>
      </nav>
    </div>
  </div>
</template>
