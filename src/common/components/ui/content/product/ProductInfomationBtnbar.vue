<template>
    <div class="info__control flex  flex-col  ">
        <div v-if="!theSubscribe" class="control__button pt-6 flex  flex-col mr:flex-row  mr:items-end
         ">
            <ShopBtnCard />
            <ShopSubscribe @click="showSubscribe" class="mt-4 " />
        </div>
        <div v-else class="control__subscribe">
            <ProdictFormCard :onSubmit="onsubmit">
                <template #selection>
                    <ProductSelection v-model:handleSubmit="handleSubmit" />
                </template>

                <template #buttomBar>
                    <div class="button-controll  flex sm:flex-col min-[950px]:flex-row ">
                        <button class="u-pirmary-button confirm">確認</button>
                        <button class="u-pirmary-button cancel" @click="closeSubscribe">取消</button>
                    </div>
                </template>
            </ProdictFormCard>
        </div>
    </div>
</template>

<script setup>
import ShopBtnCard from '../../../ui/card/ShopBtnCard.vue'
import ShopSubscribe from '../../../ui/button/ShopSubscribe.vue'
import ProdictFormCard from '../../../ui/card/ProdictFormCard.vue'
import ProductSelection from '../../../ui/product/ProductSelection.vue'
import { inject, ref } from "vue";

const addSubscribe = inject('handleOrderAdd')
const productInfo = inject('productInfo')

const theSubscribe = ref(false)
const handleSubmit = ref(null)

const showSubscribe = function () {
    theSubscribe.value = true
}
const closeSubscribe = function () {
    theSubscribe.value = false
}



const onsubmit = async () => {
    await (handleSubmit.value(({ quantity, frequency }) => { addSubscribe({ quantity, frequency, ...productInfo }) }))()
    closeSubscribe()
}


</script>

<style scoped>
.button-controll {
    margin-top: 1rem;

}



.u-pirmary-button {
    max-width: 100%;
    @apply transition-colors duration-300
}

.u-pirmary-button.cancel {
    background: #fff;
    border: 2px solid #F0A500;

}

.u-pirmary-button:active {
    transform: scale(0.99) translateX(1px);
}

.confirm:hover {
    background: #ffc33e;
}


.cancel:hover {
    background: #ffcfb0;
}


/*  media  */
@media screen and (min-width: 599px) {
    .u-pirmary-button {
        max-width: 276px;

    }

    .name {
        font-size: 35px;
        line-height: 1.1;
        letter-spacing: -.05em;
    }

    .cancel {
        margin-top: 1rem;
    }
}

@media screen and (min-width: 950px) {

    .u-pirmary-button {
        min-width: 120px;
        min-height: 48px;
        width: 181px;
    }

    .button-controll {
        margin-top: 1.5rem;
        padding-top: .5rem;
    }

    .confirm {
        margin-right: 1rem;
    }

    .cancel {
        margin-top: 0px;
    }
}
</style>
