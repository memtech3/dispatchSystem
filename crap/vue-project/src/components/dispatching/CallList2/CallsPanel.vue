<script setup>
import CallsList from './CallsList.vue'
</script>

<template>
  <div class="pf-v5-c-card pf-v5-u-h-100 pf-v5-u-pl-md">
    <div class="pf-v5-c-toolbar">
      <div class="pf-v5-c-toolbar__content">
        <div class="pf-v5-c-toolbar__content-section pf-m-nowrap">
          <div class="pf-v5-c-toolbar__group pf-m-toggle-group pf-m-show-on-xl">
            <div class="pf-v5-c-toolbar__toggle">
              <button
                class="pf-v5-c-button pf-m-plain"
                type="button"
                aria-label="Show filters"
                aria-expanded="false"
                aria-controls="-expandable-content"
              >
                <i class="fas fa-filter" aria-hidden="true"></i>
              </button>
            </div>

            <div class="pf-v5-c-toolbar__item pf-m-search-filter">
              <div class="pf-v5-c-input-group" aria-label="search filter" role="group">
                <div class="pf-v5-c-input-group__item">
                  <div class="pf-v5-c-select" style="width: 124px">
                    <span id="-select-name-label" hidden="">Choose one</span>

                    <button
                      class="pf-v5-c-select__toggle"
                      type="button"
                      id="-select-name-toggle"
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-labelledby="-select-name-label -select-name-toggle"
                    >
                      <div class="pf-v5-c-select__toggle-wrapper">
                        <span class="pf-v5-c-select__toggle-icon">
                          <i class="fas fa-filter" aria-hidden="true"></i>
                        </span>
                        <span class="pf-v5-c-select__toggle-text">Name</span>
                      </div>
                      <span class="pf-v5-c-select__toggle-arrow">
                        <i class="fas fa-caret-down" aria-hidden="true"></i>
                      </span>
                    </button>

                    <ul
                      class="pf-v5-c-select__menu"
                      role="listbox"
                      aria-labelledby="-select-name-label"
                      hidden=""
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
                        <button class="pf-v5-c-select__menu-item" role="option">
                          Needs maintenance
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="pf-v5-c-input-group__item pf-m-fill">
                  <div class="pf-v5-c-text-input-group">
                    <div class="pf-v5-c-text-input-group__main pf-m-icon">
                      <span class="pf-v5-c-text-input-group__text">
                        <span class="pf-v5-c-text-input-group__icon">
                          <i class="fas fa-fw fa-search"></i>
                        </span>
                        <input
                          class="pf-v5-c-text-input-group__text-input"
                          type="text"
                          placeholder="Filter by name"
                          value=""
                          aria-label="Search input"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pf-v5-c-overflow-menu" id="-overflow-menu">
            <div
              class="pf-v5-c-overflow-menu__content pf-v5-u-display-none pf-v5-u-display-flex-on-lg"
            ></div>
            <div class="pf-v5-c-overflow-menu__control">
              <div class="pf-v5-c-dropdown">
                <button
                  class="pf-v5-c-button pf-v5-c-dropdown__toggle pf-m-plain"
                  type="button"
                  id="-overflow-menu-dropdown-toggle"
                  aria-label="Dropdown with additional options"
                  aria-expanded="false"
                >
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul
                  class="pf-v5-c-dropdown__menu"
                  role="menu"
                  aria-labelledby="-overflow-menu-dropdown-toggle"
                  hidden=""
                >
                  <li role="none">
                    <button role="menuitem" class="pf-v5-c-dropdown__menu-item">Action 7</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          class="pf-v5-c-toolbar__expandable-content pf-m-hidden"
          id="-expandable-content"
          hidden=""
        ></div>
      </div>
    </div>
    <div class="pf-v5-l-level">
      <CallsList call-type="Pending" :call-count="5" />
      <CallsList call-type="Assigned" :call-count="6" />
    </div>
  </div>
</template>
