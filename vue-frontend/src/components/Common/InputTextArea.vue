<script setup lang="ts">
import { ref } from 'vue'
const model = defineModel()

defineProps<{
  id: string
  label: string
  ariaDescription: string
}>()

const inputRef = ref()
defineExpose({ inputRef })
</script>
<template>
  <div class="col-md-12">
    <label for="{{id}}-input" class="form-label">{{ label }}</label>
    <textarea
      ref="inputRef"
      v-model="model"
      class="form-control form-control-sm"
      id="{{id}}-input"
    />
  </div>
</template>
