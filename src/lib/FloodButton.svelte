<script lang="ts">
	import { map } from './Store';
</script>

<div>
	<button on:click={() => $map.fire('buttonPressed')}>Flood!</button>
</div>

<style>
	@font-face {
        font-family: "DIN PRO";
        src: url("../assets/DINPro400.otf");
    }

	button {
		position: absolute;
		top: 40%;
		left: 2%;
		z-index: 2;
		font-family: "DIN PRO";
	}
</style>
