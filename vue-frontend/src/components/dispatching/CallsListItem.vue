<script setup lang="ts">
import { IxEventListItem } from '@siemens/ix-vue'

defineProps<{
  callID: string
  callPriority: number
  callTypeCode: string
  callTypeDescription: string
  callLocation: string
  callAssignedResources: string // this needs to be an array
}>()
</script>

<template>
  <li class="border border-gray-500" dark:border-gray-100>
    <div class="flex h-32">
      <div class="w-20 bg-red-700">
        <div class="flex flex-col content-center">
          <svg
            class="w-6 h-6 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 14"
          >
            <path
              d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
            />
          </svg>
          <span class="text-white"> P{{ callPriority }} </span>
        </div>
      </div>
      <div class="grow min-w-96 bg-yellow-300">
        {{ callTypeCode }}: {{ callTypeDescription }} <br />
        {{ callLocation }} <br />
        {{ callID }} <br />
        {{ callAssignedResources }}
      </div>
      <div class="w-40 bg-red-700"></div>
      <div class="w-8 bg-yellow-300"></div>
    </div>
  </li>
</template>

<style scoped></style>
