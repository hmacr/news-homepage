<script lang="ts">
  export let heading: string;
  export let subText: string;
  export let addBorderBottom = false;

  let borderBottom = addBorderBottom
    ? 'border-b border-b-dark-grayish-blue'
    : '';
</script>

<div class="py-6 {borderBottom}">
  <h4 class="text-grayish-blue font-bold text-lg">{heading}</h4>
  <p class="text-dark-grayish-blue mt-2">{subText}</p>
</div>
