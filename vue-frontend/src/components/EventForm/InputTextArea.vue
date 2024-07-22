<script setup lang="ts">
defineProps<{
  id: string
  label: string
  ariaDescription: string
}>()
</script>
<template>
  <div class="col-md-12">
    <label for="{{id}}-input" class="form-label">{{ label }}</label>
    <textarea class="form-control" id="{{id}}-input" />
  </div>
</template>
