<template>
  <dynamic-photo>
    <p class="u-text-small">目前尚未建立任何訂單</p>
    <!--
    如果用戶有訂閱商品的話？
        <div>
      <p>你帳戶上之前的訂閱的產品仍然有效。</p>
      <a href="#">傳送至個人訂單</a>
    </div> -->
  </dynamic-photo>
</template>

<script>
import DynamicPhoto from "@/common/components/ui/content/cartSideBar/DynamicPhoto.vue";
export default {
  components: { DynamicPhoto },
};
</script>

<style scoped>
p {
  font-family: Yagoinini;
  letter-spacing: 2px;
  color: #0c1d00;
}
</style>
