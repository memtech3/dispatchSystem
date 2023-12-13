<script setup>
import { computed } from 'vue'

import BarsIcon from '@vue-patternfly/icons/bars-icon'

defineProps({
  msg: {
    type: String,
    required: false
  }
})

const darkTheme = computed({
  get: () => document.documentElement.classList.contains('pf-v5-theme-dark'),
  set(value) {
    if (value) {
      document.documentElement.classList.add('pf-v5-theme-dark')
    } else {
      document.documentElement.classList.remove('pf-v5-theme-dark')
    }
  }
})
</script>

<template>
  <pf-masthead>
    <pf-masthead-toggle>
      <pf-page-toggle-button>
        <bars-icon />
      </pf-page-toggle-button>
    </pf-masthead-toggle>
    <pf-masthead-main>
      <pf-masthead-brand :to="{ name: 'home' }"> Logo </pf-masthead-brand>
    </pf-masthead-main>
    <pf-masthead-content>
      <pf-toolbar full-height>
        <pf-toolbar-content>
          <pf-toolbar-item>header-tools</pf-toolbar-item>
          <pf-toolbar-item align="right">
            <pf-switch v-model:checked="darkTheme" label="Dark theme" />
          </pf-toolbar-item>
        </pf-toolbar-content>
      </pf-toolbar>
    </pf-masthead-content>
  </pf-masthead>
</template>

<style scoped></style>
