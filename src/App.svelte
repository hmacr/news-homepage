<script lang="ts">
  import Navbar from './components/Navbar.svelte';
  import MainArea from './components/MainArea.svelte';

  let containerDiv;
</script>

<!-- Container -->
<div
  class="w-[400px] md:w-[1200px] mx-auto font-inter p-4"
  bind:this={containerDiv}
>
  <Navbar {containerDiv} />
  <MainArea />
</div>
