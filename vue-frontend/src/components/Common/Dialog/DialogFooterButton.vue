<script setup lang="ts">
import 'fundamental-styles/dist/button.css'
import 'fundamental-styles/dist/dialog.css'

import { defineProps } from 'vue'

defineProps({
  buttonClass: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div class="fd-bar__element">
    <button class="fd-dialog__decisive-button fd-button" :class="buttonClass"><slot></slot></button>
  </div>
</template>
