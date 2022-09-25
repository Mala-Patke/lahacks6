<script lang="ts">
	import { prettyPrintDecimalDegrees } from './decimalDegrees';
	import { marker } from './Store';
</script>

<div>
	<p>{prettyPrintDecimalDegrees($marker.getLngLat()?.lat, 'lat')}</p>
	<p>{prettyPrintDecimalDegrees($marker.getLngLat()?.lng, 'lng')}</p>
</div>

<style>
	@font-face {
		font-family: 'DIN PRO';
		src: url('../assets/DINPro400.otf');
	}

	div {
		position: absolute;
		left: 1vh;
		bottom: 5vh;
		z-index: 2;
		background-color: rgba(26, 26, 26, 0.5);
		border-radius: 8px;
		width: auto;
		height: 7.5%;
		font-family: 'DIN PRO';
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	p {
		margin: 0;
		padding: 0px 10px;
	}
</style>
