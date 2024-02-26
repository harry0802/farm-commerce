<template>
    <AccountProfileInfoCard>
        <template #card-item>
            <div
                class="notifications-content flex flex-col justify-end  col-span-full gap-y-6 items-start text-color-primary-light text-lg">
                <div>
                    <ProfileNotificationsDialog v-model:controlDialog="show">
                        <template #buttonName>更新電子郵件通知設置</template>
                        <template #dialogTitle>更新你的電子郵件通知設置</template>
                        <template #formArea>
                            <ProfileNotificationsCheckBox v-model:controlDialog="show" />
                        </template>
                    </ProfileNotificationsDialog>
                </div>
                <div>
                    <ProfileNotificationsDialog>
                        <template #buttonName>更新訂單追蹤通知（簡訊）</template>
                        <template #dialogTitle>以下是你的運送追踪簡訊通知更新：</template>
                        <template #textArea>
                            <p class="text-color-primary text-base">發送 STOP 到 (886) 123-3210 以取消提醒。</p>
                            <p class="text-color-primary mt-6 text-base">如果您先前選擇退出，並希望恢復交付追踪通知，請聯繫我們尋求協助。</p>
                        </template>
                    </ProfileNotificationsDialog>
                </div>
                <div>
                    <ProfileNotificationsDialog>
                        <template #buttonName>更新提醒通知（簡訊）</template>
                        <template #dialogTitle>更新你的訂單簡訊提醒。</template>
                        <template #textArea>
                            <p class="text-color-primary text-base">
                                我們在這裡為您服務。<br />請透過 (886) 123-3210 向我們發送簡訊<br />使用以下任何關鍵字：
                            </p>
                            <p class="text-color-primary mt-6 text-base" v-for=" (reminder, index) in reminders"
                                :key="index">

                                發送 {{ reminder.keyword }} {{ reminder.description }}。
                            </p>
                        </template>
                    </ProfileNotificationsDialog>
                </div>
            </div>
        </template>
    </AccountProfileInfoCard>
</template>

<script setup>
import AccountProfileInfoCard from '@/common/components/ui/card/AccountProfileInfoCard.vue'
import ProfileNotificationsDialog from "@/common/components/ui/popup/profile/ProfileNotificationsDialog.vue";
import ProfileNotificationsCheckBox from "@/common/components/ui/from/account/profile/ProfileNotificationsCheckBox.vue";
import { ref } from "vue";
const show = ref(false)
const reminders = [
    { keyword: 'REMIND', description: '以接收訂單提醒' },
    { keyword: 'STOP', description: '取消訂單提醒' },
    { keyword: 'STOP', description: '取消訂單提醒' },
    { keyword: 'UNSTOP', description: '恢復訂單提醒' },
    { keyword: 'CHANGE', description: '更改您收到訂單提醒的日期' }
]
</script>

