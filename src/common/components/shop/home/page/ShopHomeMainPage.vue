<template>
    <main id="main" class="category__content py-6 place-content-center">
        <h1 class="  u-text-giant  ml-4 mb-2 mr:hidden  "> for you</h1>
        <section v-for="( pageitem, i) in renderPage  " :key="i">

            <div ref="target" class="category__id" :id="pageitem.path" />

            <div class="category__nav-title text-xl leading-8 flex flex-col   place-items-center   ml-4 mb-2   text-color-primary  mr:flex-row mr:place-items-start mr:u-text-medium"
                :class="{ hangUp: !isLargeScreen }">

                <h2 class="flex">
                    {{ pageitem.category }}
                </h2>
            </div>

            <div v-if="pageitem.renderPage.length > 0" class="category__product  overflow-hidden">
                <shop-main-produt-item-card v-for=" item in pageitem.renderPage" :key="item.product_id" :data="item" />
            </div>
            <div class="category__product overflow-hidden max-sm:grid-cols-1" v-else>
                <div class=" w-full h-full max-w-[350px] rounded-lg">
                    <div
                        class="flex flex-col  place-content-evenly h-full m-2 p-[50px] bg-b-color-browm text-center  rounded-lg">
                        <p class="text-color-primary font-extrabold u-text-small my-1 pb-8 ">
                            {{ pageitem.emptyPage.title }}
                        </p>
                        <p>{{ pageitem.emptyPage.text }}</p>
                    </div>
                </div>
                <img v-if="pageitem.emptyPage.guidePic && !pageitem.renderPage.length > 0"
                    class="guidePic max-sm:hidden " v-for="pic in pageitem.emptyPage.guidePic" :src="pic" alt="">

            </div>

        </section>
    </main>
</template>


<script setup>

defineProps({
    overview: Boolean
});
import { inject, ref } from "vue";
import { useMediaQuery } from '@vueuse/core'
import ShopMainProdutItemCard from "@/common/components/ui/card/ShopMainProdutItemCard.vue";
import { tryOnMounted, useIntersectionObserver } from '@vueuse/core'

const { renderPage, setBbserverCurrentID } = inject('ProductPageSection')
const isLargeScreen = useMediaQuery('(min-width: 950px)')


const target = ref(null)
tryOnMounted(() => {
    useIntersectionObserver(target, (api) => {
        const [IntersectionObserverEntry] = api
        if (IntersectionObserverEntry.isIntersecting) {
            const currentId = IntersectionObserverEntry.target.id
            setBbserverCurrentID(currentId)
        }
    },)

})

</script>

<style scoped>
.category__content {
    width: 100%;
    height: 100%;
}

.category__nav-title {
    font-family: cjkfonts;
    font-weight: bold;
}

.hangUp {
    position: sticky;
    margin: 0 -1rem;
    padding-bottom: .5rem;
    top: 62px;
    left: 0px;
    background-color: white;
    opacity: .9;
    box-shadow: 0px .8px .1px rgba(0, 0, 0, .07);
    z-index: 1;
}

.guidePic {
    margin: 2px;
    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(#000), to(transparent));
}
</style>
