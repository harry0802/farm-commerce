<template>
  <div class="cart__oder text-white">
    <!-- 切割組件 -->
    <!-- 低消提示 -->
    <!-- <procut-lowes-minimum></procut-lowes-minimum> -->
    <side-bar-oder-item />
    <product-progress :maxValue="diliverFree" :progressLength="getSubtotal" />
    <product-summary :subtotal="getSubtotal" :deliveryFee="getFree" :total="getTotal" />
  </div>


</template>

<script setup>
// import ProcutLowesMinimum from "../../cartsidebar/cartProdut/productItem/ProductLowesMinimum.vue";
import SideBarOderItem from "../../ui/content/cartSideBar/SideBarOderItem.vue";
import ProductProgress from "./productItem/ProductSummaryProgress.vue";
import ProductSummary from "../../cartsidebar/cartProdut/productItem/ProductSummary.vue";
import { orderGetter, diliverFree, } from "@/store/modules/order/getter/index.js";
import { toRefs } from "vue";


const { getSubtotal, getFree, getTotal } = toRefs(orderGetter())



</script>
