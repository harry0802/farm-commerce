<template>
    <div class="join-page__contnet--from mt-10 justify-start items-end lg:grid-cols-2 lg:mt-16">
        <div class="referrals-code__container   join-input__control  ">
            <label class="text-color-primary mb-2  " for="eferrals-code">複製你的專屬折扣碼</label>
            <input class="" id="eferrals-code" type="text" readonly v-model="discountCode">
            <div v-if="copied" class="absolute text-color-primary-light flex eferrals-code items-center">
                <Icon icon="mingcute:celebrate-line" />
                複製成功
            </div>
        </div>
        <button @click="copy(discountCode)" class="u-pirmary-button" type="button">複製折扣碼</button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useClipboard } from '@vueuse/core'
import { Icon } from '@iconify/vue';

const discountCode = ref('HARRYP13')
const { copy, copied } = useClipboard()
</script>

<style scoped>
label {
    font-family: RiiT_F;
    letter-spacing: 1.2px;

}
</style>
