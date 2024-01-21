<script setup lang="ts">
import 'maplibre-gl/dist/maplibre-gl.css'
import { Map, NavigationControl } from 'maplibre-gl'

// TODO: Update map attribution, replace openstreetmap tiles server with self hosted tile server
// TODO: Set up tile server
onMounted(() => {
  const map = new Map({
    container: 'map',
    style: {
      version: 8,
      sources: {
        MIERUNEMAP: {
          type: 'raster',
          tiles: ['http://tile.openstreetmap.org/{z}/{x}/{y}.png'],
          tileSize: 256,
          attribution:
            "Maptiles by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> DO NOT USE IN PRODUCTION REPLACE WITH SELF HOSTED MAPTILES SERVER.",
        },
      },
      layers: [
        {
          id: 'MIERUNEMAP',
          type: 'raster',
          source: 'MIERUNEMAP',
          minzoom: 0,
          maxzoom: 18,
        },
      ],
    },
    center: [-95.4929164, 29.6877036],
    zoom: 11,
  })

  map.addControl(
    new NavigationControl({
      visualizePitch: true,
    })
  )
})
</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>
