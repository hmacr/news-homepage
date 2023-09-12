<script lang="ts">
  import {
    loadArticleData,
    loadNewsData,
    ArticleData,
    NewsData,
  } from '../lib/data_loader';
  import { useMediaQuery } from '../lib/media_query';

  import ImgWeb3Desktop from '../assets/images/image-web-3-desktop.jpg';
  import ImgWeb3Mobile from '../assets/images/image-web-3-mobile.jpg';

  import NewsItem from '../components/NewsItem.svelte';
  import ArticleItem from '../components/ArticleItem.svelte';

  let is_md = useMediaQuery('(min-width: 768px)');

  const newsData: Array<NewsData> = loadNewsData();
  const articleData: Array<ArticleData> = loadArticleData();
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
  <!-- Main Image -->
  <div class="md:col-span-2 md:order-first md:mt-8">
    {#if $is_md}
      <img
        src={ImgWeb3Desktop}
        alt="web-3"
        class="h-full"
      />
    {:else}
      <img
        src={ImgWeb3Mobile}
        alt="web-3"
        class="h-full"
      />
    {/if}
  </div>

  <!-- Heading -->
  <div class="md:flex md:justify-center md:self-end">
    <p class="text-4xl md:text-5xl text-very-dark-blue font-extrabold">
      The Bright Future of Web 3.0?
    </p>
  </div>

  <!-- Subtext -->
  <div class="md:self-end">
    <p class="text-dark-grayish-blue md:text-sm">
      We dive into the next evolution of the web that claims to put the power of
      the platforms back into the hands of the people. But is it really
      fulfilling its promise?
    </p>
    <button
      class="w-[180px] h-[40px] mt-4 md:mt-8 uppercase tracking-[0.25em] text-sm font-bold text-off-white bg-soft-red hover:cursor-pointer hover:bg-very-dark-blue transition-all"
    >
      Read More
    </button>
  </div>

  <!-- News -->
  <div class="bg-very-dark-blue px-4 pt-4 mt-8 md:-order-2 md:row-span-2">
    <h3 class="font-bold text-soft-orange text-3xl py-2">New</h3>
    {#each newsData as data}
      <NewsItem
        heading={data.heading}
        subText={data.subText}
        addBorderBottom={data.addBorderBottom}
      />
    {/each}
  </div>

  <!-- Article -->
  <div class="mt-8 md:mt-12 md:col-span-3">
    <div class="flex flex-col md:flex-row gap-8">
      {#each articleData as data}
        <ArticleItem
          serialNo={data.serialNo}
          heading={data.heading}
          subText={data.subText}
          articleImg={data.imgSrc}
        />
      {/each}
    </div>
  </div>
</div>
