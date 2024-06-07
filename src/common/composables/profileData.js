import { supabase } from "@/config/FarmPruductsItemManage.js";
import { pinia } from "@/store/pinia.js";
import { toRefs } from "vue";
import { useProfileInfoStore } from "@/store/modules/profile/profileStore.js";
import useAccountStore from "@/store/modules/account/accountStore.js";

function updateValueIfDifferent(originalValue, newValue) {
  return originalValue === newValue ? originalValue : newValue;
}

const resetProfile = function (data, newData) {
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const element = newData[key];
      const originalEl = data[key];
      if (!!element) {
        originalEl.val = updateValueIfDifferent(originalEl.val, element);
      }
    }
  }
};

const multipleTablesChannel = () => {
  const store = useProfileInfoStore(pinia);
  const accountStore = useAccountStore(pinia);
  supabase
    .channel("multiple-tables-changes")
    .on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "clients",
      },
      (payload) => {
        const { new: newData } = payload;
        if (newData.user_id === accountStore.userState.id) {
          store.notifications = newData.notifications;
          store.email.val = newData.user_Email;
          resetProfile(store.personalInfo, newData);
        }
      }
    )
    .on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "deliveryAddress",
      },
      (payload) => {
        const { new: newData } = payload;
        if (newData.clients_id === accountStore.userState.id) {
          resetProfile(store.deliveryAddress, newData);
          resetProfile(store.personalInfo, newData);
          store.driverInstructions.suer_driverTips = newData.suer_driverTips;
        }
      }
    )
    .on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "BillingAddress",
      },
      (payload) => {
        const { new: newData } = payload;
        if (newData.clients_id === accountStore.userState.id) {
          resetProfile(store.billingAddress, newData);
        }
      }
    )
    .on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "PaymentInfo",
      },
      (payload) => {
        const { new: newData } = payload;
        if (newData.client_id === accountStore.userState.id) {
          store.paymentInfo.card_cardNumber = newData.card_cardNumber;
          store.paymentInfo.card_date = newData.card_date;
        }
      }
    )
    .subscribe();
};

const getSupabaseSpecificData = async (spFrom, spSelect, spEq) => {
  try {
    const accountStore = useAccountStore(pinia);
    let { data, error } = await supabase
      .from(spFrom)
      .select(spSelect)
      .eq(spEq, accountStore.userState.id);

    if (error) throw error;
    if (data) return data;
  } catch (error) {
    console.error(error);
  }
};

const getAccountInfo = async function () {
  const store = useProfileInfoStore();
  const { registration, userState } = toRefs(useAccountStore());
  const [client, deliveryAddress, billingAddress, paymentInfo] =
    await Promise.all([
      getSupabaseSpecificData(
        "clients",
        "user_FirstName,user_LastName,user_Email,notifications,user_id",
        "user_id"
      ),
      getSupabaseSpecificData("deliveryAddress", "*", "clients_id"),
      getSupabaseSpecificData("BillingAddress", "*", "clients_id"),
      getSupabaseSpecificData(
        "PaymentInfo",
        "card_cardNumber,card_date,client_id",
        "client_id"
      ),
    ]);

  const userid = userState.value.id;
  registration.value.deliveryaddress =
    deliveryAddress?.[0]?.clients_id === userid;
  registration.value.personalinfo = client?.[0]?.user_id === userid;
  registration.value.paymentinfo = paymentInfo?.[0]?.client_id === userid;
  store.setAccountProfileInfo(
    client,
    deliveryAddress,
    billingAddress,
    paymentInfo
  );
};

const updateAccount = async function (spFrom, columnVal, spEq) {
  // spEq = 等於 table  user key 的 column 名稱
  const accountStore = useAccountStore(pinia);
  try {
    const { data, error } = await supabase
      .from(spFrom)
      .update(columnVal)
      .eq(spEq, accountStore.userState.id)
      .select("id");
    if (error) throw error;
    if (data) {
      return data;
    }
  } catch (error) {
    toast.error("更新失敗");
    throw error;
  }
};

export {
  updateAccount,
  getAccountInfo,
  multipleTablesChannel,
  getSupabaseSpecificData,
};
