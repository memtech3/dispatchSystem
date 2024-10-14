<script setup lang="ts">
import { ref } from 'vue'

import 'fundamental-styles/dist/form-item.css'
import 'fundamental-styles/dist/form-label.css'
import 'fundamental-styles/dist/textarea.css'

const model = defineModel()

defineProps<{
  id: string
  label?: string
}>()

const inputRef = ref()
defineExpose({ inputRef })
</script>
<template>
  <!-- @click.prevent prevents the wrong element from getting focused, not sure why -->
  <div class="fd-form-item" @click.prevent="inputRef.focus">
    <label v-if="label" for="{{id}}-input" class="fd-form-label">{{ label }}</label>
    <textarea ref="inputRef" v-model="model" class="fd-textarea" id="{{id}}-input" />
  </div>
</template>
