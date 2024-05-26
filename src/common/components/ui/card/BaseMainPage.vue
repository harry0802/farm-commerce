<template>
    <main id="main">
        <Transition name="fade">
            <div v-if="!loading">
                <slot name="page" />
            </div>
            <LoadingDelicious v-else />
        </Transition>
        <slot name="sidebar" />
    </main>
</template>

<script setup>
import LoadingDelicious from "@/common/components/ui/animat/LoadingDelicious.vue";
const props = defineProps({ loading: Boolean })


</script>

<style scoped>
.fade-enter-active {
    transition: opacity 0.3s ease-in-out;
    transition-delay: .3s;

}

.fade-leave-active {
    transition: opacity 0.4s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
