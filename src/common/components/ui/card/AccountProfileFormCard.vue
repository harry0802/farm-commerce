<template>
    <form @submit.prevent="onSubmit">
        <slot name="form-tiitle"></slot>
        <div class="catd-fields">
            <slot name="form-table"></slot>

        </div>
        <slot name="form-TableZipcode"></slot>

        <slot name="form-Button"></slot>
    </form>
</template>

<script setup>
defineProps('onSubmit')
import { Form } from "@/common/composables/ui/form";
</script>
<style scoped>
.join-input__control>input {
    max-width: 100%;
}

.catd-fields {
    @apply grid w-full gap-y-6 gap-x-8 sm:grid-cols-2
}
</style>
