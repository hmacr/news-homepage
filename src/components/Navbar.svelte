<script lang="ts">
  import Logo from '../assets/images/logo.svg';
  import { useMediaQuery } from '../lib/media_query';

  import NavbarMobile from './NavbarMobile.svelte';
  import NavbarDesktop from './NavbarDesktop.svelte';

  export let containerDiv: HTMLElement;

  const menuItems = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

  let is_md = useMediaQuery('(min-width: 768px)');
</script>

<!-- Navbar -->
<div class="w-full flex justify-between items-center my-4">
  <!-- Logo -->
  <div class="h-[30px]">
    <img
      src={Logo}
      alt="logo"
      class="h-full"
    />
  </div>
  {#if $is_md}
    <NavbarDesktop {menuItems} />
  {:else}
    <NavbarMobile
      {containerDiv}
      {menuItems}
    />
  {/if}
</div>
