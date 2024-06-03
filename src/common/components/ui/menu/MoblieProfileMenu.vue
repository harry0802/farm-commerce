<template>
    <div class="nav-dropdown-wrap">
        <div class="nav-dropdown ">
            <RouterLink v-for="(navs, i ) in routerNavInfo" :key="i" :to="{ name: navs.path }"
                class="  flex place-items-center cursor-pointer" :exact-active-class="'isSelector'">
                <Icon class="   mr-2" :icon="navs.icon" />
                {{ navs.title }}
            </RouterLink>
            <PopupLogingount>
                <template #default>
                    <div class="nav-dropdown--link flex place-items-center">
                        <Icon class=" mr-2" icon="memory:logout" />
                        <button class="text-left w-full" variant="outline">
                            安全登出
                        </button>
                    </div>
                </template>
            </PopupLogingount>
        </div>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import PopupLogingount from "@/common/components/ui/button/PopupLogingount.vue";

const routerNavInfo = [
    { title: '會員訂閱', path: 'subscriptions', icon: 'entypo:cycle' },
    { title: '宅配時間表', path: 'delivery-schedule', icon: 'carbon:delivery' },
    { title: '用戶檔案', path: 'profile', icon: "ph:user-list-fill" },
    { title: '訂單紀錄', path: 'order-history', icon: 'icon-park-outline:history-query' },
    { title: '贈送農產箱，獲得 $25', path: 'referrals', icon: 'ic:twotone-discount' },
];

</script>

<style scoped>
.nav-dropdown-wrap>.nav-dropdown>* {
    font-family: "cjkfonts";
}




.nav-dropdown {
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;

}

.nav-dropdown>a,
.nav-dropdown>.nav-dropdown--link {
    padding: 16px 0;
}

.nav-dropdown>* {
    border-bottom: 1px solid #f2f2f2;
}

.iconify {
    stroke-width: .5px;
    stroke: currentColor;
}
</style>
