<script lang="ts">
	import { prettyPrintDecimalDegrees } from './formatLatOrLng';
	import { marker } from './Store';
</script>

<div>
	<p>{prettyPrintDecimalDegrees($marker.getLngLat()?.lat, 'lat')}</p>
	<p>{prettyPrintDecimalDegrees($marker.getLngLat()?.lng, 'lng')}</p>
</div>

<style>
	div {
		position: absolute;
		top: 30%;
		left: 2%;
		z-index: 2;
		background-color: gray;
		border-radius: 5px;
		width: 15%;
		height: 7.5%;
	}

	p {
		margin: 0;
		padding: 0px 10px;
	}
</style>
