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
  <!-- @click.prevent prevents the wrong element from getting focused, not sure why -->
  <div class="col-md-12" @click.prevent="inputRef.focus">
    <label for="{{id}}-input" class="form-label">{{ label }}</label>
    <textarea
      ref="inputRef"
      v-model="model"
      class="form-control form-control-sm"
      id="{{id}}-input"
    />
  </div>
</template>
