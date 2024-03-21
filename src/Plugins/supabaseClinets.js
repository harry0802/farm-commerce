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
    setErrorToast("您的電子郵件地址已被使用");
  } else {
    setErrorToast("發生錯誤，請稍後再試");
  }
}

export const userSignUp = async function (userEmail, userPassword) {
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

export const verifyOtp = async function (email, token) {
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

export const userInsertRows = async function (fromName, userData) {
  try {
    const { error, data } = await supabase
      .from(fromName)
      .insert(userData)
      .select();
    console.log(data);
    if (error) throw error;
    return data;
  } catch (err) {
    console.error(err.message);
    handleSupabaseError(err);
  }
};

// c4633c3b-74be-48cb-84dd-49c01e770e3c

const subscription = supabase.auth.onAuthStateChange((event, session) => {
  console.log(event, session);
  if (event === "INITIAL_SESSION") {
    console.log(`INITIAL_SESSION `);
    console.log(session);
  }
  if (event === "SIGNED_OUT") {
    console.log(session);
  }

  // if (event === "SIGNED_IN" || session.user) {
  //   return session.user;
  // }
  //  else if (event === "SIGNED_OUT") {
  //   // handle sign out event
  // } else if (event === "PASSWORD_RECOVERY") {
  //   // handle password recovery event
  // } else if (event === "TOKEN_REFRESHED") {
  //   // handle token refreshed event
  // } else if (event === "USER_UPDATED") {
  //   // handle user updated event
  // }
});

// subscription();

const signInWithPassword = async function () {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "furryfriendfan@yopmail.com",
    password: "Zxc123123",
  });
  data, error;
};
// signInWithPassword();

// const { error } = await supabase.auth.signOut();

export const queryZipCode = async function (zip) {
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
  }
};

// signInWithPassword();
