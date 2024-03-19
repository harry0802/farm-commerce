<template>
    <div class="join-page__section">
        <div class="join-page__contnet max-w-full place-content-center place-items-center text-color-primary">
            <div class="u-text-giant tracking-widest	 ">謝謝您的註冊！</div>
            <div class="max-w-[600px] "><img class="rounded-md shadow-lg" src="@/assets/imgs/welcom.jpg" alt=""></div>
            <div>目前我們只對台灣本島發貨<br />特定地區可能需要 ✌🏼多收錢 ✌🏼</div>
            <div>不需要結帳！<br />
                你將於訂單截止日後為購物車中的商品付款。<br />
                請檢查購物車以查看具體的截止日期和時間。
            </div>
            <div class="text-center">
                <RouterLink class="u-pirmary-button " :to="{ name: 'home' }">前往購物</RouterLink>
            </div>
        </div>
    </div>

</template>
<style scoped>
* {
    font-family: "SentyGoldSand";

}

img {
    aspect-ratio: 21/9;
}
</style>
