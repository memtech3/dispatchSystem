<script setup lang="ts">
import 'bootstrap-icons/font/bootstrap-icons.css'

defineProps<{
  callID: string
  callPriority: number
  callPriorityClr: string
  callTypeCode: string
  callTypeDescription: string
  callTypeIcon: string
  callLocation: string
  callAssignedResources: string // this needs to be an array
  callCreatedTime: Date
}>()

// Attempt at call elapsed time counter:
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
//     let elapsedDate = currentDate - this.callCreatedTime;
//   }
// }
</script>

<template>
  <div class="grid grid-cols-4 h-36 outline outline-1">
    <div class="triagePane">
      <div class="typeIcon">I</div>
      <h3 class="priority">P1</h3>
      <p class="callID">SFD18015</p>
    </div>
    <div class="detailsPane">
      <div class="callType">
        Line 1 <br />
        Line 2
      </div>
      <span class="callSubtype"> Line 1</span>
      <br />
      <span class="location">
        Line 1: Address <br />
        Line 2: City, State, Zip
      </span>
      <div class="assignedUnits">Line 1: unit chips</div>
    </div>
    <div>time pane</div>
    <div>actions pane</div>
  </div>
</template>

<style lang="scss" scoped>
@mixin cardPriorityColor($color) {
  .priorityColor-#{$color} {
    @apply bg-orange-50 dark:bg-#{$color}-400 dark:bg-opacity-80;
  }
}

@include cardPriorityColor('orange');
@include cardPriorityColor('green');
@include cardPriorityColor('red');
@include cardPriorityColor('purple');
.triagePane {
  @apply priorityColor-orange w-16 h-full text-slate-50 p-1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .typeIcon {
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    aspect-ratio: 1;
    @apply text-slate-900 text-center bg-slate-50 w-full p-1;
  }
  .priority {
    @apply text-4xl font-medium text-center;
  }
  .callID {
    @apply text-xs font-normal text-center;
  }
}
.detailsPane {
  @apply w-44;
  .callType {
    @apply text-lg font-normal;
  }
  .callSubtype {
    @apply text-sm font-light;
  }
  .location {
    @apply text-sm font-normal;
  }
}
</style>
