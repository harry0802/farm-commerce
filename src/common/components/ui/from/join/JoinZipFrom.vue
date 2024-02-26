<template>
    <form @submit.prevent class="grid gap-6 twzipcode" ref="twZipcode">
        <div class="join-input__control m-auto max-w-[272px] w-full text-left  ">

            <label class="text-color-primary block mb-1" for="zipcode">您的郵遞區號 : </label>
            <div class="flex w-full ">
                <select class="h-7 " data-role="county"></select>
                <select class="h-7" data-role="district"></select>
            </div>
            <input :class="{ enterError: zipCodeDefault.field.userError }" class=" block w-full h-12 py-4 px-3.5"
                @blur="zipCodeDefault.validate" id="zipcode" type="text" placeholder="台北市中區-100" data-role="zipcode"
                v-model="zipCodeDefault.field.userEnter">

            <div class="text-color-eva-light-red mt-1" v-if="zipCodeDefault.field.userError">請輸入有效的字元</div>

        </div>
        <div class="submit__container">
            <button v-if="!showMewMew" @click="submitFrom" class="u-pirmary-button" type="submit ">
                下一步
            </button>
            <LoadingCat2 v-else class="h-[50px] " />
        </div>
    </form>
</template>

<script setup>
import { ref, onMounted, toRefs } from "vue";
import { addressFields, store, showMewMew } from "@/Plugins/inputValidation.js";
import { useRouter } from "vue-router";
import { queryZipCode } from "@/Plugins/supabaseClinets.js";
import LoadingCat2 from '../../../ui/animat/LoadingCat2.vue'
const router = useRouter()
const twZipcode = ref('')
const { fields,
    initializeZipcodeWithPage, } = toRefs(addressFields())
const { zipCodeDefault } = toRefs(fields.value)


const submitFrom = async function () {
    if (!zipCodeDefault.value.validate()) return
    showMewMew.value = true
    const zipcode = +zipCodeDefault.value.field.userEnter
    const response = await queryZipCode(zipcode)
    if (response.length > 0) {
        store.setUserArea(response)
        router.replace({ name: 'in-area' })
    } else {
        router.replace({ name: 'out-area' })
    }
}
onMounted(() => {
    initializeZipcodeWithPage.value(twZipcode.value)
})
</script>

<style scoped>
* {
    font-family: "RiiT_F";
}

input {
    max-width: none;
    border-start-start-radius: 0;
    /* border-start-end-radius: 0; */
}

.join-input__control>div>select {
    border-bottom: transparent;
    border-end-end-radius: 0;
    border-end-start-radius: 0;
    padding: 0;
    text-align: center;
    max-width: 30%;

}

select:first-child {
    border-start-end-radius: 0;
}

select:last-child {
    border-start-start-radius: 0;
    border-left: transparent;
}

.join-input__control select:checked,
.join-input__control select:focus,
.join-input__control select:active {
    outline: none;
    border-color: #949291;
}
</style>
