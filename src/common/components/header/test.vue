<template>
    <DropdownMenu :open="isOpen">
        <DropdownMenuTrigger as-child>
            <button @mouseenter="handleMouseEnter">
                123
            </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>

    </DropdownMenu>
</template>


<script setup>
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/common/composables/ui/dropdown-menu/index.js";
import { useElementHover } from '@vueuse/core'
const myHoverableElement = ref()
const isHovered = useElementHover(myHoverableElement)


import { ref } from 'vue';

const isOpen = ref(false);

const handleMouseEnter = () => {
    isOpen.value = true;
    console.log(123);
};

const handleMouseLeave = () => {
    isOpen.value = false;
};

</script>

<style scoped></style>
