<template>
    <section class="col-span-full w-full" v-for=" list, week, i  in groupedAndSorted" :key="i">
        <SubscribeTitle :DeliveryDay="week" />
        <AccountSubscribeCard :data="list" />

    </section>
</template>

<script setup>
import SubscribeTitle from "@/common/components/ui/title/SubscribeTitle.vue";
import AccountSubscribeCard from "@/common/components/ui/card/AccountSubscribeCard.vue";
import { inject, watchEffect, ref } from "vue";
const { subscription } = inject('orderStore')

const sortOrder = ["週一", "週二", "週三", "週四", "週五"];
const groupedAndSorted = ref(null)



const collectSubScriptions = () =>
    groupedAndSorted.value = sortOrder.reduce((acc, day) => {
        const items = subscription.value.filter(item => item.DeliveryDay === day);
        if (items.length) acc[day] = items;
        return acc;
    }, {});
watchEffect(() => {
    collectSubScriptions()
})


</script>

<style scoped></style>
