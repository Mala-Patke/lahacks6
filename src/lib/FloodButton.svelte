<script lang="ts">
import { map } from "./Store";

function onClick() {
    $map.fire('buttonPressed');    
}
</script>

<div>
    <button on:click={onClick}>Flood!</button>
</div>

<style>
    div {
		position: absolute;
		top: 30%;
		right: 2%;
		z-index: 2;
		background-color: gray;
		border-radius: 5px;
		width: 15%;
		height: 7.5%;
	}
</style>