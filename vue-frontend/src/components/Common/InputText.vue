<script setup lang="ts">
import { ref } from 'vue'

import 'fundamental-styles/dist/form-item.css'
import 'fundamental-styles/dist/form-label.css'
import 'fundamental-styles/dist/input.css'

const model = defineModel()

defineProps<{
  id: string
  label?: string
  placeholder?: string
}>()

const inputRef = ref()
defineExpose({ inputRef })
</script>
<template>
  <!-- @click.prevent prevents the wrong element from getting focused, not sure why -->
  <div @click.prevent="inputRef.focus" class="fd-col fd-form-item">
    <label v-if="label" for="{{id}}-input" class="fd-form-label">{{ label }}</label>
    <input
      ref="inputRef"
      v-model="model"
      type="text"
      class="fd-input"
      id="{{id}}-input"
      :placeholder="placeholder"
    />
  </div>
</template>
