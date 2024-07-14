<script setup lang="ts">
import { gql, useMutation } from '@urql/vue'

const { executeMutation: createEvent } = useMutation(gql`
  mutation ($id: ID!, $title: String!) {
    updateTodo(id: $id, title: $title) {
      id
      title
    }
  }
`)
</script>
<template>
  <form class="pf-v5-c-form" novalidate>
    <div class="pf-v5-c-form__group">
      <div class="pf-v5-c-form__group-label">
        <label class="pf-v5-c-form__label" for="-name">
          <span class="pf-v5-c-form__label-text">Full name</span>&nbsp;<span
            class="pf-v5-c-form__label-required"
            aria-hidden="true"
            >&#42;</span
          ></label
        >
      </div>
      <div class="pf-v5-c-form__group-control">
        <span class="pf-v5-c-form-control pf-m-required">
          <input required type="text" id="-name" name="-name" aria-describedby="-name-helper" />
        </span>

        <div class="pf-v5-c-form__helper-text" aria-live="polite">
          <div class="pf-v5-c-helper-text">
            <div class="pf-v5-c-helper-text__item" id="-name-helper">
              <span class="pf-v5-c-helper-text__item-text"
                >Include your middle name if you have one.</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pf-v5-c-form__group">
      <div class="pf-v5-c-form__group-label">
        <label class="pf-v5-c-form__label" for="-email">
          <span class="pf-v5-c-form__label-text">Email</span></label
        >
      </div>
      <div class="pf-v5-c-form__group-control">
        <span class="pf-v5-c-form-control">
          <input type="email" id="-email" name="-email" />
        </span>
      </div>
    </div>
    <div class="pf-v5-c-form__group">
      <div class="pf-v5-c-form__group-label">
        <label class="pf-v5-c-form__label" for="-phone">
          <span class="pf-v5-c-form__label-text">Phone number</span>&nbsp;<span
            class="pf-v5-c-form__label-required"
            aria-hidden="true"
            >&#42;</span
          ></label
        >&nbsp;<span
          class="pf-v5-c-form__group-label-help"
          aria-label="More information for phone number field"
          aria-describedby="-phone"
          role="button"
          type="button"
          tabindex="0"
          ><i class="pf-v5-pficon pf-v5-pficon-help" aria-hidden="true"></i
        ></span>
      </div>
      <div class="pf-v5-c-form__group-control">
        <span class="pf-v5-c-form-control pf-m-required">
          <input required type="tel" placeholder="555-555-5555" id="-phone" name="-phone" />
        </span>
      </div>
    </div>
    <div class="pf-v5-c-form__group" role="group" aria-labelledby="form-demo-basic-contact-legend">
      <div class="pf-v5-c-form__group-label" id="form-demo-basic-contact-legend">
        <span class="pf-v5-c-form__label">
          <span class="pf-v5-c-form__label-text">How can we contact you?</span></span
        >
      </div>
      <div class="pf-v5-c-form__group-control pf-m-inline">
        <div class="pf-v5-c-check">
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            id="-contact-check-1"
            name="-contact-check-1"
          />

          <label class="pf-v5-c-check__label" for="-contact-check-1">Email</label>
        </div>
        <div class="pf-v5-c-check">
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            id="-contact-check-2"
            name="-contact-check-2"
          />

          <label class="pf-v5-c-check__label" for="-contact-check-2">Phone</label>
        </div>
        <div class="pf-v5-c-check">
          <input
            class="pf-v5-c-check__input"
            type="checkbox"
            id="-contact-check-3"
            name="-contact-check-3"
          />

          <label class="pf-v5-c-check__label" for="-contact-check-3">Mail</label>
        </div>
      </div>
    </div>
    <div
      class="pf-v5-c-form__group"
      role="radiogroup"
      aria-labelledby="form-demo-basic-time-zone-legend"
    >
      <div class="pf-v5-c-form__group-label" id="form-demo-basic-time-zone-legend">
        <span class="pf-v5-c-form__label">
          <span class="pf-v5-c-form__label-text">Time zone</span></span
        >
      </div>
      <div class="pf-v5-c-form__group-control pf-m-inline">
        <div class="pf-v5-c-radio">
          <input
            class="pf-v5-c-radio__input"
            type="radio"
            id="-time-zone-radio-1"
            name="-time-zone-radio"
          />

          <label class="pf-v5-c-radio__label" for="-time-zone-radio-1">Eastern</label>
        </div>
        <div class="pf-v5-c-radio">
          <input
            class="pf-v5-c-radio__input"
            type="radio"
            id="-time-zone-radio-2"
            name="-time-zone-radio"
          />

          <label class="pf-v5-c-radio__label" for="-time-zone-radio-2">Central</label>
        </div>
        <div class="pf-v5-c-radio">
          <input
            class="pf-v5-c-radio__input"
            type="radio"
            id="-time-zone-radio-3"
            name="-time-zone-radio"
          />

          <label class="pf-v5-c-radio__label" for="-time-zone-radio-3">Pacific</label>
        </div>
      </div>
    </div>
    <div class="pf-v5-c-form__group pf-m-action">
      <div class="pf-v5-c-form__group-control">
        <div class="pf-v5-c-form__actions">
          <button class="pf-v5-c-button pf-m-primary" type="submit">Submit</button>
          <button class="pf-v5-c-button pf-m-link" type="button">Cancel</button>
        </div>
      </div>
    </div>
  </form>
</template>
