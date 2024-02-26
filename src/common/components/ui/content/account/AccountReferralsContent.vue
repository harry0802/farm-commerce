<template>
    <div class="supplier__content">
        <div class="grid-line items-start gap-y-10 lg:items-center">
            <div class="photo   col-span-full sm:col-start-3 sm:col-span-8 lg:col-start-7 ">
                <figure>
                    <img class="object-cover  w-full rounded" src="@/assets/imgs/shopPing.gif" alt="">
                </figure>
            </div>
            <div
                class="text row-start-1  col-span-full sm:col-start-3 sm:col-span-8 lg:col-start-1 lg:col-span-6 xl:col-span-5">
                <AccountReferralsText />
                <AccountReferralsFrom />
            </div>
        </div>

    </div>
</template>

<script setup>
import AccountReferralsText from "@/common/components/ui/text/AccountReferralsText.vue";
import AccountReferralsFrom from "@/common/components/ui/from/account/AccountReferralsFrom.vue";
</script>

<style scoped>
img {
    aspect-ratio: 16/9;
}
</style>
