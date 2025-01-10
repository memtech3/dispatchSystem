<script setup lang="ts">
import 'maplibre-gl/dist/maplibre-gl.css'
import { Map, NavigationControl } from 'maplibre-gl'
import { ref, watch } from 'vue'

// TODO: Update map attribution, replace openstreetmap tiles server with self hosted tile server
// TODO: Set up tile server

const mapDiv = ref<HTMLElement | null>(null)
let map: Map | null = null

watch(mapDiv, (newMapDivValue) => {
  if (newMapDivValue) {
    console.log(newMapDivValue)
    map = new Map({
      container: newMapDivValue,
      style: {
        version: 8,
        sources: {
          MIERUNEMAP: {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution:
              "Maptiles by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> DO NOT USE IN PRODUCTION REPLACE WITH SELF HOSTED MAPTILES SERVER."
          }
        },
        layers: [
          {
            id: 'MIERUNEMAP',
            type: 'raster',
            source: 'MIERUNEMAP',
            minzoom: 0,
            maxzoom: 18
          }
        ]
      },
      center: [-95.4929164, 29.6877036],
      zoom: 11
    })

    map.addControl(
      new NavigationControl({
        visualizePitch: true
      })
    )
  }
})
</script>

<template>
  <div ref="mapDiv" id="map"></div>
</template>
<style scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>
