<script lang="ts">
import { map } from "./Store";
</script>

<div>
    <button on:click={() => $map.fire('buttonPressed')}>Flood!</button>
</div>

<style>
    button {
		position: absolute;
		top: 40%;
		left: 2%;
		z-index: 2;
	}
</style>