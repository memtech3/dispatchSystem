<script setup lang="ts">
import { IxEventList, IxEventListItem } from '@siemens/ix-vue'
import CallsListItem from './CallsListItem.vue'
</script>

<template>
<ul class="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white h-full">
    <CallsListItem />
    <CallsListItem />
    <CallsListItem />
    <CallsListItem />
    <!-- <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Profile</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Settings</li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Messages</li>
    <li class="w-full px-4 py-2 rounded-b-lg">Download</li> -->
</ul>
</template>

<style scoped></style>
