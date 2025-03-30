<script setup lang="ts">
import 'fundamental-styles/dist/bar.css'
import 'fundamental-styles/dist/dialog.css'
</script>
<template>
  <footer class="fd-dialog__footer fd-bar fd-bar--footer">
    <div class="fd-bar__right">
      <slot name="right"> </slot>
    </div>
  </footer>
</template>
