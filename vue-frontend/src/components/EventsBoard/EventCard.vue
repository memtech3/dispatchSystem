<script setup lang="ts">
import 'bootstrap-icons/font/bootstrap-icons.css'
import { UnitEntity } from '@/stores/units'

defineProps<{
  id: string
  priority: number
  priorityClr: string
  typeCode: string
  typeDescription: string
  typeIcon: string
  location: string
  assignedUnits: UnitEntity[]
  ceatedTime: string
}>()
</script>

<template>
  <div class="list-group-item list-group-item-action eventItemGrid p-0" aria-current="true">
    <div class="triagePane d-flex flex-column" :class="'priorityColor-' + priorityClr">
      <div class="box m-1 bg-body-secondary d-flex align-items-center justify-content-center">
        <span class="bi bi-exclamation-triangle"></span>
      </div>
      <span class="fs-2 text-center">P{{ priority }}</span>
    </div>
    <div class="detailsPane d-flex flex-column">
      <span class="fs-5 text-uppercase">{{ typeDescription }}</span>
      <span class="text-capitalize">subtype</span>
      <span class="text-capitalize">{{ location }}</span>
      <small>{{ id }}</small>
      <div class="d-inline-flex gap-1 px-1 pb-1">
        <small v-for="unit in assignedUnits" :key="unit.id">
          <span class="badge rounded-pill text-bg-primary">{{ unit.callsign }}</span>
        </small>
      </div>
    </div>
    <div class="timePane d-flex flex-column">
      <small>C 5:32</small>
      <small>P 2:21</small>
      <small>A 3:11</small>
      <small>M 10:00</small>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin priorityColor($color) {
  .priorityColor-#{$color} {
    background-color: var(--bs-#{$color});
  }
}

@include priorityColor('blue');
@include priorityColor('purple');
@include priorityColor('red');
@include priorityColor('orange');
@include priorityColor('yellow');
@include priorityColor('green');
@include priorityColor('teal');

.eventItemGrid {
  display: grid;
  grid-template-columns: 0.25fr 1fr 0.3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 0px;
  grid-template-areas:
    'triagePane detailsPane timePane'
    'triagePane detailsPane timePane'
    'triagePane detailsPane timePane'
    'triagePane detailsPane timePane';
}
.triagePane {
  grid-area: triagePane;
}
.detailsPane {
  grid-area: detailsPane;
}
.timePane {
  grid-area: timePane;
}
.box {
  aspect-ratio: 1 / 1;
  mask-image: url('@/assets/diamond-mask.svg');
  mask-repeat: no-repeat;
}
</style>
