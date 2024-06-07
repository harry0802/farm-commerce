<template>

    <BaseSection class="bg-b-color-browm">
        <BaseContent>
            <BaseTextContent reverse>
                <BaseText class="u-text-large" title="迷失方向的冒險者" paragraph="如果還記得一開始進來的地方可以回到入口 , 靠近牆壁有個離開地下城 ←">
                    <p class=" u-text-medium  mt-10 u-text-large tracking-widest">或利用傳送魔法離開:</p>
                    <div class=" mt-2 inline-flex flex-col u-text-small  ">
                        <RouterLink class="btn__linkUnderline--animate" :to="{ name: 'home' }">
                            回到主堡
                        </RouterLink>
                        <RouterLink class="btn__linkUnderline--animate" to="/shop/迷宮飯">回到商場
                        </RouterLink>
                    </div>
                </BaseText>
            </BaseTextContent>

            <BasePhtoContent reverse class="rounded-full" img="src/assets/gif/dungeon-meshi-delicious-in-dungeon.gif" />
        </BaseContent>
    </BaseSection>


</template>

<script setup>
import BaseSection from "@/common/components/ui/section/BaseSection.vue";
import BaseContent from "@/common/components/ui/content/base/BaseContent.vue";
import BasePhtoContent from "@/common/components/ui/content/base/BasePhtoContent.vue";
import BaseText from "@/common/components/ui/text/BaseText.vue";
import BaseTextContent from "@/common/components/ui/content/base/BaseTextContent.vue";
</script>

<style scoped>
* {
    font-family: RiiT_F;
}

a {
    @apply mt-2 underline-offset-8 text-color-primary-light
}
</style>
