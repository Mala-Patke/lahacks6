<script lang="ts">
	import { onMount } from 'svelte';
	import { token } from './TOKEN.json';
	import mapboxgl, { Map } from 'mapbox-gl';
	import { marker, map, stats } from './Store';
	import { boundsFromPoints, pointsFromCircle, polygonFromBounds } from './latLngUtil';

	let container: HTMLElement;

	mapboxgl.accessToken = token;

	function isInCircle(point: [number, number], center: [number, number], radius: number) {
		/*
			Step 1: Get circle center from the circle thing
			Step 2: Calculate distance between center and first coordinate
			Step 3: If distance > radius, it's inside. Get the feature property or whatever.
			
			common euclidean distance W
			(don't tell anyone we're assuming the earth's surface is a cartesian plane)
			(the cartographers will get mad)
		*/

		const distSqd = Math.pow(center[0] - point[0], 2) + Math.pow(center[1] - point[1], 2);
		return distSqd <= Math.pow(radius, 2);
	}

	onMount(() => {
		$map = new Map({
			container,
			style: 'mapbox://styles/mapbox/dark-v10',
			center: [-122.031028, 37.410761],
			zoom: 5,
			// prevent people from looking at missing data
			maxBounds: [
				[-174.205883, -54.809886],
				[0.002152, 76.41997]
			]
		});

		$map.on('buttonPressed', () => {
			console.log('The button has been pressed!');

			if ($map.getSource('flood-data')) {
				$map.removeLayer('flood-outline');
				$map.removeLayer('flood-fill');
				$map.removeSource('flood-data');
			}

			const radius = Math.sqrt(55000 / Math.PI) / 111;

			const circle = pointsFromCircle(
				[$marker.getLngLat().lng, $marker.getLngLat().lat],
				radius, //Bruteforce the math lmao
				360
			);

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

			let popFeatures = $map.querySourceFeatures('population', {
				sourceLayer: 'population'
			});

			let bldFeatures = $map.querySourceFeatures('mapbox-streets', {
				sourceLayer: 'building'
			});

			const center: [number, number] = [$marker.getLngLat().lng, $marker.getLngLat().lat];

			let population = 0;
			for (let i = 0; i < popFeatures.length; i++) {
				// @ts-ignore THERE IS A COORDINATE HERE TRUST ME
				const popcoord = popFeatures[i].geometry.coordinates[0][0];
				if (isInCircle(popcoord, center, radius))
					population += popFeatures[i].properties!.DN;
			}

			// this is mildly stupid since querySourceFeatures only gets rendered objects
			// and buildings only render when the map zoom is high enough to completely
			// obscure all sides of the flood circle
			// https://github.com/mapbox/mapbox-gl-js/issues/2481 fix your library
			let buildings = 0;
			for (let i = 0; i < bldFeatures.length; i++) {
				// @ts-ignore here too
				const bldcoord = bldFeatures[i].geometry.coordinates[0][0];
				if (isInCircle(bldcoord, center, radius)) buildings++;
			}
			console.log(buildings);

			stats.set(population);
		});

		$map.on('style.load', () => {
			console.log('The style has loaded!');
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
