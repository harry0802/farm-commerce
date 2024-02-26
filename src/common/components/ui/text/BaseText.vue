<template>
  <div class="response__content">
    <div>
      <h3 class="inline-flex items-center u-text-medium" :class="dataPseudo" :data-pseudo-text="pseudoText">
        {{ title }}
      </h3>

      <p class="mt-4 u-text-small">{{ paragraph }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { name: String, require: true },
    paragraph: { name: String, require: true },
    pseudoText: {},
  },
  data() {
    return {};
  },

  computed: {
    dataPseudo() {
      return {
        dataPseudo: this.pseudoText,
      };
    },
  },
};
</script>

<style scoped>
h3 {
  color: currentColor;
}

.response__content {
  margin-top: 2rem;
}

.dataPseudo::before {
  content: attr(data-pseudo-text);
  margin-right: 0.8rem;
  font-size: 2.5rem;
  line-height: 1;
  font-weight: 600;
  color: #629d6b;
  font-style: italic;
  font-family: "Poppins", sans-serif;
}
</style>
