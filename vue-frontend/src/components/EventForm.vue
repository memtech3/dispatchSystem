<!-- Sample from Nuxt UI docs repo https://github.com/nuxt/ui/blob/dev/docs/components/content/examples/FormExampleElements.vue -->

<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' }
]

const state = reactive({
  location: undefined,
  callSource: undefined,
  callerName: undefined,
  callerPhone: undefined,
  eventPriority: undefined
})

const schema = z.object({
  input: z.string().min(10),
  inputMenu: z.any().refine((option) => option?.value === 'option-2', {
    message: 'Select Option 2'
  }),
  textarea: z.string().min(10),
  select: z.string().refine((value) => value === 'option-2', {
    message: 'Select Option 2'
  }),
  selectMenu: z.any().refine((option) => option?.value === 'option-2', {
    message: 'Select Option 2'
  }),
  toggle: z.boolean().refine((value) => value === true, {
    message: 'Toggle me'
  }),
  checkbox: z.boolean().refine((value) => value === true, {
    message: 'Check me'
  }),
  radio: z.string().refine((value) => value === 'option-2', {
    message: 'Select Option 2'
  }),
  radioGroup: z.string().refine((value) => value === 'option-2', {
    message: 'Select Option 2'
  }),
  range: z.number().max(20, { message: 'Must be less than 20' })
})

type Schema = z.infer<typeof schema>

const form = ref()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}
</script>

<template>
  <UForm ref="form" :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <div class="p-2">
      <UDivider class="pb-2" label="LOCATION" />
      <div class="grid grid-cols-4 gap-2">
        <UFormGroup class="col-span-4" name="location" label="Location">
          <UInputMenu v-model="state.location" :options="options" />
        </UFormGroup>
      </div>

      <UDivider class="pt-4 pb-2" label="EVENT INFO" />
      <div class="grid grid-cols-4 gap-2">
        <UFormGroup class="col-span-2" name="eventType" label="Type">
          <UInputMenu v-model="state.callSource" />
        </UFormGroup>
        <UFormGroup class="col-span-2" name="eventSubtype" label="Subtype">
          <UInputMenu v-model="state.callerName" />
        </UFormGroup>
        <UFormGroup class="col-span-2" name="eventPriority" label="Priority">
          <UInputMenu v-model="state.eventPriority" />
        </UFormGroup>
      </div>

      <UDivider class="pt-4 pb-2" label="CALLER" />
      <div class="grid grid-cols-4 gap-2">
        <UFormGroup class="col-span-2" name="callSource" label="Source">
          <UInputMenu v-model="state.callSource" />
        </UFormGroup>
        <UFormGroup class="col-span-2" name="callerName" label="Caller Name">
          <UInput v-model="state.callerName" />
        </UFormGroup>
        <UFormGroup class="col-span-4" name="callerPhone" label="Phone Number">
          <UInput v-model="state.callerPhone" />
        </UFormGroup>
      </div>

      <UFormGroup name="textarea" label="Textarea">
        <UTextarea v-model="state.textarea" />
      </UFormGroup>

      <div class="py-2">
        <UButton type="submit"> Submit </UButton>
        <UButton variant="outline" class="ml-2" @click="form.clear()"> Clear </UButton>
      </div>
    </div>
  </UForm>
</template>
