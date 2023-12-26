<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'
</script>

<template>
  <ul
    class="w-14 flex flex-col content-center items-center text-white bg-gray-800 flex-grow"
  >
    <li>
      <SidebarItem state="active" icon="bi bi-collection"/>
    </li>
    <li>
      <SidebarItem state="default" icon="bi bi-chat"/>
    </li>
    <li>
      <SidebarItem state="default" icon="bi bi-telephone"/>
    </li>
    <li>
      <SidebarItem state="default" icon="bi bi-people"/>
    </li>
    <li>
      <SidebarItem state="disabled" icon="bi bi-person-check"/>
    </li>
    <li>
      <SidebarItem state="disabled" icon="bi bi-paperclip"/>
    </li>
    <li>
      <SidebarItem state="disabled" icon="bi bi-sticky"/>
    </li>
    <li>
      <SidebarItem state="disabled" icon="bi bi-clipboard" />
    </li>
    <li>
      <SidebarItem state="disabled" icon="bi bi-geo-alt"/>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
li {
  @apply w-full;
}
</style>
