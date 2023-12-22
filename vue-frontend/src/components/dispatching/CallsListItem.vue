<script setup lang="ts">
import "bootstrap-icons/font/bootstrap-icons.css"


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
  <li class="border border-gray-500" dark:border-gray-100>
    <div class="flex h-32">
      <div class="w-14" :class="callPriorityClr">
        <div class="flex flex-col content-center items-center py-5 text-green-200">
          <div
            class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
          >
            <span :class="callTypeIcon"></span>
            <!-- <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg> -->
            <span class="sr-only">Check icon</span>
          </div>
          <span class="text-white"> P{{ callPriority }} </span>
        </div>
      </div>
      <div class="p-2 grow min-w-96 dark:bg-gray-800 dark:text-white">
        {{ callTypeCode }}: {{ callTypeDescription }} <br />
        {{ callLocation }} <br />
        {{ callID }} <br />
        {{ callAssignedResources }}
      </div>
      <div class="w-28 bg-red-700">test</div>
      <div class="w-8 bg-yellow-300"></div>
    </div>
  </li>
</template>

<style lang="scss" scoped>

@mixin cardPriorityColor($color) {
  .priorityColor-#{$color} {
    @apply text-#{$color}-400 bg-#{$color}-100 dark:bg-#{$color}-400 dark:text-#{$color}-100;
  }

}

@include cardPriorityColor("orange");
@include cardPriorityColor("green");
@include cardPriorityColor("red");
@include cardPriorityColor("purple");


</style>
