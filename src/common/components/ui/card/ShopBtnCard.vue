<template>
    <div class="product__Btn--container  "></div>
    <!-- 某些情況是需要判斷當天的日期是否符合產品可以購買的日期 -->
    <button type="button" class="u-pirmary-button  ">添加</button>
    <!-- <button type="button" class="">售完</button>
    <button type="button" class="">預購</button> -->
</template>

<script setup></script>

<style scoped>
button.u-pirmary-button {
    background: #f0a500;
    max-width: 100%;
    transition: background-color .3s;
}

.u-pirmary-button:hover {
    background: #ffc33e;

}

.u-pirmary-button:active {
    transform: scale(0.99) translateX(1px);
}



@media screen and (min-width: 599px) {
    button.u-pirmary-button {
        max-width: 276px;
        margin-top: 1rem;
    }

}

@media screen and (min-width: 950px) {
    button.u-pirmary-button {
        max-width: 180px;
        margin-right: 1rem;
    }

}
</style>
