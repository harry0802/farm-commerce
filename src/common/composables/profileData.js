import { supabase } from "@/config/FarmPruductsItemManage.js";
const testId = "c32a1e24-58bf-4714-b0a4-5e8e7e3421c9";
import useProfileInfoStore from "@/store/modules/profile/profileStore.js";
export const store = useProfileInfoStore();

function updateValueIfDifferent(originalValue, newValue) {
  return originalValue === newValue ? originalValue : newValue;
}

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

        for (const key in store.personalInfo) {
          if (Object.hasOwnProperty.call(store.personalInfo, key)) {
            const element = newData[key];
            const originalEl = store.personalInfo[key];
            if (!!element) {
              originalEl.val = updateValueIfDifferent(originalEl.val, element);
            }
          }
        }
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
        console.log(newData);
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
  const client = await getSupabaseSpecificData(
    "clients",
    "user_FirstName,user_LastName,user_Email,notifications",
    "user_id"
  );

  const deliveryAddress = await getSupabaseSpecificData(
    "deliveryAddress",
    "*",
    "clients_id"
  );

  const billingAddress = await getSupabaseSpecificData(
    "BillingAddress",
    "*",
    "clients_id"
  );
  const paymentInfo = await getSupabaseSpecificData(
    "PaymentInfo",
    "card_cardNumber,card_date",
    "client_id"
  );

  store.setAccountProfileInfo(
    client,
    deliveryAddress,
    billingAddress,
    paymentInfo
  );
};

export const updateAccount = async function (spFrom, columnVal, spEq) {
  try {
    const { data, error } = await supabase
      .from(spFrom)
      .update(columnVal)
      .eq(spEq, testId)
      .select();
    if (error) throw error;
    if (data) return data;
  } catch (error) {
    console.error(error.message);
  }
};
