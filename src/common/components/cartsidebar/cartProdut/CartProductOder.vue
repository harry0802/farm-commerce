<template>
  <!--如截止 overlay cutoff  css pointer-events:none -->
  <div class="cart__oder">
    <!-- 切割組件 -->
    <!-- 訂單及將無效倒數 -->
    <!-- 並且彈跳視窗 -->
    <!-- 切割組件 -->
    <!-- <div class="alert cutoff">
      <div class="cutoff__text">
        svg
        <div class="cutoff__alert">
          <p>(倒數)9:11 left to edit your order!</p>
          <p>Finalize your order by 11:59 AM</p>
          關閉圖標 svg 關閉整個提示
        </div>
      </div>
    </div> -->

    <!-- 切割組件 -->
    <!-- 低消提示 -->
    <!-- <procut-lowes-minimum></procut-lowes-minimum> -->

    <!-- 切割組件 -->
    <!-- 商品內容，與數量 -->
    <side-bar-oder-item />
    <!-- 商品內容，與數量 End-->

    <!-- 切割組件 -->
    <!-- 進度條 -->
    <product-progress :maxValue="1200" :progressLength="166" />
    <!-- 進度條 end -->

    <!-- 切割組件 -->
    <!-- 處理金額邏輯 -->
    <product-summary />
    <!-- 處理金額邏輯 end -->
  </div>

  <!-- // 如果訂單要截止時間！ 警報 -->
  <!-- <div class="toasted-container bottom-left">
    <div class="toasted cutoff-toast static f2p-toast default"> -->
  <!-- before 鬧鐘 -->
  <!-- <i class="class="mdi mdi-alert-circle-outline"">
            Your order for Sunday, October 1 is about to reach it's cutoff time!
        </i> -->
  <!-- after 取消 -->
  <!-- </div> -->
  <!-- </div> -->

  <!-- // 如果訂單要截止時間！ 警報  彈跳視窗 -->
  <!-- <div class="toasted-container bottom-left">
    <div class="toasted cutoff-toast static f2p-toast default"> -->
  <!-- before 鬧鐘 -->
  <!-- <i class="class="mdi mdi-alert-circle-outline"">
            Your order for Sunday, October 1 is about to reach it's cutoff time!
        </i> -->
  <!-- after 取消 -->
  <!-- </div> -->
  <!-- </div> -->

  <!-- // 如果訂單以截止時間！提示 -->
  <!-- <div class="alert processing">-->
  <!-- span : warning-->
  <!-- p :It is past the cut-off time to edit this order.  -->
  <!-- Arriving between: -->
  <!-- span:  10:00AM - 4:00PM-->

  <!-- </div> -->
</template>

<script setup>
// import ProcutLowesMinimum from "../../cartsidebar/cartProdut/productItem/ProductLowesMinimum.vue";
import SideBarOderItem from "../../ui/content/cartSideBar/SideBarOderItem.vue";
import ProductProgress from "./productItem/ProductSummaryProgress.vue";
import ProductSummary from "../../cartsidebar/cartProdut/productItem/ProductSummary.vue";
import { inject } from "vue";

const { productCart } = inject('orderStore')
</script>

<style scoped>
.cart__oder {
  /* background: rgba(50, 50, 84, 0.8); */
  color: #fff;
}
</style>
