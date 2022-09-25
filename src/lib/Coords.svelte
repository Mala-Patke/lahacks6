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
		top: 30%;
		left: 2%;
		z-index: 2;
		background-color: gray;
		border-radius: 5px;
		width: 20%;
		height: 7.5%;
		font-family: 'DIN PRO';
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	p {
		margin: 0;
		padding: 0px 10px;
	}
</style>
