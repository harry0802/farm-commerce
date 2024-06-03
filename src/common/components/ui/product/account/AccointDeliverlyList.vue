<template>
    <li class=" list-none relative ">
        <div class="text-left">
            <p v-if="deliverlyIndex === 0"
                class="delivery-badge inline-flex items-center border border-color-primary-light  bg-color-eva-dark-yellow rounded-xl px-2">
                <Icon class="text-color-primary-light" :icon="haveOderIcon" />
                <span class="ml-2 tracking-wider"> {{ productState }} </span>
            </p>
            <p v-if="products.order_date.date" class="item__title  tracking-widest ">
                <span class="  text-xl tracking-widest">{{ products.order_date.dayOfWeek }}</span>
                <span class="text-lg tracking-widest">{{ products.order_date.date.slice(4) }}</span>
                <span class="ml-3 text-base">({{ products.products.length }}項)</span>
            </p>

            <p class="item__text mt-2 text-base tracking-wide">
                <span class="">最後編輯</span>
                <span>：{{ lastEditTrans(products.order_date.date) }} 11 : 59 AM</span>
            </p>
        </div>
    </li>
</template>

<script setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";
import dayjs from "dayjs";
const props = defineProps({
    deadline: Boolean,
    deliverlyIndex: {
        type: Number
    },
    products: {
        type: Object,
    },
});

const haveOderIcon = computed(() =>
    props.deadline ? "iconoir:delivery-truck" : "fluent:clock-alarm-24-filled"
);

const productState = computed(() =>
    props.deadline ? "處理貨物中" : "即將到期"
);

// const haveOderItemText = computed(() => {
//   if (props.deadline) {
//     return ` 配送時間：
//           ${props.deliveryTime}`;
//   } else {
//     return `最後編輯：
//           ${props.lastEdit} `;
//   }
// });


const lastEditTrans = (day) => {
    let [y, m, d] = day.split('/')
    return dayjs(`${y}-${m}-${d - 1}`).format("dd, M月D")
}






</script>
<style scoped>
* {
    font-family: Yagoinini;
    color: #0c1d00;
}
</style>