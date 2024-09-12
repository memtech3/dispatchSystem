<script setup lang="ts">
defineProps<{
  cadEventId: string
}>()
</script>
<template>
  <a class="link-body-emphasis" href="">{{ cadEventId }}</a>
</template>
