<template>

    <form @submit.prevent="onSubmit" class="join-page__contnet--from grid-cols-4 text-color-primary twzipcode"
        ref="twzipcodes">
        <FormField v-slot="{ componentField }" name="streetAddress">
            <CostomInput class="col-span-4 sm:col-span-2 " user-label="街道地址 *" :componentField="componentField">
            </CostomInput>
        </FormField>

        <FormField v-slot="{ componentField }" name="unitNo">
            <CostomInput class="col-span-4 sm:col-span-2 " user-label=" 巷弄 *" :componentField="componentField">
            </CostomInput>
        </FormField>

        <FormField name="countys">
            <CostomSelect class="col-span-4 sm:col-span-2" :userLabel="'縣市*'">
                <select
                    class=" flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50   py-4 px-3.5 h-auto transition-shadow   duration-300"
                    data-role="county" />
            </CostomSelect>
        </FormField>

        <FormField name="districts">
            <CostomSelect class="col-span-4 sm:col-span-1" :user-label="'地區*'" :user-description="'輸入要更改的內容'">
                <select
                    class="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50   py-4 px-3.5 h-auto transition-shadow   duration-300"
                    data-role="district" />
            </CostomSelect>
        </FormField>

        <FormField name="zipCodeDefault">
            <CostomSelect class="col-span-4 sm:col-span-1" :user-label="'郵遞區號*'" :user-description="'輸入要更改的內容'">
                <input v-model.number="value"
                    class="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50   py-4 px-3.5 h-auto transition-shadow   duration-300"
                    data-role="zipcode" />
            </CostomSelect>
        </FormField>
        <FormField v-slot="{ componentField }" name="driverTips">
            <CostomTextArea class=" col-span-4 sm:col-span-4" user-placeholder="例如：門禁密碼、請與守衛溝通、放在植物後面、可以敲敲鄰居的門。"
                user-label="給司機備註 *" :componentFields="componentField" />
        </FormField>

        <FormField v-slot="{ componentField }" name="phone">
            <CostomInput class="col-span-4 sm:col-span-2" user-label="手機號碼 *" user-description="簡訊傳送追蹤提醒"
                :componentField="componentField"></CostomInput>
        </FormField>

        <FormField v-slot="{ componentField }" name="about">
            <CostomInput class="col-span-4 sm:col-span-2" user-label="你從哪裡知道我們的? *" :componentField="componentField">
            </CostomInput>
        </FormField>
        <div class=" col-span-3 text-left sm:col-span-2">
            <p>* 是必填項目</p>
        </div>

        <div class=" col-span-3 sm:col-span-2 sm:text-right">
            <button v-if="!loading" class="u-pirmary-button max-sm:max-w-none " type="submit">下一步</button>
            <LoadingCat2 v-else class="h-[50px] " />
        </div>
    </form>
</template>

<script setup>
/* zod */
import LoadingCat2 from '../../../ui/animat/LoadingCat2.vue'
import CostomInput from "@/common/components/ui/from/CostomInput.vue";
import { Form, FormField } from "@/common/composables/ui/form";
import { useField, deliveryAddress } from "@/Plugins/zodValidators.js";
import { ref, onMounted, inject } from 'vue';
import CostomSelect from "@/common/components/ui/from/CostomSelect.vue";
import CostomTextArea from "@/common/components/ui/from/CostomTextArea.vue";
import { useRouter } from 'vue-router';
const router = useRouter()


const { registerClientAddress } = inject(['deliveryAddress'])

const twzipcodes = ref('')
const { loading,
    handleSubmit, defineHandleFn, initializeZipcodeWithPage } = deliveryAddress({
        streetAddress: '芝麻街',
        unitNo: '水巷茶弄',
        about: '不重要',
        phone: '0912345678',
        driverTips: '放在植物後面',
    })




const { handleChange: setCountys } = useField('countys')
const { handleChange: setDistricts } = useField('districts')
const { value, handleChange: setZipcode, } = useField('zipCodeDefault')
defineHandleFn(setCountys, setDistricts, setZipcode)
const onSubmit = handleSubmit(async (val) => {
    try {

        loading.value = true
        const sendData = {
            user_Address: val.streetAddress,
            user_AddressLine: val.unitNo,
            user_City: val.countys,
            user_State: val.districts,
            user_ZipCode: +val.zipCodeDefault,
            user_phone: +val.phone,
            suer_driverTips: val.driverTips,
        }
        const reponse = await registerClientAddress.value(sendData)
        if (!reponse) return
        router.push({ name: 'payment-info' })
    } finally {
        loading.value = false
    }

})






onMounted(() => {
    initializeZipcodeWithPage(twzipcodes)
})


</script>

<style scoped>
* {
    font-family: RiiT_F;
    text-align: left;
}

.join-input__control select,
.join-input__control input,
.join-input__control textarea {
    max-width: none;
}
</style>
