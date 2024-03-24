<script setup>
import InputText from 'primevue/inputtext'
</script>
<template>
  <div class="flex flex-col gap-1 w-full">
    <label class="text-xs font-bold" for="callerName">Caller Name</label>
    <InputText id="callerName" v-model="value" aria-describedby="callerName-help" />
  </div>
</template>
