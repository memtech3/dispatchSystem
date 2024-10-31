<script setup lang="ts">
import { computed, ref } from 'vue'

import 'fundamental-styles/dist/form-item.css'
import 'fundamental-styles/dist/form-label.css'
import 'fundamental-styles/dist/input.css'
import 'fundamental-styles/dist/list.css'
import 'fundamental-styles/dist/popover.css'
import 'fundamental-styles/dist/button.css'
import 'fundamental-styles/dist/icon.css'
import 'fundamental-styles/dist/input-group.css'

const model = defineModel()

const props = defineProps<{
  id: string
  label?: string
  options: string[]
}>()

const inputRef = ref()
const inputFocused = ref(false)
const currentIndex = ref(-1)

defineExpose({ inputRef })

const filteredOptions = computed(() => {
  if (typeof model.value === 'string') {
    return props.options.filter((option) =>
      option.toLowerCase().includes(model.value.toLowerCase())
    )
  } else {
    return props.options
  }
})

function onDownArrow(e: Event): void {
  e.preventDefault()
  if (currentIndex.value < filteredOptions.value.length - 1) {
    currentIndex.value++
  }
}
function onUpArrow(e: Event): void {
  e.preventDefault()
  if (currentIndex.value > -1) {
    currentIndex.value--
  }
}
function onTabKey(): void {
  if (currentIndex.value < filteredOptions.value.length && currentIndex.value > -1) {
    model.value = filteredOptions.value[currentIndex.value]
  } else if (model.value.length != 0) {
    model.value = filteredOptions.value[0]
  }
}
function onClickOption(event: Event, option: string): void {
  event.preventDefault() // prevent click from taking away input focus
  model.value = option
}
</script>
<template>
  <!-- @click.prevent prevents the wrong element from getting focused, not sure why -->
  <div class="fd-col fd-form-item" @click.prevent="inputRef.focus()">
    <label v-if="label" for="{{id}}-input" class="fd-form-label">{{ label }}</label>
    <div class="fd-popover">
      <div
        class="fd-popover__control"
        aria-controls="amsfiaufuaskhjd"
        :aria-expanded="inputFocused"
        aria-haspopup="true"
      >
        <div class="fd-input-group fd-input-group--control">
          <input
            ref="inputRef"
            v-model="model"
            type="text"
            id="{{id}}-input"
            class="fd-input fd-input-group__input"
            placeholder=""
            @focus="inputFocused = true"
            @blur="(inputFocused = false), (currentIndex = -1)"
            @keydown.down="onDownArrow"
            @keydown.up="onUpArrow"
            @keydown.tab="onTabKey"
          />
          <span class="fd-input-group__addon fd-input-group__addon--button">
            <button class="fd-input-group__button fd-button fd-button--transparent">
              <i class="sap-icon--navigation-down-arrow"></i>
            </button>
          </span>
        </div>
      </div>
      <div
        class="fd-popover__body fd-popover__body--no-arrow fd-popover__body--dropdown fd-popover__body--dropdown-fill"
        :aria-hidden="!inputFocused"
      >
        <div class="fd-popover__wrapper docs-max-height">
          <ul class="fd-list fd-list--dropdown" role="listbox">
            <template v-for="(option, index) in filteredOptions" v-bind:key="index">
              <!-- @mousedown used instead of @click because it fires before @blur on the input element -->
              <li
                role="option"
                class="fd-list__item"
                :class="{ 'is-selected': index === currentIndex }"
                @mouseover="currentIndex = index"
                @mousedown="onClickOption($event, option)"
              >
                <span class="fd-list__title">{{ option }}</span>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.fd-popover__body {
  z-index: 1000;
}

/* TODO: fix me temporary hack to make autocomplete dropdown sort of work */
.fd-col {
  overflow: visible !important;
}
</style>
