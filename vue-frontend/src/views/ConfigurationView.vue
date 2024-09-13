<script setup lang="ts">
import InputText from '@/components/Common/InputText.vue'
import { useSystemConfigStore } from '@/stores/systemConfig'

const systemConfigStore = useSystemConfigStore()
</script>
<template>
  <div>
    <h1>Configuration</h1>
    <p>This is the configuration view. Things that belong here:</p>
    <ul>
      <li>Editable list of event types</li>
      <li>Editable list of how reported options</li>
    </ul>
    <div class="row m-5">
      <div class="col-3">
        <table class="table table-sm">
          <thead>
            <tr>
              <th>Event Type</th>
              <th>Default Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="eventType in systemConfigStore.eventTypes" :key="eventType.name">
              <td>
                <InputText id="" label="" v-model="eventType.name" />
              </td>
              <td><InputText id="" label="" v-model.number="eventType.defaultPriority" /></td>
              <td>
                <button class="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-3">
        <table class="table table-sm">
          <thead>
            <tr>
              <th>Option</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="option in systemConfigStore.howReportedOptions" :key="option.name">
              <td>
                <InputText id="" label="" v-model="option.name" />
              </td>
              <td><InputText id="" label="" v-model.number="option.position" /></td>
              <td>
                <button class="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
