<template>
    <div v-for="(categorie) in categories">
        <SubcategoriesButtonNext class="ml-10 font-[cjkfonts]" @click="setCurrentIndex(categorie.category)"
            :project="categorie" v-if="!subcategories" :show-subcategories="showSubcategories" />
        <SubcategoriesButtonPrevious v-model:currentIndex="currentIndex" v-else :project="categorie" />
    </div>
</template>

<script setup>
import SubcategoriesButtonNext from "@/common/components/ui/button/SubcategoriesButtonNext.vue";
import SubcategoriesButtonPrevious from "@/common/components/ui/button/SubcategoriesButtonPrevious.vue";
import { ref } from "vue";
const props = defineProps({
    categories: {
        type: Object,
        default: "設定中...",
    },
});
const currentIndex = ref(null)
const subcategories = defineModel('subcategories')
const showSubcategories = () => subcategories.value = true
const setCurrentIndex = (i) => currentIndex.value = i
</script>
<style scoped>
* {
    font-family: cjkfonts;
}
</style>