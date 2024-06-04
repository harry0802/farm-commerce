<template>
    <div class="grid-line mt-6 ">
        <div v-for="item, i in data " :key="i" class="col-span-full     mr:col-span-6     mr:col-start-auto">
            <AccountSubscribeContent>
                <template #image>
                    <RouterLink :to="`/product/${item.product_name}-${item.product_code}`">
                        <img class="w-full  aspect-square  object-cover  " :src="item.image_url"
                            :alt="item.product_name">
                    </RouterLink>
                </template>

                <template #button="{ openFormFn, openForm }">
                    <button v-if="!openForm" @click="openFormFn"
                        class="min-w-[40px] text-sm  tracking-widest  font-semibold underline ">編輯</button>
                </template>

                <template #details>

                    <RouterLink :to="`/product/${item.product_name}-${item.product_code}`"
                        class="inline-flex u-text-small    txt-decoration  mb-4 underline  transition-colors duration-300">
                        {{ item.product_name }}
                    </RouterLink>

                    <div>
                        <p>Next Delivery</p>
                        <time :datetime="item.NextDelivery_Date"> {{ transformDormats(item.NextDelivery_Date
        ) }} </time>
                    </div>
                </template>

                <template #form="{ openForm }">
                    <div class="col-span-full" v-if="openForm">
                        <SubscribeHandleDetailFrom :data="item" />
                    </div>
                </template>
            </AccountSubscribeContent>
        </div>
    </div>

</template>

<script setup>
import AccountSubscribeContent from "@/common/components/ui/content/account/AccountSubscribeContent.vue";
import SubscribeHandleDetailFrom from "@/common/components/ui/from/account/subscriptions/SubscribeHandleDetailFrom.vue";
import dayjs from "dayjs";

const transformDormats = (d) => dayjs(d).format(`ddd/MMMD日`)

const props = defineProps({ data: Object })



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
