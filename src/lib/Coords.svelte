<script lang="ts">
	import { marker } from './Store';

	function round(num: number) {
		return Math.round(num * 100) / 100;
	}
</script>

<div>
	<p>Lat: {round($marker.getLngLat()?.lat)}</p>
	<p>Lon: {round($marker.getLngLat()?.lng)}</p>
</div>

<style>
	@font-face {
        font-family: "DIN PRO";
        src: url("../assets/DINPro400.otf");
    }

	div {
		position: absolute;
		top: 30%;
		left: 2%;
		z-index: 2;
		background-color: gray;
		border-radius: 5px;
		width: 15%;
		height: 7.5%;
		font-family: "DIN PRO";
	}

	p {
		margin: 0;
		padding: 0px 10px;
	}
</style>
