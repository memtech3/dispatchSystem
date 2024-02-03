<template>
  <div class="appGrid h-screen w-screen">
    <ApplicationFrameNavbar class="self-start w-full" />
    <main class="overflow-auto">
      <slot />
    </main>
    <ApplicationFrameFooter class="self-end w-full" />
  </div>
</template>
<script lang="ts" setup></script>

<style>
.appGrid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
</style>
