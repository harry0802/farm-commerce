<template>
  <div class="footer__links section-container">
    <div class="footer__icons">
      <div class="footer__icons--logo">
        <RouterLink to="/">
          <img src="@/assets/imgs/log/organicX70-footer.svg" alt="" />
        </RouterLink>
      </div>
      <div class="footer__icons--social w-full">
        <footer-top-icon v-for="communityItems in communityItem" :key="communityItems.des" :path="communityItems.path"
          :imgPath="communityItems.imgs" :des="communityItems.des" />
      </div>
    </div>

    <div class="footer__navigation">
      <footer-link-item :FooterLink="links.sectionA" />
      <footer-link-item :FooterLink="links.sectionB" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FooterTopIcon from "../icon/BaseIconSocials.vue";
import FooterLinkItem from "../content/footer/FooterLinkItem.vue";

import rootStore from "@/store/rootStore.js";
import { RouterLink } from "vue-router";
const store = rootStore();
const communityItem = ref(store.communityItem);
const links = ref(store.footerLinks);
</script>

<style scoped>
.footer__links {
  @apply grid grid-cols-1 gap-10;
  margin: 0;
  grid-template-areas:
    "secondary"
    "primary";
}

.footer__icons {
  grid-area: primary;
}

.footer__navigation {
  @apply grid gap-2;
  grid-area: secondary;
  align-items: center;
}

@media only screen and (min-width: 780px) {
  .footer__links {
    @apply grid gap-10;
    grid-template-columns: 1fr 2fr;
    grid-template-areas: "primary secondary";
  }

  .footer__navigation {
    @apply grid gap-x-10;
    grid-template-columns: 1fr 1fr;
  }
}

.footer__icons {
  width: 140px;
}

.footer__icons--logo img {
  width: 140px;
}

.footer__icons--social {
  display: grid;
  grid-template-columns: repeat(3, minmax(1.5rem, 1fr));
  row-gap: 1.5rem;
}
</style>
