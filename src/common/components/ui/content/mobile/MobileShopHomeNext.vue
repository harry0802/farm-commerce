<template>
    <MobileMenuSubcategorys>
        <template #title>
            <div class="flex gap-2 items-center">
                <Icon class="text-2xl " icon="memory:home-thatched" />
                <p>For You</p>
            </div>
        </template>
    </MobileMenuSubcategorys>
</template>


<script setup>
import { MobileMenuSubcategorys } from "@/common/components/ui/content/mobile/index.js";
import { Icon } from "@iconify/vue";
</script>


<style scoped>
* {
    font-family: RiiT_F;
}
</style>