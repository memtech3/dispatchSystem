<script setup lang="ts">
import EventCardList from './EventCardList.vue'
import Panel from '@/components/Common/Panel.vue'
</script>

<template>
  <Panel class="h-100">
    <template v-slot:body>
      <div class="row g-0">
        <div class="col-6"><EventCardList /></div>
        <div class="col-6"><EventCardList /></div>
      </div>
    </template>
  </Panel>
</template>
