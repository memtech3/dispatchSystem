<script setup>
import ArrowDownLongIcon from '@vue-patternfly/icons/arrow-down-long-icon'

defineProps({
  callID: {
    type: String,
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
  callLocation: {
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
    <div class="call-list-item-container pf-v5-c-card">
      <div class="call-category-label pf-v5-u-h-100" style="background-color: orange">
        <pf-icon>
          <ArrowDownLongIcon />
        </pf-icon>
      </div>
      <div class="pf-v5-u-p-xs">
        <div class="pf-v5-l-flex pf-m-column pf-m-space-items-md">
          <div class="pf-v5-l-flex pf-m-column pf-m-space-items-none">
            <div class="pf-v5-l-flex__item">
              <p id="data-list-static-bottom-example-data-list-item-1">
                <strong>{{ callTypeCode }}</strong
                >: {{ callTypeDescription }}
              </p>
            </div>
            <div class="pf-v5-l-flex__item">
              <small>
                {{ callLocation }}
              </small>
            </div>
          </div>
          <div class="pf-v5-l-flex pf-m-wrap">
            <div class="pf-v5-l-flex pf-m-space-items-xs">
              <div class="pf-v5-l-flex__item">
                <i class="fas fa-code" aria-hidden="true"></i>
              </div>
              <div class="pf-v5-l-flex__item">
                <span>4</span>
              </div>
            </div>
            <div class="pf-v5-l-flex pf-m-space-items-xs">
              <div class="pf-v5-l-flex__item">
                <i class="fas fa-cube" aria-hidden="true"></i>
              </div>
              <div class="pf-v5-l-flex__item">
                <span>5</span>
              </div>
            </div>
            <div class="pf-v5-l-flex__item">Updated 2 days ago</div>
          </div>
        </div>
      </div>
      <div class="">
        <button
          class="pf-v5-c-menu-toggle pf-m-plain pf-v5-u-pr-sm pf-v5-u-pl-0 pf-v5-u-py-xs"
          type="button"
          aria-expanded="false"
          aria-label="Actions"
        >
          <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
        </button>
      </div>
    </div>
</template>

<style>

.call-list-item-container {
  display: grid;
  grid-template-columns: 3.5rem 15rem 1rem;
}
</style>
