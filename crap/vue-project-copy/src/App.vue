<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
      <rux-global-status-bar include-icon="true" app-state="Production" app-state-color="tag1" username="Joan Smith" app-domain="Astro" app-name="Dashboard" app-version="4.0 Alpha" menu-icon="apps">
        <rux-clock></rux-clock>
        <rux-button slot="right-side">Emergency shut off</rux-button>
    </rux-global-status-bar>
    <RouterView />
</template>

<style scoped></style>
