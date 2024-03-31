<script setup>
import InputText from './InputText.vue'
import AutoCompleteDropdown from './AutoCompleteDropdown.vue'
import CommentsPanel from './CommentsPanel.vue'
</script>

<template>
  <form action="" class="pf-v5-c-form pf-v5-u-p-sm">
    <div class="pf-v5-l-grid pf-m-gutter">
      <section class="pf-v5-c-form__section" role="group">
        <div
          class="pf-v5-c-form__section-title"
          id="form-section-example-section-2-title"
          aria-hidden="true"
        >
          Triage Information
        </div>
        <AutoCompleteDropdown id="location" label="Location" />
        <div class="pf-v5-l-grid pf-m-all-6-col pf-m-gutter">
          <AutoCompleteDropdown id="type" label="Call Type" />
          <AutoCompleteDropdown id="subtype" label="Call Subtype" />
        </div>
      </section>
      <section class="pf-v5-c-form__section" role="group">
        <div
          class="pf-v5-c-form__section-title"
          id="form-section-example-section-2-title"
          aria-hidden="true"
        >
          Reporting Party Information
        </div>
        <div class="pf-v5-l-grid pf-m-all-6-col pf-m-gutter">
          <InputText label="Call Source" id="callSource" />
          <InputText label="Reporting Party" id="reportingParty" />
        </div>
        <InputText label="Callback Number" id="callBackNumber" />
        <InputText label="Additional Persons" id="additionalPersons" />
      </section>
      <CommentsPanel />
    </div>
  </form>
</template>
