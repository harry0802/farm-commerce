import useProfileInfoStore from "@/store/modules/profile/profileStore.js";
import { supabase } from "@/config/FarmPruductsItemManage.js";
import { createPinia } from "pinia";
const pinia = createPinia();
export const store = useProfileInfoStore(pinia);
const testId = "c32a1e24-58bf-4714-b0a4-5e8e7e3421c9";
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

export const multipleTablesChannel = supabase
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
      if (newData.user_id === testId) {
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
      if (newData.clients_id === testId) {
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
      if (newData.clients_id === testId) {
        console.log(newData);
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
      if (newData.client_id === testId) {
        console.log(newData);
      }
    }
  )
  .subscribe();

const getSupabaseSpecificData = async (spFrom, spSelect, spEq) => {
  try {
    let { data, error } = await supabase
      .from(spFrom)
      .select(spSelect)
      .eq(spEq, testId);

    if (error) throw error;
    if (data) return data;
  } catch (error) {
    console.error(error);
  }
};

export const getAccountInfo = async function () {
  const [client, deliveryAddress, billingAddress, paymentInfo] =
    await Promise.all([
      getSupabaseSpecificData(
        "clients",
        "user_FirstName,user_LastName,user_Email,notifications",
        "user_id"
      ),
      getSupabaseSpecificData("deliveryAddress", "*", "clients_id"),
      getSupabaseSpecificData("BillingAddress", "*", "clients_id"),
      getSupabaseSpecificData(
        "PaymentInfo",
        "card_cardNumber,card_date",
        "client_id"
      ),
    ]);
  store.setAccountProfileInfo(
    client,
    deliveryAddress,
    billingAddress,
    paymentInfo
  );
};

export const updateAccount = async function (spFrom, columnVal, spEq) {
  // spEq = 等於 table  user key 的 column 名稱
  try {
    const { data, error } = await supabase
      .from(spFrom)
      .update(columnVal)
      .eq(spEq, testId)
      .select("id");
    if (error) throw error;
    if (data) {
      return data;
    }
  } catch (error) {
    throw error;
  }
};
