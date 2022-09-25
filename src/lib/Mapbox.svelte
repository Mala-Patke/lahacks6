<script lang="ts">
	import { onMount } from 'svelte';
	import { token } from './TOKEN.json';
	import mapboxgl, { Map } from 'mapbox-gl';
	import { marker, map, lgnLatState } from './Store';
	import { pointsFromCircle } from './pointsFromCircle';

	let container: HTMLElement;

	mapboxgl.accessToken = token;
	
	onMount(() => {
		$map = new Map({
			container,
			style: 'mapbox://styles/mapbox/dark-v10',
			center: [-122.031028, 37.410761],
			zoom: 7
		});

		$map.on('buttonPressed', () => {
			try {
				$map.removeLayer('my-layer');
				$map.removeSource('my-source');
			} catch {}		
			$map.addSource('my-source', {
				type: 'geojson',
				data: {
					type: 'Feature',
					geometry: {
						type: 'Polygon',
						coordinates: [pointsFromCircle([$marker.getLngLat().lng, $marker.getLngLat().lat], 0.1, 360)]
					},
					properties: null
				}
			});

			$map.addLayer({
				id: 'my-layer',
				type: 'line',
				source: 'my-source',
				paint: {
					'line-width': 2
				}
			});
		});

		$map.on('style.load', () => {
			// terrain
			$map.addSource('mapbox-terrain', {
				type: 'vector',
				url: 'mapbox://mapbox.mapbox-terrain-v2'
			});

			$map.on('click', (e) => {
				marker.update((m) => m.remove());
				marker.set(new mapboxgl.Marker({ draggable: true }).setLngLat(e.lngLat).addTo($map));
			});

			$map.addLayer({
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
			$map.addSource('mapbox-streets', {
				type: 'vector',
				url: 'mapbox://mapbox.mapbox-streets-v8'
			});

			$map.addLayer({
				id: 'street-data',
				type: 'fill',
				source: 'mapbox-streets',
				'source-layer': 'building',
				paint: {
					'fill-color': '#69FFB4'
				}
			});

			// custom
		});
	});
</script>

<div bind:this={container} />

<style>
	@import 'mapbox-gl/dist/mapbox-gl.css';

	div {
		height: 100vh;
		width: 100vw;
	}
</style>
