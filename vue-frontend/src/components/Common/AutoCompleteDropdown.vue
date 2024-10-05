<script setup lang="ts">
import { computed, ref } from 'vue'

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
  <div class="col myDropdown" @click.prevent="inputRef.focus()">
    <label v-if="label" for="{{id}}-input" class="form-label">{{ label }}</label>
    <div class="myFormElement d-flex form-control form-control-sm">
      <input
        ref="inputRef"
        v-model="model"
        type="text"
        class="flex-fill"
        id="{{id}}-input"
        @focus="inputFocused = true"
        @blur="(inputFocused = false), (currentIndex = -1)"
        @keydown.down="onDownArrow"
        @keydown.up="onUpArrow"
        @keydown.tab="onTabKey"
      />
      <span class="">
        <i class="dropdownIcon"></i>
      </span>
    </div>
    <ul class="list-group options" :class="{ visible: inputFocused, invisible: !inputFocused }">
      <template v-for="(option, index) in filteredOptions" v-bind:key="index">
        <!-- @mousedown used instead of @click because it fires before @blur on the input element -->
        <li
          class="list-group-item px-1 py-0"
          :class="{
            'bg-primary': index === currentIndex,
            'bg-body-secondary': index !== currentIndex
          }"
          @mouseover="currentIndex = index"
          @mousedown="onClickOption($event, option)"
        >
          <p class="m-0">{{ option }}</p>
        </li>
      </template>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.myDropdown {
  .options {
    position: absolute;
    z-index: 9999;
    width: inherit;
    padding-right: 20px;
  }
  .dropdownIcon {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }
  input {
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0;
    min-width: 0;
  }
}
.myDropdown:focus-within {
  .myFormElement {
    color: var(--bs-body-color);
    background-color: var(--bs-body-bg);
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
}
</style>
