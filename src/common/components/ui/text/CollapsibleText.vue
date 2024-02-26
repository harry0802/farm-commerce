<template>
  <div class="text__container" :class="{ collapsed: isCollapsed }">
    <div class="text__content">
      <p>
        {{ props.paragraph }}
      </p>
    </div>
    <button @click="toggleCollapse">
      {{ collapsedState }}
    </button>
  </div>
</template>

<script setup>
import { ref, defineProps, computed } from "vue";
const props = defineProps(["paragraph"]);
const isCollapsed = ref(false);

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};

const collapsedState = computed(() => (isCollapsed.value ? "收起" : "展開"));
</script>

<style scoped>
button {
  display: none;
}
@media only screen and (min-width: 600px) {
  .text__container {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .text__content {
    justify-self: center;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    grid-area: text;

    /* text-align: left; */
  }
  .collapsed .text__content {
    -webkit-line-clamp: unset;
  }

  .collapsed.text__container {
    grid-template-areas:
      "text"
      "btn";
  }
  button {
    display: flex;
    justify-content: flex-end;
    text-indent: 1em;
    @apply text-b-color-green-dark;
  }
}
</style>
