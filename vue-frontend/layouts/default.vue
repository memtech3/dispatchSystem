<template>
  <div
    class="grid grid-cols-1 grid-rows-[auto, 1fr, auto] gap-0 w-screen h-screen"
  >
    <ApplicationFrameNavbar class="self-start w-full" />
    <main class="overflow-auto">
      <slot />
    </main>
    <ApplicationFrameFooter class="self-end w-full" />
  </div>
</template>
<script lang="ts" setup></script>

<style></style>
