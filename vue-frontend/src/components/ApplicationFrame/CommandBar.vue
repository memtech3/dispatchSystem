<script setup lang="ts">
import { computed, ref } from 'vue'
import { onKeyStroke } from '@vueuse/core'

const inputValue = ref('')
const inputRef = ref<HTMLElement | null>(null)
const inputFocused = ref(false)

const runCommand = () => {
  console.log('Running command:', tokensArray.value)
  inputValue.value = ''
}

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

onKeyStroke('F1', (e) => {
  e.preventDefault()
  inputRef.value?.focus()
})

type Argument = {
  name: string
  description: string
  required: boolean
  position: number
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
        required: true,
        position: 1
      },
      {
        name: 'type',
        description: 'Event type',
        required: true,
        position: 2
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
        required: true,
        position: 1
      }
    ]
  },
  {
    name: 'New Field Initiated Event',
    description: '',
    aliases: ['nfe', 'newfieldevent'],
    arguments: [
      {
        name: 'Event ID',
        description: '',
        required: true,
        position: 1
      }
    ]
  }
]

const tokensArray = computed(() => {
  return inputValue.value.split('.')
})

const filteredCommands = computed(() => {
  if (tokensArray.value.length < 2) {
    return commands.filter((command) => {
      return command.aliases.some((alias) =>
        alias.toLowerCase().startsWith((tokensArray.value[0] ?? '').toLowerCase())
      )
    })
  } else {
    return commands.filter((command) => {
      return command.aliases.some(
        (alias) => alias.toLowerCase() === (tokensArray.value[0] ?? '').toLowerCase()
      )
    })
  }
})
</script>

<template>
  <div class="commandBar form-control position-relative d-flex align-items-center">
    <i class="bi bi-terminal pe-2"></i>
    <div class="d-flex flex-fill">
      <input
        class="flex-fill p-0"
        ref="inputRef"
        type="text"
        v-model="inputValue"
        @focus="inputFocused = true"
        @blur="inputFocused = false"
        @keydown.enter="runCommand"
        @keydown.esc="inputRef?.blur"
      />
      <ul
        class="list-group commandHints"
        :class="{ visible: inputFocused, invisible: !inputFocused }"
      >
        <li
          class="list-group-item p-1 bg-body-secondary"
          v-for="command in filteredCommands"
          :key="command.name"
        >
          <p class="m-0">{{ command.name }}, {{ command.aliases }}</p>
          <small>
            <span
              v-for="arg in command.arguments"
              :key="arg.name"
              :class="{ 'bg-primary': arg.position == tokensArray.length - 1 }"
              >{{ arg.name }},
            </span>
          </small>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.commandBar input {
  border: none;
  outline: none;
  background-color: transparent;
}

.commandBar .commandHints {
  position: absolute;
  bottom: 2.5em;
  z-index: 9999;
}

.commandBar:focus-within {
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
</style>
