<script setup lang="ts">
import AddSeedDataButton from '@/components/AddSeedDataButton.vue'
</script>
<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Navbar</span>
      <ul class="nav nav-underline">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link" active-class="active">Dashboard</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/commandLog" class="nav-link" active-class="active"
            >Command Log</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink to="/configuration" class="nav-link" active-class="active"
            >Configuration</RouterLink
          >
        </li>
      </ul>
      <AddSeedDataButton />
    </div>
  </nav>
</template>
