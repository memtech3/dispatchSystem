<script setup lang="ts">
import InputText from './InputText.vue'
import AutoCompleteDropdown from './AutoCompleteDropdown.vue'
import CommentsPanel from './CommentsPanel.vue'
</script>

<template>
  <form action="" class="row g-3">
    <AutoCompleteDropdown class="col-md-12" id="location" label="Location" />
    <AutoCompleteDropdown class="col-md-6" id="type" label="Call Type" />
    <AutoCompleteDropdown class="col-md-6" id="subtype" label="Call Subtype" />
    <InputText class="col-md-6" label="Call Source" id="callSource" />
    <InputText class="col-md-6" label="Reporting Party" id="reportingParty" />
    <InputText class="col-md-12" label="Callback Number" id="callBackNumber" />
    <InputText class="col-md-12" label="Additional Persons" id="additionalPersons" />
    <CommentsPanel />
  </form>
</template>
