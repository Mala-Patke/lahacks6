<script lang="ts">
	import { onMount } from 'svelte';
	import { token } from './TOKEN.json';
	import mapboxgl from 'mapbox-gl';

	let container;

	mapboxgl.accessToken = token;

	onMount(() => {
		const map = new mapboxgl.Map({
			container: container, // container ID
			style: 'mapbox://styles/mapbox/streets-v11', // style URL
			center: [-74.5, 40], // starting position [lng, lat]
			zoom: 9 // starting zoom
		});

		map.on('style.load', () => {
			// terrain
			map.addSource('mapbox-terrain', {
				type: 'vector',
				url: 'mapbox://mapbox.mapbox-terrain-v2'
			});

			map.addLayer({
				id: 'terrain-data',
				type: 'line',
				source: 'mapbox-terrain',
				'source-layer': 'contour',
				layout: {
					'line-join': 'round',
					'line-cap': 'round'
				},
				paint: {
					'line-color': '#ff69b4',
					'line-width': 1
				}
			});

			// streets
			map.addSource('mapbox-streets', {
				type: 'vector',
				url: 'mapbox://mapbox.mapbox-streets-v8'
			});

			map.addLayer({
				id: 'street-data',
				type: 'line',
				source: 'mapbox-streets',
				'source-layer': 'building',
				paint: {
					'line-color': '#69FFB4',
					'line-width': 1
				}
			});
		});
	});
</script>

<div bind:this={container} />

<style>
	@import 'mapbox-gl/dist/mapbox-gl.css';

	div {
		min-height: 300px;
	}
</style>
