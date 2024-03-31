<script setup lang="ts">
defineProps<{
  id: string
  label: string
  ariaDescription: string
}>()
</script>
<template>
  <div class="pf-v5-c-form__group">
    <div class="pf-v5-c-form__group-label">
      <label class="pf-v5-c-form__label" for="{{id}}">
        <span class="pf-v5-c-form__label-text">{{ label }}</span
        >&nbsp;<span class="pf-v5-c-form__label-required" aria-hidden="true">&#42;</span></label
      >
    </div>
    <div class="pf-v5-c-form__group-control">
      <span class="pf-v5-c-form-control pf-m-required">
        <input required type="text" id="{{id}}" name="{{id}}" aria-describedby="{{id}}-helper" />
      </span>
    </div>
  </div>
</template>
