<script setup lang="ts">
import InputText from './InputText.vue'
import AutoCompleteDropdown from './AutoCompleteDropdown.vue'
import CommentsPanel from './CommentsPanel.vue'
</script>

<template>
  <div class="card h-100" style="max-width: 540px">
    <div class="row g-0 h-100">
      <div class="col-md-1">
        <!-- TODO: Navigation tabs go here -->
      </div>
      <div class="col-md-11 h-100">
        <div class="card-body h-100 overflow-auto">
          <h5 class="card-title">Card title</h5>
          <form action="" class="row g-3">
            <AutoCompleteDropdown class="col-md-12" id="location" label="Location" />
            <AutoCompleteDropdown class="col-md-6" id="type" label="Call Type" />
            <AutoCompleteDropdown class="col-md-6" id="subtype" label="Call Subtype" />
            <InputText class="col-md-6" label="Call Source" id="callSource" />
            <InputText class="col-md-6" label="Reporting Party" id="reportingParty" />
            <InputText class="col-md-12" label="Callback Number" id="callBackNumber" />
            <InputText class="col-md-12" label="Additional Persons" id="additionalPersons" />
          </form>
          <CommentsPanel />
        </div>
      </div>
    </div>
  </div>
</template>
