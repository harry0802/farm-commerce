<template>
  <footer-section>
    <div class="footer__section section-container">
      <footer-section-link class="footer__section-link" />
      <footer-section-emaill class="footer__section-contact" />
    </div>
  </footer-section>
</template>

<script>
import FooterSection from "../ui/section/FooterSection.vue";
import FooterSectionEmaill from "../ui/section/FooterSectionEmaill.vue";
import FooterSectionLink from "../ui/section/FooterSectionLink.vue";

export default {
  components: {
    FooterSectionEmaill,
    FooterSectionLink,
    FooterSection,
  },
};
</script>

<style scoped>
.footer__section {
  @apply grid grid-cols-1 gap-10;
  grid-template-areas:
    "primary"
    "secondary";
}

.footer__section-contact {
  grid-area: primary;
}

.footer__section-link {
  grid-area: secondary;
}

@media only screen and (min-width: 780px) {
  .footer__section {
    @apply grid grid-cols-2 gap-10;
    grid-template-areas: "secondary primary ";
  }
}
</style>
