<script setup lang="ts">
import 'fundamental-styles/dist/menu.css'
</script>
<template>
  <li class="fd-menu__item" role="presentation">
    <a class="fd-menu__link" href="#" role="menuitem">
      <span class="fd-menu__title">
        <slot></slot>
      </span>
    </a>
  </li>
</template>
