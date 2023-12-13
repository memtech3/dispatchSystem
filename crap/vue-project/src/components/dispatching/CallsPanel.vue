<script setup>
import CallsList from './CallsList.vue'
</script>

<template>
  <div class="pf-v5-c-card pf-m-full-height" id="dashboard-demo-events-card-1">
    <div class="pf-v5-c-card__header">
      <div class="pf-v5-c-card__actions pf-m-no-offset">
        <div class="pf-v5-c-select">
          <span id="dashboard-demo-events-card-1-select-dropdown-label" hidden>Choose one</span>

          <button
            class="pf-v5-c-select__toggle pf-m-plain"
            type="button"
            id="dashboard-demo-events-card-1-select-dropdown-toggle"
            aria-haspopup="true"
            aria-expanded="false"
            aria-labelledby="dashboard-demo-events-card-1-select-dropdown-label dashboard-demo-events-card-1-select-dropdown-toggle"
          >
            <div class="pf-v5-c-select__toggle-wrapper">
              <span class="pf-v5-c-select__toggle-text">Status</span>
            </div>
            <span class="pf-v5-c-select__toggle-arrow">
              <i class="fas fa-caret-down" aria-hidden="true"></i>
            </span>
          </button>

          <ul
            class="pf-v5-c-select__menu pf-m-align-right"
            role="listbox"
            aria-labelledby="dashboard-demo-events-card-1-select-dropdown-label"
            hidden
          >
            <li role="presentation">
              <button class="pf-v5-c-select__menu-item" role="option">Running</button>
            </li>
            <li role="presentation">
              <button
                class="pf-v5-c-select__menu-item pf-m-selected"
                role="option"
                aria-selected="true"
              >
                Stopped
                <span class="pf-v5-c-select__menu-item-icon">
                  <i class="fas fa-check" aria-hidden="true"></i>
                </span>
              </button>
            </li>
            <li role="presentation">
              <button class="pf-v5-c-select__menu-item" role="option">Down</button>
            </li>
            <li role="presentation">
              <button class="pf-v5-c-select__menu-item" role="option">Degraded</button>
            </li>
            <li role="presentation">
              <button class="pf-v5-c-select__menu-item" role="option">Needs maintenance</button>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="pf-v5-c-card__title"
        id="dashboard-demo-events-card-1-title1"
        style="padding-block-start: 3px"
      >
        <h2 class="pf-v5-c-title pf-m-xl">Events</h2>
      </div>
    </div>
    <div class="pf-v5-c-card__body pf-v5-l-flex pf-m-gap-none">
      <CallsList call-type="Pending" :call-count="5" />
      <!-- <div class="pf-v5-c-divider pf-m-vertical pf-m-inset-md" role="separator"></div> -->
      <CallsList call-type="Assigned" :call-count="6" />
    </div>
    <hr class="pf-v5-c-divider" />
    <div class="pf-v5-c-card__footer">
      <a href="#">View all events</a>
    </div>
  </div>
</template>
