<template>
    <!-- <FormItem>
        <FormLabel>OTP</FormLabel>
        <FormControl>

            <PinInput id="pin-input" placeholder="○" class="flex gap-2 items-center mt-1" otp type="number"
                :name="componentField.name" @complete="handleComplete" @update:model-value="(arrStr) => {
                    console.log([arrStr]);

                    arrStr.map((e) => {
                        console.log(e);

                    })
                    setValues({
                        pin: arrStr.filter(Boolean),
                    })
                }">

                <PinInputGroup>
                    <PinInputInput v-for="(id, index) in 6" :key="id" :index="index" />
                </PinInputGroup>
            </PinInput>
        </FormControl>
        <FormDescription>
            Allows users to input a sequence of one-character alphanumeric inputs.
        </FormDescription>
        <FormMessage />
    </FormItem> -->

    <div>
        <PinInput id="pin-input" v-model="value" placeholder="x" @complete="handleComplete" @update:model-value='(v) => {
            for (const key in v) {
                if (Object.prototype.hasOwnProperty.call(v, key)) {
                    const element = v[key];
                    console.log(element);
                    // value = element
                }
            }
        }'>

            <PinInputInput class="bg-color-grey-dark text-color-eva-dark-yellow" v-for="( id, index ) in  5 " :key="id"
                :index="index" />

        </PinInput>
    </div>
</template>

<script setup>
import { inject } from "vue";
import { ref, watch } from "vue";
import {
    PinInput,
    PinInputGroup,
    PinInputInput,
} from "@/common/composables/ui/pin-input";
import {
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/common/composables/ui/form";

const value = ref('')


const props = defineProps({ componentField: { required: true } })
console.log(props.componentField);

const setValues = inject('setValues')

watch(value, (ne) => {
    console.log(ne);

})



const handleComplete = e => console.log(e.join(''))

</script>

<style scoped></style>
