<script setup lang="ts">
import { UnitEntity } from '@/stores/units'

import 'fundamental-styles/dist/avatar.css'
import 'fundamental-styles/dist/info-label.css'
import 'fundamental-styles/dist/list.css'

defineProps<{
  id: string
  priority: number
  typeCode: string
  typeDescription: string
  typeIcon: string
  location: string
  assignedUnits: UnitEntity[]
  ceatedTime: string
}>()
</script>
<template>
  <div class="fd-list__item fd-list__item--interractive eventItemGrid">
    <div class="typeIcon">
      <span
        class="fd-avatar fd-avatar--xs"
        :class="'fd-avatar--accent-color-' + priority"
        role="img"
        aria-label="Avatar"
      >
        <i
          role="presentation"
          aria-hidden="true"
          aria-label="Product placeholder"
          class="fd-avatar__icon sap-icon--product"
        ></i>
      </span>
    </div>

    <div class="priority">
      <span
        class="fd-info-label fd-info-label--display"
        :class="'fd-info-label--accent-color-' + priority"
      >
        <span class="fd-info-label__text">P{{ priority }}</span>
      </span>
    </div>

    <span class="text-uppercase type">{{ typeDescription }}</span>
    <span class="text-capitalize location">{{ location }}</span>
    <small class="id">{{ id }}</small>
    <div class="d-inline-flex gap-1 units">
      <span
        v-for="unit in assignedUnits"
        :key="unit.id"
        class="fd-info-label fd-info-label--accent-color-6 fd-info-label--display"
      >
        <span class="fd-info-label__text">{{ unit.callsign }}</span>
      </span>
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
.eventItemGrid {
  display: grid;
  grid-template-columns: 0.25fr 1fr 0.3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 0px;
  grid-template-areas:
    'typeIcon type timePane'
    'typeIcon location timePane'
    'none id timePane'
    'priority units timePane';

  padding: 8px;
}
.timePane {
  grid-area: timePane;
}

.typeIcon {
  grid-area: typeIcon;
  display: flex;
  align-items: center;
  justify-content: center;
}
.priority {
  grid-area: priority;
  display: flex;
  align-items: center;
  justify-content: center;
}
.location {
  grid-area: location;
}
.id {
  grid-area: id;
}
.units {
  grid-area: units;
  display: flex;
  align-items: center;
}
</style>
