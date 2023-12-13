<script setup>
import SampleMiddlePanel from '../components/dispatching/SampleMiddlePanel.vue'
import CallsPanel from '../components/dispatching/CallsPanel.vue'
</script>
<template>
  <div class="pf-v5-c-page" id="dashboard-demo">
    <div class="pf-v5-c-skip-to-content">
      <a class="pf-v5-c-button pf-m-primary" href="#main-content-dashboard-demo">Skip to content</a>
    </div>

    <main class="pf-v5-c-page__main" tabindex="-1" id="main-content-dashboard-demo">
      <section class="pf-v5-c-page__main-section pf-m-limit-width">
        <div class="pf-v5-c-page__main-body">
          <div class="pf-v5-l-grid pf-m-gutter">
            <div
              class="pf-v5-l-grid__item pf-m-gutter pf-m-4-col-on-lg pf-m-6-col-on-2xl"
              style="--pf-v5-l-grid--item--Order-on-lg: 3"
            >
              <div class="pf-v5-l-flex pf-m-column">
                <SampleMiddlePanel />
              </div>
            </div>
            <div
              class="pf-v5-l-grid__item pf-m-gutter pf-m-4-col-on-lg pf-m-3-col-on-2xl"
              style="--pf-v5-l-grid--item--Order-on-lg: 2"
            >
              <div class="pf-v5-l-flex pf-m-column pf-m-row-on-md pf-m-column-on-lg">
                <div class="pf-v5-l-flex__item pf-m-flex-1">
                  <CallsPanel />
                </div>
              </div>
            </div>
            <div
              class="pf-v5-l-grid__item pf-m-4-col-on-lg pf-m-3-col-on-2xl"
              style="--pf-v5-l-grid--item--Order-on-lg: 4"
            >
              <div class="pf-v5-l-flex pf-m-column">
                <CallsPanel />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
