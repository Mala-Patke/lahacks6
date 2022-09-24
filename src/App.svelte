<script lang="ts">
  import Mapbox from './lib/Mapbox.svelte';
</script>

<main>
  <Mapbox class="main"></Mapbox>
  <div class="overlay">Stuff</div>
</main>

<style>
  .overlay {
    width: 20px;
    height: 20px;
    margin-left: 100px;
    position: absolute;
    z-index: 2;
    background-color: white;
  }
</style>
