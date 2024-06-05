<template>
  <footer id="foorer">
    <div class="foorer__pic  overflow-hidden">
      <img loading="lazy" class="object-cover  w-full " src="@/assets/imgs/footer_bg.png" alt="" />
    </div>

    <footer-top />
    <div class="bg-b-color-green-dark  mx-auto py-4 text-center">
      <p>&copy; 2024 Harry Lin.
        Design inspiration from <a class="underline " href="https://farmtopeople.com/" target="_blank">Farm to
          People</a>.</p>
    </div>
  </footer>
</template>

<script>
import FooterTop from "@/common/components/footer/FooterTop.vue";
export default {
  components: { FooterTop },
};
</script>

<style scoped>
#foorer {
  position: relative;
  @apply text-white;
}

.foorer__pic {
  @apply bg-b-color-browm;
}

img {
  object-fit: cover;
  width: 100%;
}
</style>
