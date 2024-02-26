<template>
    <AccountProfileFormCard :onSubmit="onSubmit">
        <template #form-tiitle>
            <div>
                <p class="pb-5">
                    <span> 注意：</span>
                    此更改不適用於截止訂單。如果您需要更改已截止訂單的交貨地址，請與我們聯繫
                </p>
            </div>
        </template>

        <template #form-TableZipcode>
            <div class="grid w-full gap-y-6 gap-x-8 sm:grid-cols-2 twzipcode" ref="zipcode">
                <FormField v-slot="{ componentField }" name="streetAddress">
                    <CostomInput :componentField="componentField" :userLabel="'地址*'" :userDescription="'輸入要更改的內容'" />
                </FormField>

                <FormField v-slot="{ componentField }" name="unitNo">
                    <CostomInput :componentField="componentField" :userLabel="'樓號*'" :userDescription="'輸入要更改的內容'" />

                </FormField>

                <FormField name="countys">
                    <CostomSelect :userLabel="'縣市*'" :userDescription="'輸入要更改的內容'">
                        <select
                            class="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50   py-4 px-3.5 h-auto transition-shadow   duration-300"
                            data-role="county" />
                    </CostomSelect>
                </FormField>

                <FormField name="districts">
                    <CostomSelect :user-label="'地區*'" :user-description="'輸入要更改的內容'">
                        <select
                            class="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50   py-4 px-3.5 h-auto transition-shadow   duration-300"
                            data-role="district" />
                    </CostomSelect>
                </FormField>

                <FormField name="zipCodeDefault">
                    <CostomSelect :user-label="'郵遞區號*'" :user-description="'輸入要更改的內容'">
                        <input v-model="value"
                            class="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50   py-4 px-3.5 h-auto transition-shadow   duration-300"
                            data-role="zipcode" />
                    </CostomSelect>
                </FormField>
            </div>
        </template>

        <template #form-Button>
            <slot name="customButton"></slot>
        </template>
    </AccountProfileFormCard>
</template>

<script setup>
import AccountProfileFormCard from '@/common/components/ui/card/AccountProfileFormCard.vue'
import CostomInput from "@/common/components/ui/from/CostomInput.vue";
import CostomSelect from "@/common/components/ui/from/CostomSelect.vue";
import { inject, onMounted, ref } from "vue";
import { FormField, } from "@/common/composables/ui/form";
import { useField, profileUserAddress } from "@/Plugins/zodValidators.js";

const store = inject(['store'])
const zipcode = ref()


const { initializeZipcodeWithPage, onSubmit, defineHandleFn } = profileUserAddress(
    {
        streetAddress: store.deliveryAddress.user_Address.val,
        unitNo: store.deliveryAddress.user_AddressLine.val,
        countys: store.deliveryAddress.user_City.val,
        districts: store.deliveryAddress.user_State.val,
        zipCodeDefault: `${store.deliveryAddress.user_ZipCode.val}`,
    }
)

const { handleChange: setCountys } = useField('countys')
const { handleChange: setDistricts } = useField('districts')
const { value, handleChange: setZipcode, } = useField('zipCodeDefault')
defineHandleFn(setCountys, setDistricts, setZipcode)



onMounted(() => {
    const zipCode = initializeZipcodeWithPage(zipcode)
    zipCode.set({
        "county": store.deliveryAddress.user_City.val,
        "district": store.deliveryAddress.user_State.val,
        'zipcode': store.deliveryAddress.user_ZipCode.val
    });
})

store
</script>
<style scoped>
* {
    font-family: RiiT_F;
    @apply text-color-primary
}
</style>

