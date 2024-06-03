<template>
  <Form @submit="onsubmit" class="relative flex items-start">
    <div>
      <FormField :name="'email'">
        <input v-model="value" class=" outline-none text-color-primary" type="text" placeholder="請輸入 email" />
        <span class="px-1 rounded-md text-color-validate-error bg-white absolute -bottom-8 left-0">{{ errorText
          }}</span>
      </FormField>
    </div>
    <div class="self-start">
      <button type="submit" class="u-pirmary-button">註冊</button>
    </div>

  </Form>
</template>

<script setup>

import { FormField, Form } from "@/common/composables/ui/form";
import { computed } from "vue";
import { singinupEmail, toast, useField } from "@/Plugins/zodValidators.js";

const { handleSubmit } = singinupEmail()
const { value, setValue, errorMessage } = useField('email')

const onsubmit = handleSubmit(() => {
  toast.info('感謝你的註冊,如有活動我們將通知您')
  value.value = ''
})
const errorText = computed(() => value.value === '' ? setValue('') : errorMessage.value)


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
