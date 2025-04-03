<script setup lang="ts">
import { computed, ref } from 'vue'
import { onKeyStroke } from '@vueuse/core'
import { commandList } from './commandBarCmds'
import { useConsoleStateStore } from '@/stores/consoleState'

import 'fundamental-styles/dist/input.css'
import 'fundamental-styles/dist/input-group.css'
import 'fundamental-styles/dist/list.css'

const consoleStateStore = computed(() => {
  return useConsoleStateStore()
})
const inputValue = ref('')
const inputRef = ref<HTMLElement | null>(null)
const inputFocused = ref(false)

const runCommand = () => {
  console.log('Running command:', tokensArray.value)
  commandList.runCommand(tokensArray.value)
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

const tokensArray = computed(() => {
  return inputValue.value.split('.')
})

const filteredCommands = computed(() => {
  if (tokensArray.value.length < 2) {
    return commandList.getCommands().filter((command) => {
      return command.aliases.some((alias) =>
        alias.toLowerCase().startsWith((tokensArray.value[0] ?? '').toLowerCase())
      )
    })
  } else {
    return commandList.getCommands().filter((command) => {
      return command.aliases.some(
        (alias) => alias.toLowerCase() === (tokensArray.value[0] ?? '').toLowerCase()
      )
    })
  }
})
</script>

<template>
  <div class="commandBarPopovers">
    <ul
      class="fd-list fd-list--subline commandHints"
      :class="{ visible: inputFocused, invisible: !inputFocused }"
    >
      <li
        class="fd-list__item fd-list__item--interractive"
        v-for="command in filteredCommands"
        :key="command.name"
      >
        <div class="fd-list__content">
          <div class="fd-list__title">{{ command.name }}</div>
          <div class="fd-list__title">
            <span>
              {{ command.aliases }}
            </span>

            <span>.</span>

            <span v-for="(arg, index) in command.argTypes" :key="arg.name">
              <span
                class=""
                :class="{
                  bgBrandColor: index == tokensArray.length - 2
                }"
              >
                {{ '{' + arg.name + '}' }}
              </span>
              <span v-if="index < command.argTypes.length - 1">.</span>
            </span>
          </div>
        </div>
      </li>
    </ul>
    <ul
      class="list-group commandHistory"
      :class="{ visible: inputFocused, invisible: !inputFocused }"
    >
      <li
        class="list-group-item p-1 bg-body-secondary"
        v-for="(entry, index) in consoleStateStore.commandOutput"
        :key="index"
      >
        <small>
          <span class="">{{ entry.input }} -- {{ entry.type }} -- {{ entry.output }} </span>
        </small>
      </li>
    </ul>
  </div>

  <div class="fd-input-group" :class="{ 'is-focus': inputFocused }" @click="inputRef?.focus()">
    <span class="fd-input-group__addon">
      <span class="sap-icon sap-icon--command-line-interfaces"></span>
    </span>
    <input
      autocomplete="off"
      ref="inputRef"
      type="text"
      v-model="inputValue"
      @focus="inputFocused = true"
      @blur="inputFocused = false"
      @keydown.enter="runCommand"
      @keydown.esc="inputRef?.blur"
      class="fd-input fd-input-group__input"
      placeholder="Enter Command (F1)"
    />
  </div>
</template>

<style scoped lang="scss">
.commandBarPopovers {
  position: relative;
}

.commandHints {
  position: absolute;
  bottom: 0;
  z-index: 9999;
  width: unset;

  .fd-list__item{
    min-height: unset;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
}
.commandHistory {
  position: absolute;
  bottom: 0;
  right: 2.5em;
  z-index: 9999;
}
.bgBrandColor {
  background-color: var(--sapBrandColor);
}
</style>
