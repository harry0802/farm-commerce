<template>
  <ul>
    <footer-link-items
      v-for="FooterLinks in FooterLink"
      :key="FooterLinks.linkName"
      :text="FooterLinks.linkName"
    >
    </footer-link-items>
  </ul>
</template>

<script>
import FooterLinkItems from "../../navigations/FooterLinkItems.vue";

export default {
  components: { FooterLinkItems },
  props: ["FooterLink"],
};
</script>

<style scoped>
ul {
  width: 100%;
  @apply grid gap-2 grid-cols-1	 justify-start items-start;
}
@media only screen and (min-width: 768px) {
  ul {
  }
}
</style>
