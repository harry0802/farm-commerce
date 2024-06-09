<template>
    <div v-for="item, i in sectionGroup" :key="i" class="bg-b-color-browm">
        <BaseSection>
            <BaseContent>
                <BasePhtoContent v-bind="item" />
                <BaseTextContent v-bind="item">
                    <BaseText v-bind="item">
                        <!-- <p></p> -->
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
        extraText: ['我們認識到食品系統中存在的系統性種族主義和不平等問題，並承諾積極應對這些挑戰。我們致力於與更多由BIPOC（黑人、原住民、有色人種）擁有的農場和企業合作，並積極僱用多元化的員工。這還不止於此，我們的所有肉類和乳製品都遵循嚴格的動物福利標準。因為我們相信，人道應延伸至所有生物。', '幫助我們，共同建立一個更好的食品系統。'],
        img: advantagesPic.HumanisticCare,
        reverse: true
    }
]


</script>

<style scoped></style>
