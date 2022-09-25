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
		width: 10vw;
		height: 8vh;
		font-size: 24px;
		right: 2vh;
		bottom: 5vh;
		z-index: 2;
		font-family: "DIN PRO";
		background-color: rgba(255, 255, 255, 0.87);
		color: #1a1a1a;
	}
</style>
