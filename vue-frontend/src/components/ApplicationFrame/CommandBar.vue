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
  <!-- TODO: add a focus ring -->
  <div class="form-control position-relative d-flex align-items-center">
    <i class="bi bi-terminal pe-2"></i>
    <span class="text-secondary" v-for="token in tokensArray" :key="token">{{ token }}.</span>
    <div class="d-flex flex-fill">
      <input class="flex-fill" ref="inputRef" type="text" v-model="inputValue" />
      <ul class="list-group flex-column-reverse commandHints">
        <li class="list-group-item active" aria-current="true">An active item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.form-control input {
  border: none;
  outline: none;
  background-color: transparent;
}

.commandHints {
  position: absolute;
  bottom: 2.5em;
  z-index: 9999;
}
</style>
