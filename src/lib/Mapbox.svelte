<script lang="ts">
	import { onMount } from 'svelte';
	import { token } from './TOKEN.json';
	import mapboxgl, { Map } from 'mapbox-gl';
	import { marker, map } from './Store';
	import { boundsFromPoints, pointsFromCircle, polygonFromBounds } from './latLngUtil';

	let container: HTMLElement;

	mapboxgl.accessToken = token;

	onMount(() => {
		$map = new Map({
			container,
			style: 'mapbox://styles/mapbox/dark-v10',
			center: [-122.031028, 37.410761],
			zoom: 5,
			// prevent people from looking at missing data
			maxBounds: [
				[-168, -80],
				[-21, 80]
			]
		});

		$map.on('buttonPressed', () => {
			if ($map.getSource('flood-data')) {
				$map.removeSource('flood-data');
				$map.removeLayer('flood-outline');
				$map.removeLayer('flood-fill');
			}

			const circle = pointsFromCircle(
				[$marker.getLngLat().lng, $marker.getLngLat().lat],
				74/111, //74 km radius of 55,000 km^2 flooding divided by 111 km/lat
				360
			);

			const bounds = boundsFromPoints(circle);
			const boundsRect = polygonFromBounds(bounds);

			$map.addSource('flood-data', {
				type: 'geojson',
				data: {
					type: 'Feature',
					geometry: {
						type: 'Polygon',
						coordinates: [circle]
					},
					properties: null
				}
			});

			$map.addLayer({
				id: 'flood-outline',
				type: 'line',
				source: 'flood-data',
				paint: {
					'line-width': 2
				}
			});

			$map.addLayer({
				id: 'flood-fill',
				type: 'fill',
				source: 'flood-data',
				paint: {
					'fill-opacity': 0.25
				}
			});

			// console.log(
			// 	$map.querySourceFeatures('population', {
			// 		sourceLayer: 'population',
			// 		filter: [
			// 			'within',
			// 			{
			// 				type: 'Polygon',
			// 				coordinates: [circle]
			// 			}
			// 		]
			// 	})
			// );
			$map.setFilter('population', [
				'within',
				{
					type: 'Polygon',
					coordinates: [circle]
				}
			]);
		});

		$map.on('style.load', () => {
			$map.on('click', (e) => {
				marker.update((marker) => marker.setLngLat(e.lngLat));
			});

			// terrain
			$map.addSource('mapbox-terrain', {
				type: 'vector',
				url: 'mapbox://mapbox.mapbox-terrain-v2'
			});

			// $map.addLayer({
			// 	id: 'terrain-data',
			// 	type: 'line',
			// 	source: 'mapbox-terrain',
			// 	'source-layer': 'contour',
			// 	layout: {
			// 		'line-join': 'round',
			// 		'line-cap': 'round'
			// 	},
			// 	paint: {
			// 		'line-color': '#ff69b4',
			// 		'line-width': 1
			// 	}
			// });

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
			$map.addSource('population', {
				type: 'vector',
				url: 'mapbox://linearcurve.population'
			});

			$map.addLayer({
				id: 'population',
				type: 'fill',
				source: 'population',
				'source-layer': 'population',
				paint: {
					'fill-color': '#ffb469',
					'fill-opacity': 0.25
				}
			});
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
