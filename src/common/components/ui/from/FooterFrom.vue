<template>
  <form method="post">
    <div>
      <input type="text" placeholder="請輸入 email" />
    </div>
    <div>
      <primary-button :btnTitle="'註冊'"></primary-button>
    </div>
  </form>
</template>

<script>
import PrimaryButton from "../button/PrimaryButton.vue";
export default {
  components: { PrimaryButton },
};
</script>

<style scoped>
form {
  display: grid;
  justify-content: center;
  align-items: flex-end;
  grid-template-columns: 1fr;
  gap: 2.6rem;
}
input {
  width: 100%;
  border: 1px solid #000;
  padding: 0.69rem 0.875rem;
  border: 1px solid #949291;
  border-radius: 4px;
}
@media only screen and (min-width: 600px) {
  input {
    width: 60%;
  }
}
@media only screen and (min-width: 780px) {
  form {
    grid-template-columns: 1fr;
  }
  input {
    width: 80%;
  }
}
@media only screen and (min-width: 1024px) {
  form {
    grid-template-columns: 1fr 200px;
  }
  input {
    width: 100%;
  }
}
</style>
