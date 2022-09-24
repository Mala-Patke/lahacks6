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
			zoom: 9, // starting zoom
			projection: { name: 'globe' } // display the map as a 3D globe
		});

		map.on('style.load', () => {
			map.setFog({}); // Set the default atmosphere style
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
