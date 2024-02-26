<template>
  <div class="mobile__menu--search " :class="{ openSearch: showSearch }">
    <div v-if="showSearch" class="search__back" @click="closeSearch()">
      <span>返回</span>
    </div>
    <div class="search-wrap" :class="{ 'cover-content': showSearch }">
      <button class="submit-wrap" aria-label="Submit serach"
        @click="showSearch ? submitResult() : (openSearch(), openNavMenu())">
        <Icon class="icon" icon="pixelarticons:search" />
      </button>
      <input v-if="showSearch" class="serach__input" type="text" placeholder="尋找你心儀商品❤️" />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref, } from "vue";
import rootStore from "@/store/rootStore.js";
const store = rootStore()
const showSearch = ref(false);
const showMenu = defineModel('showMenu')





const openSearch = function () {
  showSearch.value = true;
};


const closeSearch = function () {
  showSearch.value = false;
  store.closeSiderBar();
  showMenu.value = true
};

const openNavMenu = function () {
  showMenu.value = false
};


const submitResult = function () {
  //傳送收尋結果
};

</script>

<style scoped>
.mobile__menu--search {
  display: flex;
  width: 100%;
}

.mobile__menu--search.openSearch {
  width: 100%;
  align-items: center;
  justify-content: center;
}

.search__back {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-wrap {
  display: flex;
  width: 100%;
  padding: 1.5rem 0;
  padding-left: 1.25rem;
}

.submit-wrap {
  margin-right: 8px;
}

.submit-wrap {
  display: flex;
  align-items: center;
}

.submit-wrap .icon {
  width: 1.5rem;
  height: 1.5rem;
}

.cover-content.search-wrap {
  display: flex;
  margin-left: 0.8rem;
  flex: 1;
  padding: 6px 5px 6px 12px;
  border: 1px solid #000;
  border-radius: 2px;
}

.serach__input {
  /* width: 100%; */
}
</style>
