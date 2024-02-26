import { supabase } from "@/config/FarmPruductsItemManage.js";

export const userSignUp = async function (userEmail, userPassword) {
  try {
    const { error } = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
    });

    if (error) {
      throw error;
    } else {
      return true;
    }
  } catch (err) {
    console.error(err.message);
  }
};

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
      error.message;
    }
  } catch (err) {
    console.log(err);
  }
};

// signInWithPassword();
