<script setup lang="ts">
import { ref } from 'vue'
const model = defineModel()

defineProps<{
  id: string
  label: string
}>()

const inputRef = ref()
defineExpose({ inputRef })
</script>
<template>
  <div class="col">
    <label for="{{id}}-input" class="form-label">{{ label }}</label>
    <input
      ref="inputRef"
      v-model="model"
      type="text"
      class="form-control form-control-sm"
      id="{{id}}-input"
    />
  </div>
</template>
