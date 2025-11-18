<template>
  <section v-fade-in class="hero-section overflow-hidden relative w-full  max-h-[600px]">
    <div class="hero__image ">
      <div class="">
        <img loading="lazy" class=" w-full h-full aspect-video  object-cover"
          src="@/assets/imgs/homePage/videobackground.png" alt="hero background" />
      </div>
      <!-- 影片從 Supabase Storage CDN 載入（原檔 53MB 超過 Cloudflare 限制） -->
      <video loding="lazy" class="hero__film " playsinline autoplay="autoplay" loop="loop" muted="muted">
        <source src="https://srwrseziyaecgzjcndxt.supabase.co/storage/v1/object/sign/video/farmtodinner%20(1).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zYWFkMjdjZS01OGYwLTQ2OTItYTlmNy1kYmNlYjAyNmI5NGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlby9mYXJtdG9kaW5uZXIgKDEpLm1wNCIsImlhdCI6MTc2MzQ1NjU2MywiZXhwIjozMzI2NzkyMDU2M30.tJ1k_gVUvJSH8qtXZj5tkPkq1-RkbfiImTArguqwoA4" type="video/mp4" />
      </video>
    </div>


    <div class="hero__text w-full flex items-center absolute inset-0 text-center">
      <div class="container grid-line">
        <h1 class="col-span-12">
          <span class="u-text-large sm:hidden">田園速遞商店</span>
          <hero-aoto-produce-text />
        </h1>
        <primary-button :path="'shop/Farm Boxes'" :btnTitle="'別猶豫，點我買菜'" />
      </div>
    </div>
  </section>
</template>

<script setup>
import PrimaryButton from "@/common/components/ui/button/PrimaryButton.vue";
import HeroAotoProduceText from "@/common/components/ui/text/HeroAotoProduceText.vue";
</script>

<style scoped>
* {
  font-family: "RiiT_F";
}

.hero__image {
  aspect-ratio: 1/1;
}

@media only screen and (min-width:599px) {

  .hero__image {
    aspect-ratio: 21/9;
  }
}




.hero__film {
  position: absolute;
  inset: 0;
  width: 100%;
  object-fit: cover;
  @apply max-[599px]:hidden;
}
</style>
