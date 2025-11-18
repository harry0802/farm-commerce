<template>
    <div class="supplier__content">
        <div class="grid-line items-start gap-y-10 lg:items-center">
            <div class="photo   col-span-full sm:col-start-3 sm:col-span-8 lg:col-start-7 ">
                <figure>
                    <img class="object-cover  w-full rounded" src="https://srwrseziyaecgzjcndxt.supabase.co/storage/v1/object/sign/gif/shopPing.gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zYWFkMjdjZS01OGYwLTQ2OTItYTlmNy1kYmNlYjAyNmI5NGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnaWYvc2hvcFBpbmcuZ2lmIiwiaWF0IjoxNzYzNDYxMjAzLCJleHAiOjQ4ODU1MjUyMDN9.nz4Xmhywo15bKcLOw1ve-NRKJYiw0q22-LGtVAmFDqg" alt="">
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
