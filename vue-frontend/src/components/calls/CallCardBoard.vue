<script setup lang="ts">
import CallList from './CallList.vue'
</script>

<template>
  <div class="pf-v5-c-card pf-m-compact pf-v5-u-h-100" id="dashboard-demo-details-card-1">
    <div class="pf-v5-c-card__title">
      <h2 class="pf-v5-c-title pf-m-xl">Calls Board</h2>
    </div>

    <div class="pf-v5-c-toolbar" id="data-list-static-bottom-example-toolbar">
      <div class="pf-v5-c-toolbar__content">
        <div class="pf-v5-c-toolbar__content-section pf-m-nowrap">
          <div class="pf-v5-c-toolbar__group pf-m-toggle-group pf-m-show-on-xl">
            <div class="pf-v5-c-toolbar__toggle">
              <button
                class="pf-v5-c-menu-toggle pf-m-plain"
                type="button"
                aria-expanded="false"
                aria-label="Show filters"
                aria-controls="data-list-static-bottom-example-toolbar-expandable-content"
              >
                <i class="fas fa-filter" aria-hidden="true"></i>
              </button>
            </div>

            <div class="pf-v5-c-toolbar__item pf-m-search-filter">
              <div class="pf-v5-c-input-group" aria-label="search filter" role="group">
                <div class="pf-v5-c-input-group__item">
                  <button
                    class="pf-v5-c-menu-toggle"
                    type="button"
                    aria-expanded="false"
                    id="data-list-static-bottom-example-toolbar-search-filter-menu"
                  >
                    <span class="pf-v5-c-menu-toggle__icon">
                      <i class="fas fa-filter" aria-hidden="true"></i>
                    </span>
                    <span class="pf-v5-c-menu-toggle__text">Name</span>
                    <span class="pf-v5-c-menu-toggle__controls">
                      <span class="pf-v5-c-menu-toggle__toggle-icon">
                        <i class="fas fa-caret-down" aria-hidden="true"></i>
                      </span>
                    </span>
                  </button>
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

          <div
            class="pf-v5-c-overflow-menu"
            id="data-list-static-bottom-example-toolbar-overflow-menu"
          >
            <div
              class="pf-v5-c-overflow-menu__content pf-v5-u-display-none pf-v5-u-display-flex-on-lg"
            >
              <div class="pf-v5-c-overflow-menu__group pf-m-button-group">
                <div class="pf-v5-c-overflow-menu__item">
                  <button class="pf-v5-c-button pf-m-primary" type="button">Create instance</button>
                </div>

                <div class="pf-v5-c-overflow-menu__item">
                  <button class="pf-v5-c-button pf-m-secondary" type="button">Action</button>
                </div>
              </div>
            </div>
            <div class="pf-v5-c-overflow-menu__control">
              <div class="pf-v5-c-dropdown">
                <button
                  class="pf-v5-c-button pf-v5-c-dropdown__toggle pf-m-plain"
                  type="button"
                  id="data-list-static-bottom-example-toolbar-overflow-menu-dropdown-toggle"
                  aria-label="Dropdown with additional options"
                  aria-expanded="false"
                >
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <ul
                  class="pf-v5-c-dropdown__menu"
                  role="menu"
                  aria-labelledby="data-list-static-bottom-example-toolbar-overflow-menu-dropdown-toggle"
                  hidden=""
                >
                  <li role="none">
                    <button role="menuitem" class="pf-v5-c-dropdown__menu-item">Action 7</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="pf-v5-c-toolbar__item pf-m-pagination">
            <div class="pf-v5-c-pagination pf-m-compact">
              <div class="pf-v5-c-options-menu">
                <button
                  class="pf-v5-c-options-menu__toggle pf-m-text pf-m-plain"
                  type="button"
                  id="data-list-static-bottom-example-toolbar-top-pagination-toggle"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                >
                  <span class="pf-v5-c-options-menu__toggle-text">
                    <b>1 - 10</b>&nbsp;of&nbsp;
                    <b>36</b>
                  </span>
                  <div class="pf-v5-c-options-menu__toggle-icon">
                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                  </div>
                </button>
                <ul
                  class="pf-v5-c-options-menu__menu"
                  role="menu"
                  aria-labelledby="data-list-static-bottom-example-toolbar-top-pagination-toggle"
                  hidden=""
                >
                  <li role="none">
                    <button class="pf-v5-c-options-menu__menu-item" type="button" role="menuitem">
                      5 per page
                    </button>
                  </li>
                  <li role="none">
                    <button class="pf-v5-c-options-menu__menu-item" type="button" role="menuitem">
                      10 per page
                      <div class="pf-v5-c-options-menu__menu-item-icon">
                        <i class="fas fa-check" aria-hidden="true"></i>
                      </div>
                    </button>
                  </li>
                  <li role="none">
                    <button class="pf-v5-c-options-menu__menu-item" type="button" role="menuitem">
                      20 per page
                    </button>
                  </li>
                </ul>
              </div>
              <nav class="pf-v5-c-pagination__nav" aria-label="Toolbar top pagination">
                <div class="pf-v5-c-pagination__nav-control pf-m-prev">
                  <button
                    class="pf-v5-c-button pf-m-plain"
                    type="button"
                    disabled=""
                    aria-label="Go to previous page"
                  >
                    <i class="fas fa-angle-left" aria-hidden="true"></i>
                  </button>
                </div>
                <div class="pf-v5-c-pagination__nav-control pf-m-next">
                  <button
                    class="pf-v5-c-button pf-m-plain"
                    type="button"
                    aria-label="Go to next page"
                  >
                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div
          class="pf-v5-c-toolbar__expandable-content pf-m-hidden"
          id="data-list-static-bottom-example-toolbar-expandable-content"
          hidden=""
        ></div>
      </div>
    </div>
    <div class="pf-v5-c-card__body">
      <div class="grid grid-cols-2 space-x-2 overflow-auto">
        <CallList />
        <CallList />
      </div>
    </div>
    <div class="pf-v5-c-pagination pf-m-bottom pf-m-static">
      <div class="pf-v5-c-options-menu pf-m-top">
        <button
          class="pf-v5-c-options-menu__toggle pf-m-text pf-m-plain"
          type="button"
          id="{{page--id}}pagination-options-menu-bottom-example-static-toggle"
          aria-haspopup="listbox"
          aria-expanded="false"
        >
          <span class="pf-v5-c-options-menu__toggle-text">
            <b>1 - 10</b>&nbsp;of&nbsp;
            <b>36</b>
          </span>
          <div class="pf-v5-c-options-menu__toggle-icon">
            <i class="fas fa-caret-down" aria-hidden="true"></i>
          </div>
        </button>
        <ul
          class="pf-v5-c-options-menu__menu pf-m-top"
          role="menu"
          aria-labelledby="{{page--id}}pagination-options-menu-bottom-example-static-toggle"
          hidden=""
        >
          <li role="none">
            <button class="pf-v5-c-options-menu__menu-item" type="button" role="menuitem">
              5 per page
            </button>
          </li>
          <li role="none">
            <button class="pf-v5-c-options-menu__menu-item" type="button" role="menuitem">
              10 per page
              <div class="pf-v5-c-options-menu__menu-item-icon">
                <i class="fas fa-check" aria-hidden="true"></i>
              </div>
            </button>
          </li>
          <li role="none">
            <button class="pf-v5-c-options-menu__menu-item" type="button" role="menuitem">
              20 per page
            </button>
          </li>
        </ul>
      </div>
      <nav class="pf-v5-c-pagination__nav" aria-label="Pagination">
        <div class="pf-v5-c-pagination__nav-control pf-m-first">
          <button
            class="pf-v5-c-button pf-m-plain"
            type="button"
            disabled=""
            aria-label="Go to first page"
          >
            <i class="fas fa-angle-double-left" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-v5-c-pagination__nav-control pf-m-prev">
          <button
            class="pf-v5-c-button pf-m-plain"
            type="button"
            disabled=""
            aria-label="Go to previous page"
          >
            <i class="fas fa-angle-left" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-v5-c-pagination__nav-page-select">
          <span class="pf-v5-c-form-control">
            <input aria-label="Current page" type="number" min="1" max="4" value="1" />
          </span>
          <span aria-hidden="true">of 4</span>
        </div>
        <div class="pf-v5-c-pagination__nav-control pf-m-next">
          <button class="pf-v5-c-button pf-m-plain" type="button" aria-label="Go to next page">
            <i class="fas fa-angle-right" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-v5-c-pagination__nav-control pf-m-last">
          <button class="pf-v5-c-button pf-m-plain" type="button" aria-label="Go to last page">
            <i class="fas fa-angle-double-right" aria-hidden="true"></i>
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>
