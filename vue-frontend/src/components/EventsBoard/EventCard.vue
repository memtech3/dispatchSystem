<script setup lang="ts">
import 'bootstrap-icons/font/bootstrap-icons.css'
import { UnitPiniaORM } from '@/stores/unitPiniaORM'

defineProps<{
  id: string
  priority: number
  priorityClr: string
  typeCode: string
  typeDescription: string
  typeIcon: string
  location: string
  assignedUnits: UnitPiniaORM[]
  createdTime: string
}>()
</script>

<template>
  <div class="list-group-item list-group-item-action eventItemGrid p-0" aria-current="true">
    <div class="triagePane verticalStack" :class="'priorityColor-' + priorityClr">
      <span>type icon</span>
      <span>P{{ priority }}</span>
      <span>{{ id }}</span>
    </div>
    <span class="type fs-5 text-uppercase">{{ typeDescription }}</span>
    <span class="subtype text-capitalize">subtype</span>
    <span class="location text-capitalize">{{ location }}</span>
    <div class="resources d-inline-flex gap-1 px-1">
      <small v-for="unit in assignedUnits" :key="unit.id">
        <span class="badge rounded-pill text-bg-primary">{{ unit.callsign }}</span>
      </small>
    </div>
    <div class="timePane verticalStack">
      <small>C 5:32</small>
      <small>P 2:21</small>
      <small>A 3:11</small>
      <small>M 10:00</small>
    </div>
    <div class="actionsPane verticalStack">A</div>
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
  grid-template-columns: 0.25fr 1fr 0.25fr 0.125fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 0px;
  grid-template-areas:
    'triagePane type timePane actionsPane'
    'triagePane subtype timePane actionsPane'
    'triagePane location timePane actionsPane'
    'triagePane resources timePane actionsPane';
}
.verticalStack {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.triagePane {
  grid-area: triagePane;
}
.type {
  grid-area: type;
}
.subtype {
  grid-area: subtype;
}
.location {
  grid-area: location;
}
.resources {
  grid-area: resources;
}
.timePane {
  grid-area: timePane;
}
.actionsPane {
  grid-area: actionsPane;
}
</style>
