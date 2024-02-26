<template>
    <form @submit.prevent class="join-page__contnet--from grid-cols-4 text-color-primary twzipcode" ref="twzipcodes">
        <div class="join-input__control   col-span-3 sm:col-span-2 ">
            <label for="street-Address">街道地址 *</label>
            <input :class="{ enterError: streetAddress.field.userError }" type="text" data-role="address"
                id="street-Address" v-model.trim="streetAddress.field.userEnter">

        </div>
        <div class="join-input__control col-span-3 sm:col-span-2">
            <label for="unit-No">巷弄</label>
            <input :class="{ enterError: unitNo.field.userError }" type="text" id="unit-No"
                v-model.trim="unitNo.field.userEnter">

        </div>
        <div class="join-input__control col-span-3 sm:col-span-2">
            <label for="city">所在縣市 *</label>
            <select :class="{ enterError: countys.field.userError }" id="city" data-role="county"
                class="form-select "></select>

        </div>
        <div class="join-input__control col-span-3 sm:col-span-1">
            <label for="area">區域 *</label>
            <select :class="{ enterError: districts.field.userError }" id="area" data-role="district"
                class="form-select "></select>


        </div>
        <div class="join-input__control col-span-3 sm:col-span-1">
            <label for="zipcode">郵遞區號 *</label>
            <input :class="{ enterError: zipCodeDefault.field.userError }" id="zipcode" data-role="zipcode" type="text"
                :value="store.userArea.zipCode ? store.userArea.zipCode + '' : ''" />
        </div>

        <div class=" join-input__control col-span-4 sm:col-span-4">
            <label for="driver">給司機備註*</label>
            <textarea id="driver" class="resize-none h-40" placeholder="例如：門禁密碼、請與守衛溝通、放在植物後面、可以敲敲鄰居的門。"
                v-model.trim="driverTips.field.userEnter"></textarea>
        </div>
        <div class="join-input__control col-span-3 sm:col-span-2">
            <label for="phone">手機號碼*</label>
            <input :class="{ enterError: phone.field.userError }" type="text" id="phone"
                v-model.trim="phone.field.userEnter">
            <span>簡訊傳送追蹤提醒</span>
        </div>
        <div class="join-input__control col-span-3 sm:col-span-2">
            <label for="about">你從哪裡知道我們的*</label>
            <input :class="{ enterError: about.field.userError }" type="text" id="about"
                v-model.trim="about.field.userEnter">
        </div>

        <div class=" col-span-3 text-left sm:col-span-2">
            <p>* 是必填項目</p>
        </div>

        <div class="col-span-3 sm:col-span-2 sm:text-right">
            <button @click="sendRequset" class="u-pirmary-button max-sm:max-w-none " type="submit">下一步</button>
        </div>


    </form>
</template>

<script setup>

import { ref, onMounted, } from 'vue';
import { addressFields, store } from "@/Plugins/inputValidation.js";

const { fields,
    allAddressChecks,
    initializeZipcodeWithPage, } = addressFields()

const { streetAddress,
    unitNo,
    about,
    phone,
    driverTips,
    countys,
    districts,
    zipCodeDefault, } = fields





const twzipcodes = ref('')

streetAddress.field.userEnter = '芝麻街';
unitNo.field.userEnter = '水巷茶弄';
about.field.userEnter = '不重要';
phone.field.userEnter = '0912345678';
driverTips.field.userEnter = '放在植物後面'

onMounted(() => {
    initializeZipcodeWithPage(twzipcodes.value,)
})
const sendRequset = async function () {
    if (!allAddressChecks()) return

    const sendData = {
        user_Address: streetAddress.field.userEnter,
        user_AddressLine: unitNo.field.userEnter,
        user_City: countys.field.userEnter,
        user_State: districts.field.userEnter,
        user_ZipCode: +zipCodeDefault.field.userEnter,
        user_phone: +phone.field.userEnter,
        suer_driverTips: driverTips.field.userEnter,
    }

    try {
        await store.registerClientAddress(sendData)
    } catch (err) {
        console.log(err.message);
    }

}


</script>

<style scoped>
* {
    font-family: RiiT_F;
}

.join-input__control select,
.join-input__control input,
.join-input__control textarea {
    max-width: none;
}
</style>
