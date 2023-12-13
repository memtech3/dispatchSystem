<script setup>
import CallListItem from './CallListItem.vue'
defineProps({
  callType: {
    type: String,
    required: true
  },
  callCount: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="pf-v5-c-notification-drawer">
    <div class="pf-v5-c-notification-drawer__header">
      <h1 class="pf-v5-c-notification-drawer__header-title">
        {{ callType }} ({{ callCount.toString() }})
      </h1>
    </div>
    <div class="pf-v5-c-notification-drawer__body">
      <ul class="pf-v5-c-notification-drawer__list" role="list">
        <CallListItem />
        <CallListItem />
        <CallListItem />
      </ul>
    </div>
  </div>
</template>
