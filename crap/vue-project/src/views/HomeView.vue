<script setup>
import CallsPanel from '../components/dispatching/CallList2/CallsPanel.vue'
import UnitsPanel from '../components/dispatching/UnitsPanel.vue'
import SampleMiddlePanel from '../components/dispatching/SampleMiddlePanel.vue'
</script>

<template>
  <main>
    <div class="pf-v5-l-flex pf-m-flex-1 pf-m-justify-content-space-between">
      <div class="pf-v5-l-flex__item pf-v5-u-ml-md">
        <CallsPanel />
      </div>
      <div class="pf-v5-l-flex__item pf-m-grow">
        <SampleMiddlePanel />
      </div>
      <div class="pf-v5-l-flex__item pf-m-align-right">
        <UnitsPanel />
      </div>
    </div>
  </main>
</template>
