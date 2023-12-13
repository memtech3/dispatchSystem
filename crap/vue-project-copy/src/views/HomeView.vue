<script setup>
import CallsPanel from '../components/dispatching/CallsPanel.vue'
import UnitsPanel from '../components/dispatching/UnitsPanel.vue'
import SampleMiddlePanel from '../components/dispatching/SampleMiddlePanel.vue'
</script>

<template>
  <main>
    <div class="columns">
      <div class="column is-one-quarter">
        <CallsPanel />
      </div>
      <div class="column">
        <SampleMiddlePanel />
      </div>
      <div class="column is-one-quarter">
        <UnitsPanel />
      </div>
    </div>
  </main>
</template>

<Style>

</Style>