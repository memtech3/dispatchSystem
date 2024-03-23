<!-- Sample from Nuxt UI docs repo https://github.com/nuxt/ui/blob/dev/docs/components/content/examples/FormExampleElements.vue -->

<script setup>
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
</script>

<template>
  <div class="flex flex-col gap-8 p-5">
    <div class="flex flex-row gap-8">
      <FloatLabel>
        <InputText id="username" />
        <label for="username">Username</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="username" />
        <label for="username">Username</label>
      </FloatLabel>
    </div>
    <FloatLabel>
      <InputText id="username" />
      <label for="username">Username</label>
    </FloatLabel>
    <FloatLabel>
      <InputText id="username" />
      <label for="username">Username</label>
    </FloatLabel>
  </div>
</template>
