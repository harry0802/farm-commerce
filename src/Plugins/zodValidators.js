import * as z from "zod";
import { initializeTWzipcode, defineHandleFn } from "@/Plugins/zipCode.js";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm, useField } from "vee-validate";
import { ref, computed } from "vue";

// 全局變數
const loading = ref(false);

// 全局函數
const hiddenPassword = ref(false);
const passwordIcon = computed(() =>
  hiddenPassword.value ? "pixelarticons:eye" : "pixelarticons:eye-closed"
);
const passwordType = computed(() =>
  hiddenPassword.value ? "text" : "password"
);
function showPassword() {
  hiddenPassword.value = !hiddenPassword.value;
}

// 通用 Zod 設定
const emptyStr = z
  .string({ required_error: "* 不可空白", invalid_type_error: "只接收文字" })
  .min(1, {
    message: "* 不可空白",
  });

const passwordSchema = z
  .string({ required_error: "* 不可空白" })
  .min(8) // 最小長度為8個字符
  .max(47) // 最大長度為47個字符
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
    "密碼必須包含至少一個大寫字母、一個小寫字母和一個數字"
  );

const emailSchema = z
  .string({
    required_error: "* 不可空白",
  })
  .regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, {
    message: "* 請輸入有效的電子郵件地址",
  });

const zipCodeLimitNumber = z
  .number({
    required_error: "* 不可空白",
    invalid_type_error: "* 只接收數字 ex : 0 - 10",
  })
  .min(100, {
    message: "* 限制3碼 ",
  })
  .max(999, { message: "* 限制3碼" });

const emailStr = z.string().email({ message: "* 請輸入正確的格式" });

// 通用 HandleSubmit 流程
const createHandleSubmit = (fields, initialValue = null) => {
  const formSchema = toTypedSchema(fields);
  const { handleSubmit } = useForm({
    validationSchema: formSchema,
    initialValues: initialValue,
  });
  return handleSubmit;
};

// Account 資料 （註冊頁面）
const checkZipcode = function () {
  const fields = z.object({
    countys: emptyStr,
    districts: emptyStr,
    zipCodeDefault: zipCodeLimitNumber,
  });
  const handleSubmit = createHandleSubmit(fields);
  const initializeZipcodeWithPage = (zipCheckPage) =>
    initializeTWzipcode(zipCheckPage);
  const onSubmit = handleSubmit((values) => values);
  return {
    loading,
    onSubmit,
    initializeZipcodeWithPage,
    defineHandleFn,
  };
};

const userFields = function () {
  const fields = z
    .object({
      userFirstName: emptyStr,
      userLastName: emptyStr,
      userEmail: emailSchema,
      userEmailDup: emptyStr,
      userPassword: passwordSchema,
      userPasswordDup: emptyStr,
    })
    .superRefine(
      ({ userPassword, userPasswordDup, userEmail, userEmailDup }, ctx) => {
        if (userPassword !== userPasswordDup) {
          ctx.addIssue({
            code: "custom",
            path: ["userPasswordDup"],
            message: "確認密碼與密碼不一致",
          });
        }
        if (userEmail !== userEmailDup) {
          ctx.addIssue({
            code: "custom",
            path: ["userEmailDup"],
            message: "確認郵件地址與郵件地址不一致",
          });
        }
      }
    );
  const handleSubmit = createHandleSubmit(fields);
  const onSubmit = handleSubmit((values) => values);

  return {
    loading,
    passwordIcon,
    passwordType,
    showPassword,
    onSubmit,
  };
};

const verifyEmailOtp = function () {
  const fields = toTypedSchema(
    z.object({
      pin: z
        .string({
          required_error: "* 不可空白",
        })
        .refine((val) => +val.length === 6 && !isNaN(val), {
          message: "請重新確認你的驗證碼",
        }),
    })
  );
  const { handleSubmit } = useForm({
    validationSchema: fields,
  });
  return {
    loading,
    handleSubmit,
  };
};

const deliveryAddress = function (initialValues) {
  const fields = z.object({
    streetAddress: emptyStr,
    unitNo: emptyStr,
    about: emptyStr,
    phone: emptyStr,
    driverTips: emptyStr,
    countys: emptyStr,
    districts: emptyStr,
    zipCodeDefault: zipCodeLimitNumber,
  });

  const handleSubmit = createHandleSubmit(fields, initialValues);
  const initializeZipcodeWithPage = (zipCheckPage) =>
    initializeTWzipcode(zipCheckPage);
  return {
    defineHandleFn,
    initializeZipcodeWithPage,
    loading,
    handleSubmit,
  };
};

const paymentinfo = function (initialValues) {
  const fields = z.object({
    userName: z.string({ required_error: "不可空白" }).regex(/^[a-zA-Z]*$/, {
      message: "只限於英文",
    }),
    creditNumber: z
      .string({ required_error: "不可空白" })
      .length(16, { message: "請符合信用卡格式" }),
    creditMoon: emptyStr,
    creditYear: emptyStr,
    creditLastNb: z.string().length(3, { message: "限定3碼" }),
    sameAddress: z.boolean(),
  });

  const handleSubmit = createHandleSubmit(fields, initialValues);
  return {
    loading,
    handleSubmit,
  };
};

// Login

const userlogin = function () {
  const fields = z.object({
    userEmail: emailSchema,
    userPassword: emptyStr,
  });
  const handleSubmit = createHandleSubmit(fields);
  return {
    handleSubmit,
  };
};

// Account 資料 （已登陸）

const profileUserField = (initialValues) => {
  const fields = z.object({
    user_FirstName: emptyStr,
    user_LastName: emptyStr,
    user_phone: emptyStr,
  });
  const handleSubmit = createHandleSubmit(fields, initialValues);
  return {
    handleSubmit,
  };
};
const profileUserAddress = (initialValues) => {
  const fields = z.object({
    user_Address: emptyStr,
    user_AddressLine: emptyStr,
    user_City: emptyStr,
    user_State: emptyStr,
    user_ZipCode: zipCodeLimitNumber,
  });
  const handleSubmit = createHandleSubmit(fields, initialValues);

  const initializeZipcodeWithPage = (zipCheckPage) =>
    initializeTWzipcode(zipCheckPage);

  return {
    initializeZipcodeWithPage,
    handleSubmit,
    defineHandleFn,
  };
};

const profileUserDriverInstructions = (initialValues) => {
  const fields = z.object({
    suer_driverTips: emptyStr,
  });

  const handleSubmit = createHandleSubmit(fields, initialValues);

  return {
    handleSubmit,
  };
};

const profileUserEmail = (initialValues) => {
  const fields = z.object({
    user_Email: emailSchema,
  });

  const handleSubmit = createHandleSubmit(fields, initialValues);
  return { handleSubmit };
};
export {
  useField,
  // register page
  checkZipcode,
  userFields,
  verifyEmailOtp,
  deliveryAddress,
  paymentinfo,
  // login
  userlogin,
  // profile page
  profileUserField,
  profileUserAddress,
  profileUserDriverInstructions,
  profileUserEmail,
};
