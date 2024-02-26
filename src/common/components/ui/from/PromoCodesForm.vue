<template>
  <form v-if="isInput" @submit.prevent>
    <input type="text" placeholder="請輸入折扣碼" v-model="something" />
    <button @click="closeInput">關閉</button>
  </form>
</template>

<script>
export default {};
</script>

<style></style>
