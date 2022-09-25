<script lang="ts">
import { stats } from './Store';
</script>

<div>
    Square Mileage flooded: <strong>55,000 km<sup>2</sup></strong>
    People Affected: <strong>{$stats}</strong>
    People Displaced: <strong>{$stats}</strong>
    People in Shelters: <strong>{$stats}</strong>
    Fatalities: <strong>{$stats}</strong>

</div>

<style>
	div {
		position: absolute;
		right: 1vh;
		bottom: 25vh;
		z-index: 2;
		background-color: rgba(26, 26, 26);
        border: 1px solid rgba(255, 255, 255, 0.87);
		border-radius: 5px;
		overflow: auto;
		height: 40%;
        width: 30vh;
		font-family: 'DIN PRO';
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

    strong {
        font-weight: 900; /* IT DOESN'T BOLD */
        font-size: larger;
    }
</style>
