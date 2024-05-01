<template>
    <div class="grid-line mt-6 ">
        <div class="col-span-full mr:col-span-6   mr:col-start-auto">
            <AccountSubscribeContent>
                <template #image>
                    <a href="">圖片</a>
                </template>

                <template #button>
                    <button class="text-sm font-semibold underline ">編輯</button>
                </template>

                <template #details>
                    <a class="u-text-small txt-decoration  inline-block mb-4 underline    transition-colors duration-300"
                        href="">title</a>
                    <div>
                        <p>Next Delivery</p>
                        <time datetime="2024/1/20">禮拜幾 , 1月12日 </time>
                    </div>
                </template>
            </AccountSubscribeContent>
        </div>
    </div>

</template>

<script setup>
import AccountSubscribeContent from "@/common/components/ui/content/account/AccountSubscribeContent.vue";
</script>

<style scoped>
.txt-decoration {
    color: unset;
    text-decoration-color: transparent;
}

.txt-decoration:hover {
    text-decoration-color: currentColor
}
</style>
