<script lang="ts">
  export let articleImg: string;
  export let serialNo: string;
  export let heading: string;
  export let subText: string;
</script>

<div class="flex gap-4 h-[130px]">
  <div>
    <img
      src={articleImg}
      alt="img-article"
      class="h-full"
    />
  </div>
  <div class="flex flex-col justify-between w-2/3">
    <p class="text-grayish-blue text-3xl font-bold">{serialNo}</p>
    <h4 class="text-very-dark-blue font-bold text-lg">
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="hover:cursor-pointer hover:text-soft-red transition-colors">
        {heading}
      </a>
    </h4>
    <p class="text-dark-grayish-blue md:text-sm">{subText}</p>
  </div>
</div>
