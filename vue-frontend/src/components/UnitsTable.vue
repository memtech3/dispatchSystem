<script setup>
// Mock data
const units = [
  {
    unitID: '1A-10',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  },
  {
    unitID: 'E-11',
    type: 'Fire',
    status: 'En Route',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SFD'
  },
  {
    unitID: '1A-30',
    type: 'Police',
    status: 'On Scene',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  },
  {
    unitID: 'ALS-1',
    type: 'EMS',
    status: 'Out of Service',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SFD'
  },
  {
    unitID: '1A-36',
    type: 'Police',
    status: 'Distress',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  },
  {
    unitID: '1A-37',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  },
  {
    unitID: '7A-15',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  },
  {
    unitID: '7A-16',
    type: 'Police',
    status: 'Available',
    event: '',
    currentLocation: '123 Sesame Street',
    agency: 'SPD'
  }
]

// Columns
const columns = [
  { key: 'unitID', label: 'Unit ID' },
  { key: 'type', label: 'Type' },
  { key: 'status', label: 'Status' },
  { key: 'event', label: 'Event' },
  { key: 'currentLocation', label: 'Current Location' },
  { key: 'agency', label: 'Agency' }
]
</script>
<template>
  <div class="pf-v5-c-toolbar" id="compact-demo-toolbar">
    <div class="pf-v5-c-toolbar__content">
      <div class="pf-v5-c-toolbar__content-section pf-m-nowrap">
        <div class="pf-v5-c-toolbar__group pf-m-toggle-group pf-m-show-on-xl">
          <div class="pf-v5-c-toolbar__toggle">
            <button
              class="pf-v5-c-menu-toggle pf-m-plain"
              type="button"
              aria-expanded="false"
              aria-label="Show filters"
              aria-controls="compact-demo-toolbar-expandable-content"
            >
              <i class="fas fa-filter" aria-hidden="true"></i>
            </button>
          </div>
          <div class="pf-v5-c-toolbar__item pf-m-bulk-select">
            <div class="pf-v5-c-menu-toggle pf-m-split-button" id="compact-demo-toolbar-check">
              <label
                class="pf-v5-c-check pf-m-standalone"
                id="compact-demo-toolbar-check-check"
                for="compact-demo-toolbar-check-check-input"
              >
                <input
                  class="pf-v5-c-check__input"
                  type="checkbox"
                  id="compact-demo-toolbar-check-check-input"
                  name="compact-demo-toolbar-check-check-input"
                  aria-label="Standalone check"
                />
              </label>
              <button
                class="pf-v5-c-menu-toggle__button"
                type="button"
                aria-expanded="false"
                id="compact-demo-toolbar-menu-toggle-toggle-button"
                aria-label="Menu toggle"
              >
                <span class="pf-v5-c-menu-toggle__controls">
                  <span class="pf-v5-c-menu-toggle__toggle-icon">
                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                  </span>
                </span>
              </button>
            </div>
          </div>

          <div class="pf-v5-c-toolbar__item pf-m-search-filter">
            <div class="pf-v5-c-input-group" aria-label="search filter" role="group">
              <div class="pf-v5-c-input-group__item">
                <button
                  class="pf-v5-c-menu-toggle"
                  type="button"
                  aria-expanded="false"
                  id="compact-demo-toolbar-search-filter-menu"
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

          <div class="pf-v5-c-toolbar__group pf-m-filter-group">
            <div class="pf-v5-c-toolbar__item">
              <div class="pf-v5-c-select">
                <span id="compact-demo-toolbar-select-checkbox-status-label" hidden=""
                  >Choose many</span
                >

                <button
                  class="pf-v5-c-select__toggle"
                  type="button"
                  id="compact-demo-toolbar-select-checkbox-status-toggle"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-labelledby="compact-demo-toolbar-select-checkbox-status-label compact-demo-toolbar-select-checkbox-status-toggle"
                >
                  <div class="pf-v5-c-select__toggle-wrapper">
                    <span class="pf-v5-c-select__toggle-text">Status</span>
                  </div>
                  <span class="pf-v5-c-select__toggle-arrow">
                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                  </span>
                </button>

                <div class="pf-v5-c-select__menu" hidden="">
                  <fieldset class="pf-v5-c-select__menu-fieldset" aria-label="Select input">
                    <label
                      class="pf-v5-c-check pf-v5-c-select__menu-item pf-m-description"
                      id="compact-demo-toolbar-select-checkbox-status-active"
                      for="compact-demo-toolbar-select-checkbox-status-active-input"
                    >
                      <input
                        class="pf-v5-c-check__input"
                        type="checkbox"
                        aria-describedby="compact-demo-toolbar-select-checkbox-status-active-description"
                        id="compact-demo-toolbar-select-checkbox-status-active-input"
                        name="compact-demo-toolbar-select-checkbox-status-active-input"
                      />
                      <span class="pf-v5-c-check__label">Active</span>
                      <span
                        class="pf-v5-c-check__description"
                        id="compact-demo-toolbar-select-checkbox-status-active-description"
                        >This is a description</span
                      >
                    </label>
                    <label
                      class="pf-v5-c-check pf-v5-c-select__menu-item pf-m-description"
                      id="compact-demo-toolbar-select-checkbox-status-canceled"
                      for="compact-demo-toolbar-select-checkbox-status-canceled-input"
                    >
                      <input
                        class="pf-v5-c-check__input"
                        type="checkbox"
                        aria-describedby="compact-demo-toolbar-select-checkbox-status-canceled-description"
                        id="compact-demo-toolbar-select-checkbox-status-canceled-input"
                        name="compact-demo-toolbar-select-checkbox-status-canceled-input"
                      />
                      <span class="pf-v5-c-check__label">Canceled</span>
                      <span
                        class="pf-v5-c-check__description"
                        id="compact-demo-toolbar-select-checkbox-status-canceled-description"
                        >This is a really long description that describes the menu item. This is a
                        really long description that describes the menu item.</span
                      >
                    </label>
                    <label
                      class="pf-v5-c-check pf-v5-c-select__menu-item"
                      id="compact-demo-toolbar-select-checkbox-status-paused"
                      for="compact-demo-toolbar-select-checkbox-status-paused-input"
                    >
                      <input
                        class="pf-v5-c-check__input"
                        type="checkbox"
                        id="compact-demo-toolbar-select-checkbox-status-paused-input"
                        name="compact-demo-toolbar-select-checkbox-status-paused-input"
                      />
                      <span class="pf-v5-c-check__label">Paused</span>
                    </label>
                    <label
                      class="pf-v5-c-check pf-v5-c-select__menu-item"
                      id="compact-demo-toolbar-select-checkbox-status-warning"
                      for="compact-demo-toolbar-select-checkbox-status-warning-input"
                    >
                      <input
                        class="pf-v5-c-check__input"
                        type="checkbox"
                        id="compact-demo-toolbar-select-checkbox-status-warning-input"
                        name="compact-demo-toolbar-select-checkbox-status-warning-input"
                      />
                      <span class="pf-v5-c-check__label">Warning</span>
                    </label>
                    <label
                      class="pf-v5-c-check pf-v5-c-select__menu-item"
                      id="compact-demo-toolbar-select-checkbox-status-restarted"
                      for="compact-demo-toolbar-select-checkbox-status-restarted-input"
                    >
                      <input
                        class="pf-v5-c-check__input"
                        type="checkbox"
                        id="compact-demo-toolbar-select-checkbox-status-restarted-input"
                        name="compact-demo-toolbar-select-checkbox-status-restarted-input"
                      />
                      <span class="pf-v5-c-check__label">Restarted</span>
                    </label>
                  </fieldset>
                </div>
              </div>
            </div>
            <div class="pf-v5-c-toolbar__item">
              <div class="pf-v5-c-select">
                <span id="compact-demo-toolbar-select-checkbox-risk-label" hidden=""
                  >Choose many</span
                >

                <button
                  class="pf-v5-c-select__toggle"
                  type="button"
                  id="compact-demo-toolbar-select-checkbox-risk-toggle"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-labelledby="compact-demo-toolbar-select-checkbox-risk-label compact-demo-toolbar-select-checkbox-risk-toggle"
                >
                  <div class="pf-v5-c-select__toggle-wrapper">
                    <span class="pf-v5-c-select__toggle-text">Risk</span>
                  </div>
                  <span class="pf-v5-c-select__toggle-arrow">
                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                  </span>
                </button>

                <div class="pf-v5-c-select__menu" hidden="">
                  <fieldset class="pf-v5-c-select__menu-fieldset" aria-label="Select input">
                    <label
                      class="pf-v5-c-check pf-v5-c-select__menu-item pf-m-description"
                      id="compact-demo-toolbar-select-checkbox-risk-active"
                      for="compact-demo-toolbar-select-checkbox-risk-active-input"
                    >
                      <input
                        class="pf-v5-c-check__input"
                        type="checkbox"
                        aria-describedby="compact-demo-toolbar-select-checkbox-risk-active-description"
                        id="compact-demo-toolbar-select-checkbox-risk-active-input"
                        name="compact-demo-toolbar-select-checkbox-risk-active-input"
                      />
                      <span class="pf-v5-c-check__label">Active</span>
                      <span
                        class="pf-v5-c-check__description"
                        id="compact-demo-toolbar-select-checkbox-risk-active-description"
                        >This is a description</span
                      >
                    </label>
                    <label
                      class="pf-v5-c-check pf-v5-c-select__menu-item pf-m-description"
                      id="compact-demo-toolbar-select-checkbox-risk-canceled"
                      for="compact-demo-toolbar-select-checkbox-risk-canceled-input"
                    >
                      <input
                        class="pf-v5-c-check__input"
                        type="checkbox"
                        aria-describedby="compact-demo-toolbar-select-checkbox-risk-canceled-description"
                        id="compact-demo-toolbar-select-checkbox-risk-canceled-input"
                        name="compact-demo-toolbar-select-checkbox-risk-canceled-input"
                      />
                      <span class="pf-v5-c-check__label">Canceled</span>
                      <span
                        class="pf-v5-c-check__description"
                        id="compact-demo-toolbar-select-checkbox-risk-canceled-description"
                        >This is a really long description that describes the menu item. This is a
                        really long description that describes the menu item.</span
                      >
                    </label>
                    <label
                      class="pf-v5-c-check pf-v5-c-select__menu-item"
                      id="compact-demo-toolbar-select-checkbox-risk-paused"
                      for="compact-demo-toolbar-select-checkbox-risk-paused-input"
                    >
                      <input
                        class="pf-v5-c-check__input"
                        type="checkbox"
                        id="compact-demo-toolbar-select-checkbox-risk-paused-input"
                        name="compact-demo-toolbar-select-checkbox-risk-paused-input"
                      />
                      <span class="pf-v5-c-check__label">Paused</span>
                    </label>
                    <label
                      class="pf-v5-c-check pf-v5-c-select__menu-item"
                      id="compact-demo-toolbar-select-checkbox-risk-warning"
                      for="compact-demo-toolbar-select-checkbox-risk-warning-input"
                    >
                      <input
                        class="pf-v5-c-check__input"
                        type="checkbox"
                        id="compact-demo-toolbar-select-checkbox-risk-warning-input"
                        name="compact-demo-toolbar-select-checkbox-risk-warning-input"
                      />
                      <span class="pf-v5-c-check__label">Warning</span>
                    </label>
                    <label
                      class="pf-v5-c-check pf-v5-c-select__menu-item"
                      id="compact-demo-toolbar-select-checkbox-risk-restarted"
                      for="compact-demo-toolbar-select-checkbox-risk-restarted-input"
                    >
                      <input
                        class="pf-v5-c-check__input"
                        type="checkbox"
                        id="compact-demo-toolbar-select-checkbox-risk-restarted-input"
                        name="compact-demo-toolbar-select-checkbox-risk-restarted-input"
                      />
                      <span class="pf-v5-c-check__label">Restarted</span>
                    </label>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pf-v5-c-toolbar__item">
          <button class="pf-v5-c-button pf-m-plain" type="button" aria-label="Sort">
            <i class="fas fa-sort-amount-down pf-v5-m-mirror-inline-rtl" aria-hidden="true"></i>
          </button>
        </div>

        <div class="pf-v5-c-toolbar__item pf-m-pagination">
          <div class="pf-v5-c-pagination pf-m-compact">
            <div class="pf-v5-c-options-menu">
              <button
                class="pf-v5-c-options-menu__toggle pf-m-text pf-m-plain"
                type="button"
                id="compact-demo-toolbar-top-pagination-toggle"
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
                aria-labelledby="compact-demo-toolbar-top-pagination-toggle"
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
        id="compact-demo-toolbar-expandable-content"
        hidden=""
      ></div>
    </div>
  </div>
  <table
    class="pf-v5-c-table pf-m-compact pf-m-grid-lg"
    role="grid"
    aria-label="This is a compact table example"
    id="compact-demo-table"
  >
    <thead class="pf-v5-c-table__thead">
      <tr class="pf-v5-c-table__tr" role="row">
        <td class="pf-v5-c-table__td"></td>
        <th class="pf-v5-c-table__th" role="columnheader" scope="col">Unit ID</th>
        <th class="pf-v5-c-table__th" role="columnheader" scope="col">Type</th>
        <th class="pf-v5-c-table__th" role="columnheader" scope="col">Status</th>
        <th class="pf-v5-c-table__th" role="columnheader" scope="col">Event</th>
        <th class="pf-v5-c-table__th" role="columnheader" scope="col">Location</th>
        <th class="pf-v5-c-table__th" role="columnheader" scope="col">Agency</th>

        <th class="pf-v5-c-table__th pf-v5-c-table__icon" role="columnheader" scope="col"></th>
        <td class="pf-v5-c-table__td"></td>
      </tr>
    </thead>

    <tbody class="pf-v5-c-table__tbody" role="rowgroup">
      <tr v-for="unit in units" class="pf-v5-c-table__tr" role="row">
        <td class="pf-v5-c-table__td pf-v5-c-table__check" role="cell">
          <div class="pf-v5-c-check pf-m-standalone">
            <input
              class="pf-v5-c-check__input"
              type="checkbox"
              name="checkrow1"
              aria-labelledby="compact-demo-table-name1"
            />
          </div>
        </td>
        <th
          id="unit-row-{{ unit.unitID }}"
          class="pf-v5-c-table__th"
          role="columnheader"
          data-label="Contributor"
        >
          <span id="compact-demo-table-name1">{{ unit.unitID }}</span>
        </th>
        <td class="pf-v5-c-table__td" role="cell" data-label="Position">{{ unit.type }}</td>
        <td class="pf-v5-c-table__td" role="cell" data-label="Location">{{ unit.status }}</td>
        <td class="pf-v5-c-table__td" role="cell" data-label="Last seen">{{ unit.event }}</td>
        <td class="pf-v5-c-table__td" role="cell" data-label="Numbers">
          {{ unit.currentLocation }}
        </td>
        <td class="pf-v5-c-table__td" role="cell" data-label="Numbers">{{ unit.agency }}</td>
        <td class="pf-v5-c-table__td pf-v5-c-table__icon" role="cell" data-label="Icon">
          <i class="fas fa-check"></i>
        </td>
        <td class="pf-v5-c-table__td pf-v5-c-table__action" role="cell">
          <div class="pf-v5-c-dropdown">
            <button
              class="pf-v5-c-dropdown__toggle pf-m-plain"
              id="compact-demo-table-dropdown-kebab-1-button"
              aria-expanded="false"
              type="button"
              aria-label="Actions"
            >
              <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ul
              class="pf-v5-c-dropdown__menu pf-m-align-right"
              aria-labelledby="compact-demo-table-dropdown-kebab-1-button"
              hidden=""
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
                <button
                  class="pf-v5-c-dropdown__menu-item"
                  role="menuitem"
                  type="button"
                  disabled=""
                >
                  Disabled action
                </button>
              </li>
              <li class="pf-v5-c-divider" role="separator"></li>
              <li role="none">
                <a class="pf-v5-c-dropdown__menu-item" role="menuitem" href="#">Separated link</a>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="pf-v5-c-pagination pf-m-bottom">
    <div class="pf-v5-c-options-menu pf-m-top">
      <button
        class="pf-v5-c-options-menu__toggle pf-m-text pf-m-plain"
        type="button"
        id="{{page--id}}-pagination-options-menu-bottom-example-toggle"
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
        aria-labelledby="{{page--id}}-pagination-options-menu-bottom-example-toggle"
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
</template>
