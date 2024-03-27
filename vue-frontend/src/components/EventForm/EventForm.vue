<script setup>
import InputText from './InputText.vue'
import AutoCompleteDropdown from './AutoCompleteDropdown.vue'
import HorizontalDivider from './HorizontalDivider.vue'
import CommentsPanel from './CommentsPanel.vue'
</script>

<template>
  <div class="flex flex-col gap-4 p-4">
    <AutoCompleteDropdown id="location" label="Location" />
    <div class="flex flex-row gap-4">
      <AutoCompleteDropdown id="type" label="Call Type" />
      <AutoCompleteDropdown id="subtype" label="Call Subtype" />
    </div>
    <HorizontalDivider />
    <div class="flex flex-row gap-4">
      <InputText label="Call Source" id="callSource" />
      <InputText label="Reporting Party" id="reportingParty" />
    </div>
    <InputText label="Callback Number" id="callBackNumber" />
    <InputText label="Additional Persons" id="additionalPersons" />
    <HorizontalDivider />
    <CommentsPanel />
  </div>
</template>
