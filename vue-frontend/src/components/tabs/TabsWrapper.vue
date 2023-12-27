<script>
import { ref } from 'vue'

export default {
  setup(props, { slots }) {
    const tabIcons = ref(slots.default().map((tab) => tab.props.icon))

    return tabIcons
  }
}
</script>

<template>
  {{ tabIcons }}
  <ul class="w-14 flex flex-col content-center items-center text-white bg-gray-800 flex-grow">
    <slot />
  </ul>
</template>

<style lang="scss" scoped>
li {
  @apply w-full;
}
</style>
