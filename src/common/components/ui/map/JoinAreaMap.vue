<template>
    <div class="mapContainer w-full h-[300px] z-0" ref="mapContainer"></div>
</template>

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { ref, onMounted, inject } from "vue";
import { useRouter } from "vue-router";
const { userArea } = inject('areaMap')
const markerArea = [userArea.value.CenterPointLatitude, userArea.value.CenterPointLongitude]
const router = useRouter()

onMounted(() => {
    if (!userArea.value.ID) {
        return router.push('zip-check')
    }
    const map = L.map(mapContainer.value, {
        center: markerArea,
        zoom: 12,
    });

    const greenIcon = L.icon({
        iconUrl: ("src/assets/imgs/mapIcon/pet-shop-location-color-icon-vector.png"), // 修改這裡,
        iconSize: [50, 64],
        iconAnchor: [25, 64],
        popupAnchor: [0, -64],
    });
    greenIcon

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(markerArea, { icon: greenIcon }
    ).addTo(map).bindPopup(`<b>您的所在地區: </b > <br>${userArea.value.district}`).openPopup();
});

const mapContainer = ref(null);
</script>

<style scoped>
div {
    border-radius: 20px;
    border: 3px solid sienna;
}
</style>
