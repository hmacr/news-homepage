<script lang="ts">
  export let menuItems: Array<string>;
</script>

<div>
  <ul class="flex gap-8 text-dark-grayish-blue text-sm">
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
