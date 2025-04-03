<script setup lang="ts">
import 'fundamental-styles/dist/title.css'
import 'fundamental-styles/dist/bar.css'
</script>
<template>
  <header class="fd-dialog__header fd-bar">
    <div class="fd-bar__left">
      <div class="fd-bar__element">
        <h2 class="fd-title fd-title--h5" id="dialog-title-1">
          <slot name="title"></slot>
        </h2>
      </div>
    </div>
  </header>
</template>
