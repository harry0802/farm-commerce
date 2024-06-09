<template>
    <div v-for="item, i in sectionGroup" :key="i" class="bg-b-color-browm">
        <BaseSection>
            <BaseContent>
                <BasePhtoContent v-bind="item" />
                <BaseTextContent v-bind="item">
                    <BaseText v-bind="item">
                        <p class="mt-4 u-text-small" v-if="item.extraText" v-for=" text, i in item.extraText" :key="i">
                            {{ text }}
                        </p>
                    </BaseText>
                </BaseTextContent>
            </BaseContent>
        </BaseSection>
    </div>
</template>

<script setup>
import BaseSection from "@/common/components/ui/section/BaseSection.vue";
import BaseContent from "@/common/components/ui/content/base/BaseContent.vue";
import BaseText from "@/common/components/ui/text/BaseText.vue";
import BaseTextContent from "@/common/components/ui/content/base/BaseTextContent.vue";
import BasePhtoContent from "../ui/content/base/BasePhtoContent.vue";
import * as advantagesPic from "@/assets/imgs/featuresAndAdvantages/inex.js";

const sectionGroup = [
    {
        title: '透明承諾',
        paragraph: '我們希望您作為顧客和食客能夠充滿信心。確保您收到的是最高品質的產品，並清楚了解食物的來源。當您用餐時，您正以實際行動支持本地的小農場和製作者，這是一種令人愉悅的選擇。我們始終提供商品的來源地、名稱及其種植標準，絕不讓您猜測。農業變幻莫測，有時我們可能需要在最後一刻進行替換，但即便如此，我們也會告知您替換品的具體來源。',
        img: advantagesPic.productPromise
        , reverse: false
    },
    {
        title: '鄰近供應',
        paragraph: '我們主要與範圍內的農場合作。這樣縮短了食物運輸的距離和時間，並鼓勵季節性飲食。將我們的網站作為您採購雜貨的首選，意味著我們能持續支持本地的小農場和企業。 ',
        extraText: ['我們銷售的商品中有 70% 來自本地供應！我們也會從遠處採購一些受歡迎的季節性商品（如冬季柑橘類水果）和家庭必需品（如香蕉或酪梨）。但無論來源地如何，我們確保供應商的種植方式、動物福利和原料都符合我們的標準。'],
        img: advantagesPic.nearbySupply,
        reverse: true
    },
    {
        title: '永續發展',
        paragraph: '我們相信農民應該是土地的優良管理者。無論是產品的種植或飼養方式、包裝方式，還是運輸距離，我們始終提倡環保責任。我們優先考慮再生農業標準，並與鼓勵生物多樣性的農場合作。我們避免過度和不必要的包裝，使用回收和可堆肥材料來運送您的訂單。我們盡可能選擇本地農場和製作者，以減少運輸過程中的碳排放，並手動規劃配送路線，優化從倉庫到您家的運輸過程。',
        img: advantagesPic.Sustainabledevelopment,
        reverse: false
    },
    {
        title: '人文關懷',
        paragraph: '從種植您食物的農民到包裝和配送您訂單的員工，我們確保他們都獲得合理的工資。我們尋求與公平對待工人的企業合作。我們的每一元食品收入中，有 50% 回饋給農場。（相比之下，食品行業的全國平均水平僅為 15%。）',
        extraText: ['在這方面，我們真的很努力！我們在找新鮮水果的時候總是把樂趣和責任結合起來。積極招聘多元化的員工，我們都在盡力做到最好。此外，我們的肉類和乳製品符合嚴格的動物福利標準，因為對我們來說，人道關懷不僅僅是針對人類，也涵蓋了所有生物。', '快來幫助我們一起建立更棒的食品系統吧！'],
        img: advantagesPic.HumanisticCare,
        reverse: true
    }
]


</script>

<style scoped></style>
