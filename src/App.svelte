<script lang="ts">
	import Mapbox from './lib/Mapbox.svelte';
	import Coords from './lib/Coords.svelte';
	import About from './lib/About.svelte';
	import FloodButton from './lib/FloodButton.svelte';
	import Stats from './lib/Stats.svelte';
	import Help from './lib/Help.svelte';
</script>

<main>
	<Mapbox />
	<Coords />
	<About />
	<FloodButton />
	<Stats/>
	<Help />
</main>
