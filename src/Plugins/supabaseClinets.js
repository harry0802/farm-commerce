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

const userSignUp = async function (userEmail, userPassword, name) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
      options: {
        last_name: name,
      },
    });

    if (error) throw error;

    return data;
  } catch (err) {
    console.error(`Handle_SupabaseAPI_ERROR 💣:${err.message}`);
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
    console.error(`Handle_SupabaseAPI_ERROR 💣:${err.message}`);
    handleSupabaseError(err);
    throw err;
  }
};

const signInWithPassword = async function (userEnter) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userEnter.email,
      password: userEnter.password,
    });

    if (error) throw error;
    return data;
  } catch (error) {
    throw error;
  }
};

const signinWithEmail = async function (userEnter) {
  try {
    const { error } = await supabase.auth.signInWithOtp({
      email: userEnter,
      options: {
        shouldCreateUser: false,
        emailRedirectTo: "http://localhost:5173/farm-commerce/#/welcomeback",
      },
    });
    if (error) throw error;
    toast.success("已寄送登入信件");
  } catch (error) {
    handleSupabaseError(error);
    console.error(`Handle_SupabaseAPI_ERROR 💣:${error.message}`);
  }
};

const signOutSpabase = async function () {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    toast.success("已成功安全登出");
  } catch (error) {
    handleSupabaseError(error);
    console.error(`Handle_SupabaseAPI_ERROR 💣:${error.message}`);
    throw error;
  }
};

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
    throw err;
  }
};

const getUserInfo = async function () {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error) throw error;
    if (user) return user;
  } catch (error) {
    console.error(`Handle_QueryZip_ERROR 💣:${error.message}`);
    throw error;
  }
};

const confirmMagicLink = async function (token, type, email) {
  const { error } = await supabase.auth.verifyOtp({
    email: email,
    token: token,
    type: type,
  });
  if (error) {
    let errMessage;
    error.status === 403
      ? (errMessage = "您的 Token 已經過期，請重新進行登錄操作")
      : (errMessage = "出了點問題 , 請稍後再試，或是使用一般登入");
    setErrorToast(errMessage);
    throw error;
  }
  return token;
};

export {
  userSignUp,
  verifyOtp,
  userInsertRows,
  queryZipCode,
  getUserInfo,
  signInWithPassword,
  signinWithEmail,
  signOutSpabase,
  confirmMagicLink,
  setErrorToast,
  toast,
};
