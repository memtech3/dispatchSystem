<template>
  <div class="pf-v5-c-card pf-m-expanded pf-m-full-height" id="dashboard-demo-status-card-1">
    <div class="pf-v5-c-card__header">
      <h2 class="pf-v5-c-title pf-m-xl">Status</h2>
    </div>
    <div class="pf-v5-c-card__body">
      <div
        class="pf-v5-l-gallery pf-m-gutter"
        style="
          --pf-v5-l-gallery--GridTemplateColumns--min: 100%;
          --pf-v5-l-gallery--GridTemplateColumns--min-on-sm: 180px;
          --pf-v5-l-gallery--GridTemplateColumns--min-on-lg: 150px;
          --pf-v5-l-gallery--GridTemplateColumns--max-on-sm: 1fr;
        "
      >
        <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
          <div class="pf-v5-l-flex__item">
            <i class="fas fa-check-circle pf-v5-u-success-color-100" aria-hidden="true"></i>
          </div>
          <div class="pf-v5-l-flex__item">
            <span>Cluster</span>
          </div>
        </div>
        <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
          <div class="pf-v5-l-flex__item">
            <i class="fas fa-exclamation-circle pf-v5-u-danger-color-100" aria-hidden="true"></i>
          </div>
          <div class="pf-v5-l-flex__item pf-v5-u-text-nowrap">
            <span class="popover-parent">
              <a href="#">Control Panel</a>
            </span>
          </div>
        </div>
        <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
          <div class="pf-v5-l-flex__item pf-v5-u-text-nowrap">
            <i class="fas fa-exclamation-circle pf-v5-u-danger-color-100" aria-hidden="true"></i>
          </div>
          <div class="pf-v5-l-flex pf-m-column pf-m-space-items-none">
            <div class="pf-v5-l-flex__item">
              <a href="#">Operators</a>
            </div>
            <div class="pf-v5-l-flex__item">
              <span class="pf-v5-u-color-200">1 degraged</span>
            </div>
          </div>
        </div>
        <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
          <div class="pf-v5-l-flex__item">
            <i class="fas fa-check-circle pf-v5-u-success-color-100" aria-hidden="true"></i>
          </div>
          <div class="pf-v5-l-flex pf-m-column pf-m-space-items-none">
            <div class="pf-v5-l-flex__item">
              <a href="#">Image Vulnerabilities</a>
            </div>
            <div class="pf-v5-l-flex__item">
              <span class="pf-v5-u-color-200">0 vulnerabilities</span>
            </div>
          </div>
        </div>
        <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
          <div class="pf-v5-l-flex__item">
            <i class="fas fa-check-circle pf-v5-u-success-color-100" aria-hidden="true"></i>
          </div>
          <div class="pf-v5-l-flex pf-m-column pf-m-space-items-none">
            <div class="pf-v5-l-flex__item">
              <a href="#">Storage</a>
            </div>
            <div class="pf-v5-l-flex__item">
              <span class="pf-v5-u-color-200">Degraded</span>
            </div>
          </div>
        </div>
        <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
          <div class="pf-v5-l-flex__item">
            <i class="fas fa-check-circle pf-v5-u-success-color-100" aria-hidden="true"></i>
          </div>
          <div class="pf-v5-l-flex pf-m-column pf-m-space-items-none">
            <div class="pf-v5-l-flex__item">
              <a href="#">Hardware</a>
            </div>
          </div>
        </div>
        <div class="pf-v5-l-flex pf-m-space-items-sm pf-m-nowrap">
          <div class="pf-v5-l-flex__item">
            <i class="fas fa-check-circle pf-v5-u-success-color-100" aria-hidden="true"></i>
          </div>
          <div class="pf-v5-l-flex pf-m-column pf-m-space-items-none">
            <div class="pf-v5-l-flex__item">
              <a href="#">Insights</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="pf-v5-c-divider" />
    <div class="pf-v5-c-notification-drawer">
      <div class="pf-v5-c-notification-drawer__body">
        <section class="pf-v5-c-notification-drawer__group">
          <button class="pf-v5-c-notification-drawer__group-toggle" aria-expanded="false">
            <div class="pf-v5-c-notification-drawer__group-toggle-title">
              <div class="pf-v5-l-flex">
                <div class="pf-v5-l-flex__item pf-m-spacer-md">Notifications</div>
                <div class="pf-v5-c-label-group">
                  <div class="pf-v5-c-label-group__main">
                    <ul class="pf-v5-c-label-group__list" role="list" aria-label="Group of labels">
                      <li class="pf-v5-c-label-group__list-item">
                        <span class="pf-v5-c-label pf-m-red">
                          <span class="pf-v5-c-label__content">
                            <span class="pf-v5-c-label__icon">
                              <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
                            </span>
                            <span class="pf-v5-c-label__text">1</span>
                          </span>
                        </span>
                      </li>
                      <li class="pf-v5-c-label-group__list-item">
                        <span class="pf-v5-c-label pf-m-orange">
                          <span class="pf-v5-c-label__content">
                            <span class="pf-v5-c-label__icon">
                              <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
                            </span>
                            <span class="pf-v5-c-label__text">1</span>
                          </span>
                        </span>
                      </li>
                      <li class="pf-v5-c-label-group__list-item">
                        <span class="pf-v5-c-label pf-m-green">
                          <span class="pf-v5-c-label__content">
                            <span class="pf-v5-c-label__icon">
                              <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
                            </span>
                            <span class="pf-v5-c-label__text">3</span>
                          </span>
                        </span>
                      </li>
                      <li class="pf-v5-c-label-group__list-item">
                        <span class="pf-v5-c-label pf-m-blue">
                          <span class="pf-v5-c-label__content">
                            <span class="pf-v5-c-label__icon">
                              <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
                            </span>
                            <span class="pf-v5-c-label__text">3</span>
                          </span>
                        </span>
                      </li>
                      <li class="pf-v5-c-label-group__list-item">
                        <span class="pf-v5-c-label pf-m-cyan">
                          <span class="pf-v5-c-label__content">
                            <span class="pf-v5-c-label__icon">
                              <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
                            </span>
                            <span class="pf-v5-c-label__text">3</span>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <span class="pf-v5-c-notification-drawer__group-toggle-icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </button>
          <ul class="pf-v5-c-notification-drawer__list" role="list" hidden>
            <li
              class="pf-v5-c-notification-drawer__list-item pf-m-hoverable pf-m-danger"
              tabindex="0"
            >
              <div class="pf-v5-c-notification-drawer__list-item-header">
                <span class="pf-v5-c-notification-drawer__list-item-header-icon">
                  <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
                </span>
                <h2
                  class="pf-v5-c-notification-drawer__list-item-header-title pf-v5-u-danger-color-200"
                >
                  <span class="pf-v5-screen-reader">Danger notification:</span>
                  Critical alert regarding control plane
                </h2>
              </div>
              <div class="pf-v5-c-notification-drawer__list-item-description">
                This is a long description to show how the title will wrap if it is long and wraps
                to multiple lines.
              </div>
            </li>
            <li
              class="pf-v5-c-notification-drawer__list-item pf-m-hoverable pf-m-warning"
              tabindex="0"
            >
              <div class="pf-v5-c-notification-drawer__list-item-header">
                <span class="pf-v5-c-notification-drawer__list-item-header-icon">
                  <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
                </span>
                <h2
                  class="pf-v5-c-notification-drawer__list-item-header-title pf-v5-u-warning-color-200"
                >
                  <span class="pf-v5-screen-reader">Warning notification:</span>
                  Warning alert
                </h2>
              </div>
              <div class="pf-v5-c-notification-drawer__list-item-description">
                This is a warning notification description.
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
