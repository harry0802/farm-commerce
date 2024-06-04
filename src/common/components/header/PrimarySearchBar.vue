<template>
  <div id="search-bar" class=" px-5 w-full">
    <div class="search-input__wrapper relative w-[80%]">
      <div class="search-input__content w-full relative">
        <input placeholder="請輸入內容" @input="handleUserinput" patype="text" class="search-input__text w-full"
          v-model="userEnter" @focus="showDelete" @blur="closeDelete" />
        <div class="submit__wrapper">
          <button aria-label="Delete Search Sentence" class="button__delete" :class="deleteOpasity">
            <Icon class="active:translate-x-px" icon="pixelarticons:delete" @click="reEnter" />
          </button>

          <span class="hide" :class="deleteOpasity">
            <Icon icon="bx:dots-vertical" />
          </span>

          <button aria-label="Submit Search" class="button__wrapper">
            <Icon class="active:translate-x-px" icon="pixelarticons:search" />
          </button>
        </div>
      </div>
      <SearchArea />
    </div>

    <div class="button--close">
      <button aria-label="Close Search Bar" class="">
        <Icon class="hover:scale-105 active:translate-x-px" icon="pixelarticons:close" @click="closeSearch" />
      </button>
    </div>
  </div>

</template>

<script setup>
import { Icon } from "@iconify/vue";
import { computed, ref, inject } from "vue";
import SearchArea from "@/common/components/search/SearchArea.vue";
const { closeSearch, userEnter, handleUserinput } = inject('useSearch')

const deleteBtn = ref(false);
const showDelete = function () {
  deleteBtn.value = true;
};

const closeDelete = function () {
  deleteBtn.value = false;
};


const deleteOpasity = computed(() => {
  return deleteBtn.value ? "opacity-100" : "opacity-0";
});

const reEnter = function () {
  searchValue.value = "";
};
</script>

<style scoped>
svg {
  @apply text-color-primary-light;
  fill: #09251e;
}

#search-bar {
  display: flex;
  justify-content: center;
  height: 78px;
  z-index: 1;
  background: #fff;
}

.search-input__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 2;
}

.search-input__content {
  display: flex;
  background: #f2f2f2;
  border-radius: 32px;
}

.search-input__text {
  /* width: 100%; */
  padding: 10px 24px;
  background: none;
}

.search-input__text:focus {
  border: none;
  outline: none;
}

.submit__wrapper {
  display: flex;
  padding: 10px 24px;
}

.button__wrapper {
  display: block;
  height: 24px;
  width: 24px;
}

.submit__wrapper svg {
  width: 24px;
  height: 24px;
}

.button--close {
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;

}

.button--close>button>svg {
  padding: 5px;
  background: #f2f2f2;
  border-radius: 50%;
}

.button--close>button>svg {
  width: 40px;
  height: 40px;
}
</style>
