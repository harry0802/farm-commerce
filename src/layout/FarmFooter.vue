<template>
  <footer id="foorer">
    <div class="foorer__pic">
      <img src="@/assets/imgs/footer_bg.png" alt="" />
    </div>

    <footer-top></footer-top>
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
