<template>
    <form>
        <FormField name="aa">
            <CostomInput />
        </FormField>
        <FormField name="aa">
            <CostomInput />
        </FormField>
    </form>
</template>


<script setup>
import { Form, FormField } from "@/common/composables/ui/form";
import CostomInput from "@/common/components/ui/from/CostomInput.vue";
// import { profileUserField } from "@/Plugins/zodValidators.js";


</script>

<style scoped></style>
