<script setup>
import CallListItem from './CallListItem.vue'
defineProps({
  callType: {
    type: String,
    required: true
  },
  callCount: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="">
    <div>
      <CallListItem call-i-d="FD1" call-type-code="10-8" call-type-description="test" />
      <CallListItem call-i-d="FD2" call-type-code="10-8" call-type-description="test" />
      <CallListItem call-i-d="FD3" call-type-code="10-8" call-type-description="test" />
      <CallListItem call-i-d="FD4" call-type-code="10-8" call-type-description="test" />
    </div>
  <div class="pf-v5-c-pagination pf-m-bottom pf-m-static">
    <div class="pf-v5-c-options-menu pf-m-top">
      <span class="pf-v5-c-options-menu__toggle-text">
        <b>1 - 10</b>&nbsp;of&nbsp;
        <b>36</b>
      </span>
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
