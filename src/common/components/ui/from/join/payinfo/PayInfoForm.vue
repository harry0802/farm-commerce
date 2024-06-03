<template>
    <form @submit.prevent="onSubmit">
        <div class="twzipcode" ref="twzipcodes">
            <div class=" mt-5 join-page__contnet--from grid-cols-4 ">
                <FormField v-slot="{ componentField }" name="user_Address">
                    <CostomInput class=" text-left col-span-4 sm:col-span-2 " user-label="街道地址 *"
                        :componentField="componentField">
                    </CostomInput>
                </FormField>

                <FormField v-slot="{ componentField }" name="user_AddressLine">
                    <CostomInput class=" text-left col-span-4 sm:col-span-2 " user-label=" 巷弄 *"
                        :componentField="componentField">
                    </CostomInput>
                </FormField>

                <FormField name="user_City">
                    <CostomSelect class="text-left col-span-4 sm:col-span-2" :userLabel="'縣市*'">
                        <select
                            class="text-center flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50   py-4 px-3.5 h-auto transition-shadow   duration-300"
                            data-role="county" />
                    </CostomSelect>
                </FormField>

                <FormField name="user_State">
                    <CostomSelect class="text-left col-span-4 sm:col-span-1" :user-label="'地區*'">
                        <select
                            class="text-center flex w-full rounded-md border border-input bg-transparent text-sm shadow-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50   py-4 px-3.5 h-auto transition-shadow   duration-300"
                            data-role="district" />
                    </CostomSelect>
                </FormField>

                <FormField name="user_ZipCode">
                    <CostomSelect class="text-left col-span-4 sm:col-span-1" :user-label="'郵遞區號*'">
                        <input v-model.number="user_ZipCode"
                            class="text-center flex w-full rounded-md border border-input bg-transparent text-sm shadow-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50   py-4 px-3.5 h-auto transition-shadow   duration-300"
                            data-role="zipcode" />
                    </CostomSelect>
                </FormField>


                <button @click="closeAddress = true, isAddresSave = false"
                    class="col-start-2 hover:bg-color-grey-light   rounded-md border border-input bg-transparent  text-sm shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed py-4 px-3.5  transition-colors  duration-300 "
                    type="button">取消</button>
                <button @click="isAddresSave = true"
                    class="col-star-4    rounded-md border border-input bg-transparent  text-sm shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed   py-4 px-3.5   transition-colors duration-300 hover:border-color-eva-dark-green"
                    :class="{ 'border-color-eva-dark-green': isAddresSave }" type="submit">儲存
                </button>

                <div class="col-span-full">
                    <p>* 請先儲存在進行下一步</p>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import { Form, FormField } from "@/common/composables/ui/form";
import { profileUserAddress, useField } from "@/Plugins/zodValidators.js";
import { ref, onMounted, toRefs, inject } from 'vue';
import CostomInput from "@/common/components/ui/from/CostomInput.vue";
import { useProfileInfoStore } from "@/store/modules/profile/profileStore.js";
import CostomSelect from "@/common/components/ui/from/CostomSelect.vue";
const twzipcodes = ref('')

const { deliveryAddress } = toRefs(useProfileInfoStore())
const { store } = inject('paymentInfo')
const {
    initializeZipcodeWithPage,
    handleSubmit,
    defineHandleFn,
} =

    profileUserAddress({
        user_Address: deliveryAddress.value.user_Address.val,
        user_AddressLine: deliveryAddress.value.user_AddressLine.val,
        user_City: deliveryAddress.value.user_City.val,
        user_State: deliveryAddress.value.user_State.val,
        user_ZipCode: deliveryAddress.value.user_ZipCode.val,
    })

// 定義地區
const { handleChange: setCountys } = useField('user_City')
const { handleChange: setDistricts } = useField('user_State')
const { value: user_ZipCode, handleChange: setZipcode, } = useField('user_ZipCode')
defineHandleFn(setCountys, setDistricts, setZipcode)

// 數據雙向流
const getCustomAddress = defineModel('getCustomAddress')
const closeAddress = defineModel('closeAddress')
const isAddresSave = defineModel('isAddresSave')

// 送出資料


const onSubmit = handleSubmit((va) => getCustomAddress.value = va)







onMounted(() => {
    const zipCode = initializeZipcodeWithPage(twzipcodes)
    zipCode.set({
        "county": deliveryAddress.value.user_City.val,
        "district": deliveryAddress.value.user_State.val,
        'zipcode': deliveryAddress.value.user_ZipCode.val
    });
})

</script>

<style scoped>
* {
    font-family: RiiT_F
}
</style>
