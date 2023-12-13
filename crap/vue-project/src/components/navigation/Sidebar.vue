<script setup>
defineProps({
  msg: {
    type: String,
    required: false
  }
})
</script>

<template>
  <pf-page-sidebar>
    <pf-nav>
      <pf-nav-group title="Overview">
        <pf-nav-item :to="{ name: 'home' }">Home</pf-nav-item>
        <pf-nav-item :to="{ name: 'about' }">About</pf-nav-item>
      </pf-nav-group>
    </pf-nav>
  </pf-page-sidebar>
</template>

<style scoped></style>
