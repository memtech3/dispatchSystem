<script setup>
defineProps({
  callID: {
    type: Number,
    required: false
  },
  callTypeCode: {
    type: String,
    required: false
  },
  callTypeDescription: {
    type: String,
    required: false
  },
  assignedResources: {
    type: Array,
    required: false
  }
})
</script>
<template>
  <li class="pf-v5-c-notification-drawer__list-item pf-m-hoverable pf-m-custom" tabindex="0">
    <div class="pf-v5-c-notification-drawer__list-item-header">
      <span class="pf-v5-c-notification-drawer__list-item-header-icon">
        <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>
      </span>
      <h2 class="pf-v5-c-notification-drawer__list-item-header-title">
        <span class="pf-v5-screen-reader">Custom notification:</span>
        Call ID: Call type
      </h2>
    </div>
    <div class="pf-v5-c-notification-drawer__list-item-action">
      <div class="pf-v5-c-dropdown">
        <button
          class="pf-v5-c-dropdown__toggle pf-m-plain"
          id="notification-drawer-basicdropdown-kebab-2-button"
          aria-expanded="false"
          type="button"
          aria-label="Actions"
        >
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <ul
          class="pf-v5-c-dropdown__menu pf-m-align-right"
          aria-labelledby="notification-drawer-basicdropdown-kebab-2-button"
          hidden
          role="menu"
        >
          <li role="none">
            <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Link</a>
          </li>
          <li role="none">
            <button class="pf-v5-c-dropdown__menu-item" role="menuitem" type="button">
              Action
            </button>
          </li>
          <li role="none">
            <a
              class="pf-v5-c-dropdown__menu-item pf-m-disabled"
              role="menuitem"
              href="#"
              aria-disabled="true"
              tabindex="-1"
              >Disabled link</a
            >
          </li>
          <li role="none">
            <button class="pf-v5-c-dropdown__menu-item" role="menuitem" type="button" disabled>
              Disabled action
            </button>
          </li>
          <li class="pf-v5-c-divider" role="separator"></li>
          <li role="none">
            <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Separated link</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="pf-v5-c-notification-drawer__list-item-description">Short summary of call</div>
  </li>
</template>
