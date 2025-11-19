<template>
    <div v-for="item, i in sectionGroup" :key="i" class="bg-b-color-browm">
        <BaseSection>
            <BaseContent>
                <BasePhtoContent v-bind="item" />
                <BaseTextContent v-bind="item">
                    <BaseText v-bind="item">

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
import * as howitworksPic from "@/assets/imgs/howitworks/index.js";

const sectionGroup = [
    {
        title: '開始購物',
        paragraph: '現在就開始您的購物之旅，並在購物車中選擇方便的配送日期！我們提供從農場新鮮採摘的水果和蔬菜、符合道德標準的肉類/乳製品/海鮮（或植物基替代品）、手工製作的食品雜貨等一應俱全的商品。找不到您需要的產品？隨時發送電子郵件或致電我們的服務團隊，請求特定產品或品牌，或獲取專業的一對一協助。',
        img: howitworksPic.startshoping
        , reverse: false
    },
    {
        title: '無需手動操作的雜貨購物',
        paragraph: '您想省去繁瑣的雜貨購物流程嗎？您可以隨時按需購買個別商品，但如果有些必備品您經常需要，為什麼不訂閱它們呢？此外，我們還提供定期的農場禮盒，其中包含精選的農產品和其他物品，可完全根據您的膳食計劃進行定制。訂閱將根據您設定的頻率自動將所需商品加入購物車。而最棒的是？您可以隨時跳過或取消訂閱，無需支付任何費用或受到處罰。輕鬆、方便、靈活！',
        img: howitworksPic.handleProduct,
        reverse: true
    },
    {
        title: '無需結帳',
        paragraph: '我們提供簡便的無結帳流程，您可以在截止時間之前隨時添加或編輯您的訂單。在此時，我們會根據您的購物車內容進行結算，並提交訂單。然後，您的食物將被挑選、收割、烘烤、製作或包裝（通常在您交貨的前一天）。最多，易腐食品庫存會在 72 小時內被更新，產生少於 1% 的食品浪費。這樣，我們精心策劃的貨架上就不會有任何東西過期。',
        img: howitworksPic.CheckoutRequired,
        reverse: false
    },
    {
        title: '送貨上門',
        paragraph: '我們一群專業的美食家團隊將於交貨當天早晨為您裝配您的包裹，您挑選的雜貨將直接送到您家門口。當您的包裹離開我們的倉庫時，您將收到一條短信，並在送貨完成後收到另一條短信。此短信還包含我們的廚房筆記本的連結，裡面滿載著美味的食譜和如何烹飪/享用新鮮美食的靈感。',
        img: howitworksPic.deliver,
        reverse: true
    }
]


</script>

<style scoped></style>
