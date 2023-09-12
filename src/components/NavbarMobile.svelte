<script lang="ts">
  import IconMenu from '../assets/images/icon-menu.svg';
  import IconMenuClose from '../assets/images/icon-menu-close.svg';

  let tintDiv: HTMLElement;
  let menu: HTMLElement;

  export let containerDiv: HTMLElement;
  export let menuItems: Array<string>;

  function handleMenuOpen(e: Event) {
    tintDiv.classList.remove('hidden');
    menu.classList.remove('translate-x-full');
    menu.classList.add('translate-x-0');
    containerDiv.classList.add('overflow-y-hidden', 'h-screen');
  }

  function handleMenuClose(e: Event) {
    tintDiv.classList.add('hidden');
    menu.classList.remove('translate-x-0');
    menu.classList.add('translate-x-full');
    containerDiv.classList.remove('overflow-y-hidden', 'h-screen');
  }
</script>

<div class="h-[15px]">
  <!-- svelte-ignore a11y-missing-attribute -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <a
    class="hover:cursor-pointer"
    on:click={handleMenuOpen}
  >
    <img
      src={IconMenu}
      alt="icon-menu"
      class="h-full"
    />
  </a>
</div>

<!-- Tint -->
<div
  class="w-screen h-screen fixed top-0 left-0 z-10 bg-black/50 hidden"
  bind:this={tintDiv}
/>

<!-- Menu -->
<div
  class="flex flex-col gap-12 fixed top-0 right-0 w-[300px] h-screen p-8 bg-off-white z-10 translate-x-full transition-all"
  bind:this={menu}
>
  <!-- Close Icon -->
  <div class="h-[30px] self-end">
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <a
      class="hover:cursor-pointer"
      on:click={handleMenuClose}
    >
      <img
        src={IconMenuClose}
        alt="icon-menu-close"
        class="h-full"
      />
    </a>
  </div>
  <!-- Nav Menu -->
  <ul class="flex flex-col gap-4 text-lg text-very-dark-blue">
    {#each menuItems as item}
      <li>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="hover:cursor-pointer hover:text-soft-red transition-colors">
          {item}
        </a>
      </li>
    {/each}
  </ul>
</div>
