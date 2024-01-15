<template>
  <div class="flex flex-col min-h-screen">
    <ApplicationFrameNavbar class="fixed w-full top-0" />

    <div class="flex-1 overflow-y-auto p-4">
      <main>
        <slot />
      </main>
    </div>

    <ApplicationFrameFooter class="fixed w-full bottom-0" />
  </div>
</template>
<script lang="ts" setup></script>

<style></style>
