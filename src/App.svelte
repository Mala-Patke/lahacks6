<script lang="ts">
  import Mapbox from './lib/Mapbox.svelte';
</script>

<main>
  <Mapbox class="main"></Mapbox>
  <div class="overlay">Stuff</div>
</main>

<style>
  .main {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: blue;
  }

  .overlay {
    width: 20px;
    height: 20px;
    margin-left: 100px;
    position: absolute;
    z-index: 2;
    background-color: white;
  }

</style>