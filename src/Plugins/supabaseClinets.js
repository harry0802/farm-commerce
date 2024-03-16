import { supabase } from "@/config/FarmPruductsItemManage.js";
import { toast } from "vue-sonner";
export const userSignUp = async function (userEmail, userPassword) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
    });

    if (error) throw error;
    return data;
  } catch (err) {
    console.error(err.message);

    if (err.status === 429) {
      toast.error("因頻繁操作，請稍後再試");
    }
    if (err.status === 500) {
      toast.error("出現伺服器內部錯誤，請稍後再試");
    } else if (
      err.message.includes("duplicate key value violates unique constraint")
    ) {
      toast.error("您的電子郵件地址已被使用");
    }
  }
};
/*

Failed to load resource: the server responded with a status of 429 ()
VM4668:1 Email rate limit exceeded
*
*
Failed to load resource: the server responded with a status of 500 ()
VM4668:1 duplicate key value violates unique constraint "users_email_partial_key"
eval	@	
*/
export const userInsertRows = async function (fromName, userData) {
  try {
    const { error } = await supabase.from(fromName).insert(userData);
    if (error) throw error;
    return true;
  } catch (err) {
    console.error(err.message);
  }
};

// c4633c3b-74be-48cb-84dd-49c01e770e3c
// export const subscription = supabase.auth.onAuthStateChange(
//   (event, session) => {
//     console.log(event, session);
//     // if (event === "INITIAL_SESSION") {
//     //   // handle initial session
//     // }
//     // if (event === "SIGNED_IN" || session.user) {
//     //   return session.user;
//     // }
//     //  else if (event === "SIGNED_OUT") {
//     //   // handle sign out event
//     // } else if (event === "PASSWORD_RECOVERY") {
//     //   // handle password recovery event
//     // } else if (event === "TOKEN_REFRESHED") {
//     //   // handle token refreshed event
//     // } else if (event === "USER_UPDATED") {
//     //   // handle user updated event
//     // }
//   }
// );

// subscription();

const signInWithPassword = async function () {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "furryfriendfan@yopmail.com",
    password: "Zxc123123",
  });

  data, error;
};
signInWithPassword();

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
      throw error;
    }
  } catch (err) {
    console.error(err.message);
  }
};

// signInWithPassword();
