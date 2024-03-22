import { supabase } from "@/config/FarmPruductsItemManage.js";
import { toast } from "vue-sonner";

const setErrorToast = (mes) => toast.error(mes);

function handleSupabaseError(err) {
  if (err.status === 409) {
    setErrorToast("⚠️資料已經存在");
  } else if (err.status === 403) {
    setErrorToast("請進行登錄或註冊");
  } else if (err.status === 429) {
    setErrorToast("因頻繁操作，請稍後再試");
  } else if (err.status === 500) {
    setErrorToast("出現伺服器內部錯誤，請稍後再試");
  } else if (
    err.message.includes("duplicate key value violates unique constraint")
  ) {
    setErrorToast("該資料已存在");
  } else {
    setErrorToast("發生錯誤，請稍後再試");
  }
}

const userSignUp = async function (userEmail, userPassword) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
    });

    if (error) throw error;
    console.log(data.user_metadata);
    console.log(data);
    return data;
  } catch (err) {
    console.error(err.message);
    handleSupabaseError(err);
  }
};

const verifyOtp = async function (email, token) {
  try {
    const {
      data: { session },
      error,
    } = await supabase.auth.verifyOtp({
      email,
      token,
      type: "email",
    });
    console.log(session);
    if (error) throw error;
    return session;
  } catch (err) {
    if (err.status === 400) {
      setErrorToast("請聯絡我們，重新設置您的信箱地址");
    } else if (err.status === 401) {
      setErrorToast("請輸入正確的 OTP 驗證碼");
    } else handleSupabaseError(err);
    throw err;
  }
};

const userInsertRows = async function (fromName, userData) {
  try {
    const { error, data } = await supabase
      .from(fromName)
      .insert(userData)
      .select();
    if (error) throw error;
    return data;
  } catch (err) {
    console.error(err.message);
    handleSupabaseError(err);
    throw err;
  }
};

const signInWithPassword = async function () {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "furryfriendfan@yopmail.com",
    password: "Zxc123123",
  });
  data, error;
};
// signInWithPassword();

// const { error } = await supabase.auth.signOut();

const queryZipCode = async function (zip) {
  try {
    let { data: TwZipCode, error } = await supabase
      .from("TwZipCode")
      .select("*")
      .eq("zipCode", zip);

    if (TwZipCode) {
      return TwZipCode;
    }
    if (error) {
      setErrorToast("查無該地區");
      throw error;
    }
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

const getUserInfo = async function () {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) throw error;
  if (user) return user;
};

// const getUserAddress = async function () {
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();
//   console.log(user);
//   let { data: deliveryAddress, error } = await supabase
//     .from("deliveryAddress")
//     .select("user_City,user_State,user_ZipCode,user_Address,user_AddressLine")
//     .eq("clients_id", "Equal to");
// };

export {
  userSignUp,
  verifyOtp,
  userInsertRows,
  queryZipCode,
  getUserInfo,
  toast,
};
