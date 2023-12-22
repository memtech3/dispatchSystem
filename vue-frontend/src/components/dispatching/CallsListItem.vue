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
  <li class="border border-gray-500 dark:border-gray-100 dark:text-white dark:bg-gray-800">
    <div class="flex h-32">
      <div class="w-14" :class="callPriorityClr">
        <div class="flex flex-col content-center items-center py-5 text-green-200">
          <div
            class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
          >
            <span :class="callTypeIcon"></span>
            <span class="sr-only">{{ callTypeIcon }}</span>
          </div>
          <span class="text-white"> P{{ callPriority }} </span>
        </div>
      </div>
      <div class="p-2 grow min-w-96">
        {{ callTypeCode }}: {{ callTypeDescription }} <br />
        {{ callLocation }} <br />
        {{ callID }} <br />
        {{ callAssignedResources }}
      </div>
      <div class="w-28">
        <div class="flex flex-col content-center items-end p-2">
          <span>2:43 PM</span>
          <span
            class="bg-gray-100 text-gray-800 text-sm font-medium px-1 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
          >
            <span class="bi bi-stopwatch"></span>
            10 min
          </span>
          <span>4 min</span>
        </div>
      </div>
      <div class="w-8 flex flex-col content-center items-center py-2">
        <button type="button" class="actionButton">
          <span class="bi bi-three-dots-vertical"></span>
        </button>
        <button type="button" class="actionButton justify-self-end">
          <span class="bi bi-chevron-double-down"></span>
        </button>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
@mixin cardPriorityColor($color) {
  .priorityColor-#{$color} {
    @apply text-#{$color}-400 bg-#{$color}-100 dark:bg-#{$color}-400 dark:text-#{$color}-100;
  }
}

@include cardPriorityColor('orange');
@include cardPriorityColor('green');
@include cardPriorityColor('red');
@include cardPriorityColor('purple');

.actionButton {
  @apply text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-0.5 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800;
}
</style>
