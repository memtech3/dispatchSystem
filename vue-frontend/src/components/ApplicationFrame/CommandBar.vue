<script setup lang="ts">
import { ref } from 'vue'

import { onKeyStroke } from '@vueuse/core'

const tokensArray = ref<string[]>([])
const inputValue = ref('')
const inputRef = ref(null)
const inputFocused = ref(false)

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

type Argument = {
  name: string
  description: string
  required: boolean
}

type Command = {
  name: string
  description: string
  aliases: string[]
  arguments: Argument[]
}
const commands: Command[] = [
  {
    name: 'New Event',
    description: 'Creates a new event',
    aliases: ['n', 'newevent'],
    arguments: [
      {
        name: 'Location',
        description: 'Location of event',
        required: true
      },
      {
        name: 'type',
        description: 'Event type',
        required: true
      }
    ]
  },
  {
    name: 'Select Event',
    description: '',
    aliases: ['s', 'selectevent'],
    arguments: [
      {
        name: 'Event ID',
        description: '',
        required: true
      }
    ]
  }
]
</script>

<template>
  <!-- TODO: add a focus ring -->
  <div class="form-control position-relative d-flex align-items-center">
    <i class="bi bi-terminal pe-2"></i>
    <span class="text-secondary" v-for="token in tokensArray" :key="token">{{ token }}.</span>
    <div class="d-flex flex-fill">
      <input
        class="flex-fill p-0"
        ref="inputRef"
        type="text"
        v-model="inputValue"
        @focus="inputFocused = true"
        @blur="inputFocused = false"
      />
      <ul
        class="list-group commandHints"
        :class="{ visible: inputFocused, invisible: !inputFocused }"
      >
        <li
          class="list-group-item p-1 bg-body-secondary"
          v-for="command in commands"
          :key="command.name"
        >
          <p class="m-0">{{ command.name }}, {{ command.aliases }}</p>
          <small>
            <span v-for="arg in command.arguments" :key="arg.name">{{ arg.name }}, </span>
          </small>
        </li>
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
