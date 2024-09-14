<script setup lang="ts">
import { computed, ref } from 'vue'
const model = defineModel()

const props = defineProps<{
  id: string
  label: string
  options: string[]
}>()

const inputRef = ref()
const inputFocused = ref(false)

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
</script>
<template>
  <div class="col myDropdown" @click="inputRef.focus()">
    <label for="{{id}}-input" class="form-label">{{ label }}</label>
    <div class="myFormElement d-flex form-control form-control-sm">
      <input
        ref="inputRef"
        v-model="model"
        type="text"
        class="flex-fill"
        id="{{id}}-input"
        @focus="inputFocused = true"
        @blur="inputFocused = false"
      />
      <span class="">
        <i class="dropdownIcon"></i>
      </span>
    </div>
    <ul class="list-group options" :class="{ visible: inputFocused, invisible: !inputFocused }">
      <li
        class="list-group-item px-1 py-0 bg-body-secondary"
        v-for="option in filteredOptions"
        :key="option"
      >
        <p class="m-0">{{ option }}</p>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.myDropdown {
  .options {
    position: absolute;
    z-index: 9999;
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
