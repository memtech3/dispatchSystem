<script setup lang="ts">
import 'bootstrap-icons/font/bootstrap-icons.css'

defineProps<{
  eventID: string
  eventPriority: number
  eventPriorityClr: string
  eventTypeCode: string
  eventTypeDescription: string
  eventTypeIcon: string
  eventLocation: string
  eventAssignedResources: string // this needs to be an array
  eventCreatedTime: Date
}>()

// Attempt at event elapsed time counter:
//
// data() {
//   return {
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   };
// };
// mounted() {
//   setInterval(() => this.);
// };
// methods: {
//   updateTimer() {
//     const currentDate = new Date();
//     let elapsedDate = currentDate - this.eventCreatedTime;
//   }
// }
</script>

<template>
  <div class="pf-v5-c-card pf-m-plain pf-m-compact">
    <div class="pf-v5-l-grid pf-m-all-6-col-on-md">
      <div class="pf-v5-l-grid__item pf-m-2-col" :class="'priorityColor-' + eventPriorityClr">
        <div class="pf-v5-l-stack pf-v5-u-p-sm">
          <div class="pf-v5-l-stack__item pf-v5-u-m-auto">
            <span class="fas fa-fw fa-info-circle"></span>
          </div>
          <div class="pf-v5-l-stack__item pf-m-fill pf-v5-u-m-auto">
            <span class="pf-v5-u-font-size-3xl pf-v5-u-font-weight-bold">P{{ eventPriority }}</span>
          </div>
          <div class="pf-v5-l-stack__item">
            <span class="pf-v5-u-font-size-xs">{{ eventID }}</span>
          </div>
        </div>
      </div>
      <div class="pf-v5-l-grid__item pf-m-8-col">
        <div class="pf-v5-l-stack pf-v5-u-p-sm">
          <div class="pf-v5-l-stack__item">
            <h2 class="pf-v5-c-content">{{ eventTypeDescription }}</h2>
          </div>
          <div class="pf-v5-l-stack__item pf-m-fill">
            {{ eventLocation }}
          </div>
          <div class="pf-v5-l-stack__item">
            <span class="pf-v5-c-label pf-m-blue pf-m-compact">
              <span class="pf-v5-c-label__content">
                <span class="pf-v5-c-label__icon">
                  <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
                </span>
                <span class="pf-v5-c-label__text" style="--pf-v5-c-label__text--MaxWidth: 38ch"
                  >1A75</span
                >
              </span>
            </span>
            <span class="pf-v5-c-label pf-m-purple pf-m-compact">
              <span class="pf-v5-c-label__content">
                <span class="pf-v5-c-label__icon">
                  <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
                </span>
                <span class="pf-v5-c-label__text" style="--pf-v5-c-label__text--MaxWidth: 38ch"
                  >ENG1</span
                >
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin priorityColor($color) {
  .priorityColor-#{$color} {
    background-color: var(--pf-v5-global--palette--#{$color}-300);
  }
}

@include priorityColor('blue');
@include priorityColor('red');
@include priorityColor('green');
@include priorityColor('purple');
</style>
