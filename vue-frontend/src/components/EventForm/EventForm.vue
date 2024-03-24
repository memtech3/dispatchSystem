<script setup>
import InputText from './InputText.vue'
import AutoCompleteDropdown from './AutoCompleteDropdown.vue'
import HorizontalDivider from './HorizontalDivider.vue'
import CommentsPanel from './CommentsPanel.vue'
</script>

<template>
  <div class="flex flex-col gap-4 p-4">
    <div class="flex flex-row gap-4">
      <AutoCompleteDropdown />
      <InputText />
    </div>
    <InputText />
    <InputText />
    <HorizontalDivider />
    <div class="flex flex-row gap-4">
      <AutoCompleteDropdown />
      <InputText />
    </div>
    <InputText />
    <InputText />
    <HorizontalDivider />
    <CommentsPanel />
  </div>
</template>
