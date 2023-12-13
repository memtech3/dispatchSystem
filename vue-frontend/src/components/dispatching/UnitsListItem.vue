<script setup lang="ts">
import { IxEventListItem, IxIcon, IxCol, IxTile } from '@siemens/ix-vue'

defineProps<{
  unitID: string
  unitStatus: string
  unitCurrentCall: string
}>()
</script>

<template>
  <IxEventListItem color="color-primary">
    <IxLayoutGrid>
        <IxRow>
            <IxCol size="3" class="unitID-badge">
                    {{ unitID }} <IxIcon name="triangle-filled" size="16"></IxIcon>
            </IxCol>
            <IxCol>
                {{ unitStatus }} {{ unitCurrentCall }}
            </IxCol>
        </IxRow>
    </IxLayoutGrid>
</IxEventListItem>
</template>

<style scoped>
.unitID-badge {
    background-color: blueviolet;
}
</style>
