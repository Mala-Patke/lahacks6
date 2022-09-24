<script lang="ts">
  import Mapbox from './lib/Mapbox.svelte';
</script>

<main>
  <Mapbox />
  <div class="overlay">Stuff</div>
</main>

<style>
  .overlay {
    width: 200px;
    height: 200px;
    /* margin-left: 100px; */
    position: absolute;
    z-index: 2;
    background-color: white;
    text-decoration: black;
  }
</style>
