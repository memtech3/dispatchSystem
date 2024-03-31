<template>
  <header
    class="pf-v5-c-masthead"
    id="nav-horizontal-example-masthead"
    style="
      --pf-v5-c-masthead--m-display-inline__main--MinHeight: 1rem;
      --pf-v5-c-masthead--m-display-inline__content--MinHeight: 1rem;
    "
  >
    <div class="pf-v5-c-masthead__main">
      <a class="pf-v5-c-masthead__brand" href="#">
        <img
          class="pf-v5-c-brand"
          src="https://patternfly.org/assets/images/pf-logo.svg"
          alt="PatternFly logo"
          style="--pf-v5-c-brand--Height: 36px"
        />
      </a>
    </div>
    <div class="pf-v5-c-masthead__content">
      <div
        class="pf-v5-c-toolbar pf-m-full-height pf-m-static"
        id="nav-horizontal-example-masthead-toolbar"
      >
        <div class="pf-v5-c-toolbar__content">
          <div class="pf-v5-c-toolbar__content-section">
            <div
              class="pf-v5-c-toolbar__item pf-m-overflow-container"
              style="--pf-v5-c-toolbar__item--MinWidth: 18ch"
            >
              <nav
                class="pf-v5-c-nav pf-m-horizontal pf-m-scrollable"
                id="-horizontal-nav"
                aria-label="Global"
              >
                <button class="pf-v5-c-nav__scroll-button" disabled="" aria-label="Scroll left">
                  <i class="fas fa-angle-left" aria-hidden="true"></i>
                </button>
                <ul class="pf-v5-c-nav__list" role="list">
                  <li class="pf-v5-c-nav__item">
                    <a href="#" class="pf-v5-c-nav__link">Horizontal nav item 1</a>
                  </li>
                  <li class="pf-v5-c-nav__item">
                    <a href="#" class="pf-v5-c-nav__link">Horizontal nav item 2</a>
                  </li>
                  <li class="pf-v5-c-nav__item">
                    <a href="#" class="pf-v5-c-nav__link">Horizontal nav item 3</a>
                  </li>
                  <li class="pf-v5-c-nav__item">
                    <a href="#" class="pf-v5-c-nav__link">Horizontal nav item 4</a>
                  </li>
                  <li class="pf-v5-c-nav__item">
                    <a href="#" class="pf-v5-c-nav__link pf-m-current" aria-current="page"
                      >Horizontal nav item 5</a
                    >
                  </li>
                </ul>
                <button class="pf-v5-c-nav__scroll-button" aria-label="Scroll right">
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                </button>
              </nav>
            </div>
            <div
              class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-align-right pf-m-spacer-none pf-m-spacer-md-on-md"
            >
              <div
                class="pf-v5-c-toolbar__group pf-m-icon-button-group pf-m-hidden pf-m-visible-on-lg"
              >
                <div class="pf-v5-c-toolbar__item">
                  <button
                    class="pf-v5-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Application launcher"
                  >
                    <i class="fas fa-th" aria-hidden="true"></i>
                  </button>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <button
                    class="pf-v5-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Settings"
                  >
                    <i class="fas fa-cog" aria-hidden="true"></i>
                  </button>
                </div>
                <div class="pf-v5-c-toolbar__item">
                  <button
                    class="pf-v5-c-menu-toggle pf-m-plain"
                    type="button"
                    aria-expanded="false"
                    aria-label="Help"
                  >
                    <i class="fas fa-question-circle" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div class="pf-v5-c-toolbar__item pf-m-hidden-on-lg">
                <button
                  class="pf-v5-c-menu-toggle pf-m-plain"
                  type="button"
                  aria-expanded="false"
                  aria-label="Actions"
                >
                  <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div class="pf-v5-c-toolbar__item pf-m-hidden pf-m-visible-on-sm">
              <button
                class="pf-v5-c-menu-toggle pf-m-full-height"
                type="button"
                aria-expanded="false"
              >
                <span class="pf-v5-c-menu-toggle__icon">
                  <img
                    class="pf-v5-c-avatar"
                    alt="Avatar image"
                    src="https://patternfly.org/assets/images/img_avatar-light.svg"
                  />
                </span>
                <span class="pf-v5-c-menu-toggle__text">Ned Username</span>
                <span class="pf-v5-c-menu-toggle__controls">
                  <span class="pf-v5-c-menu-toggle__toggle-icon">
                    <i class="fas fa-caret-down" aria-hidden="true"></i>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
