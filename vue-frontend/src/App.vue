<script lang="ts" setup>
import AppNavbar from './components/applicationFrame/AppNavbar.vue'
import AppFooter from './components/applicationFrame/AppFooter.vue'
</script>
<template>
  <div class="pf-v5-c-page dark">
    <AppNavbar />
    <main class="pf-v5-c-page__main">
      <RouterView />
    </main>
    <!-- <AppFooter class="self-end w-full" /> -->
  </div>
</template>
<style>
:root {
  --spacer-scaler: 0.5;

  --pf-v5-global--spacer--xs: calc(0.25rem * var(--spacer-scaler));
  --pf-v5-global--spacer--sm: calc(0.5rem * var(--spacer-scaler));
  --pf-v5-global--spacer--md: calc(1rem * var(--spacer-scaler));
  --pf-v5-global--spacer--lg: calc(1.5rem * var(--spacer-scaler));
  --pf-v5-global--spacer--xl: calc(2rem * var(--spacer-scaler));
  --pf-v5-global--spacer--2xl: calc(3rem * var(--spacer-scaler));
  --pf-v5-global--spacer--3xl: calc(4rem * var(--spacer-scaler));
  --pf-v5-global--spacer--4xl: calc(5rem * var(--spacer-scaler));
  --pf-v5-global--spacer--form-element: calc(0.375rem * var(--spacer-scaler));

  --font-size-scaler: 1;

  --pf-v5-global--icon--FontSize--sm: calc(0.75rem * var(--font-size-scaler));
  --pf-v5-global--icon--FontSize--md: calc(1rem * var(--font-size-scaler));
  --pf-v5-global--icon--FontSize--lg: calc(1.5rem * var(--font-size-scaler));
  --pf-v5-global--icon--FontSize--xl: calc(3.375rem * var(--font-size-scaler));
  --pf-v5-global--FontSize--4xl: calc(2.25rem * var(--font-size-scaler));
  --pf-v5-global--FontSize--3xl: calc(1.75rem * var(--font-size-scaler));
  --pf-v5-global--FontSize--2xl: calc(1.5rem * var(--font-size-scaler));
  --pf-v5-global--FontSize--xl: calc(1.25rem * var(--font-size-scaler));
  --pf-v5-global--FontSize--lg: calc(1.125rem * var(--font-size-scaler));
  --pf-v5-global--FontSize--md: calc(1rem * var(--font-size-scaler));
  --pf-v5-global--FontSize--sm: calc(0.875rem * var(--font-size-scaler));
  --pf-v5-global--FontSize--xs: calc(0.75rem * var(--font-size-scaler));

  --gutter-size-scaler: 0.75;

  --pf-v5-global--gutter: calc(1rem * var(--gutter-size-scaler));
  --pf-v5-global--gutter--md: calc(1.5rem * var(--gutter-size-scaler));
}
</style>
