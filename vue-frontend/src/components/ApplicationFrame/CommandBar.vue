<script setup lang="ts">
import { ref } from 'vue'

import { onKeyStroke } from '@vueuse/core'

const tokensArray = ref<string[]>([])
const inputValue = ref('')
const inputRef = ref(null)

const addToken = () => {
  tokensArray.value.push(inputValue.value)
  inputValue.value = ''
}

// add token to tokensArray when "." key is pressed
onKeyStroke(
  '.',
  (e) => {
    e.preventDefault()
    addToken()
  },
  { target: inputRef }
)

// shift input to previous token when input is empty and backspace key is pressed
onKeyStroke(
  'Backspace',
  (e) => {
    if (inputValue.value === '') {
      e.preventDefault()
      inputValue.value = tokensArray.value.pop() ?? ''
    }
  },
  { target: inputRef }
)

// TODO: figure out why this doesn't fire on shift+backspace
// delete current token when shift and backspace key are pressed together
// onKeyStroke(
//   'Shift_Backspace',
//   (e) => {
//       e.preventDefault()
//       inputValue.value = ''
//   },
//   { target: inputRef }
// )
</script>

<template>
  <div class="form-control">
    <span v-for="token in tokensArray" :key="token">{{ token }}.</span>
    <input ref="inputRef" type="text" v-model="inputValue" />
  </div>
</template>
