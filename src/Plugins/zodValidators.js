import * as z from "zod";
import { initializeTWzipcode, defineHandleFn } from "@/Plugins/zipCode.js";
import { useOrderStore } from "@/store/modules/order/index.js";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm, useField } from "vee-validate";
import { ref, computed } from "vue";
import { useDebounceFn } from "@vueuse/core";
import { toast } from "vue-sonner";

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
    loading,
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

const userLoginPassword = function () {
  const fields = z.object({
    userEmail: emailSchema,
    userPassword: emptyStr,
  });
  const handleSubmit = createHandleSubmit(fields);
  return {
    handleSubmit,
    loading,
    passwordIcon,
    passwordType,
    showPassword,
  };
};
const userLoginEmail = function () {
  const fields = z.object({
    userEmail: emailSchema,
  });
  const handleSubmit = createHandleSubmit(fields);
  return {
    handleSubmit,
    loading,
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

// 訂單操作

const userHandleProductItem = function (pd, qty) {
  const { handleOrderAdd } = useOrderStore();

  // qty 訂單頻率
  // product 訂單資料
  const product = ref(pd);
  const loading = ref(false);
  const theAmount = ref(qty);

  const disableBlur = ref(false);
  const amountSchema = z
    .number({ required_error: "只接受數字", invalid_type_error: "只接受數字" })
    .positive({ message: "不可以小於0" })
    .lte(99, { message: "已超過最大限制值" });

  const sendAmount = (operate) => {
    if (operate) operate();
    loading.value = true;
    amountDebounce(operate);
  };

  const amountDebounce = useDebounceFn(async () => {
    const { success, error } = amountSchema.safeParse(+theAmount.value);
    if (!success) {
      const [{ message }] = error.issues;
      toast.error(message);
      loading.value = false;
      return (theAmount.value = qty);
    }
    const data = { ...product.value, quantity: theAmount.value };
    await handleOrderAdd(data);
    toast.success("商品更新成功");
    loading.value = false;
  }, 1000);

  // 訂單的數量操作
  const productOperate = () => {
    const addProduct = () => sendAmount(() => theAmount.value++);
    const reduceProduct = () => sendAmount(() => theAmount.value--);
    return {
      addProduct,
      reduceProduct,
    };
  };

  // 可選:處理事件監聽邏輯
  const preventBlurEvent = () => {
    // 初始化 Blur 事件狀態
    const handleFocus = () => {
      disableBlur.value = false;
    };
    // 使用 Enter 事件時阻止 Blur
    const handleEnter = (event) => {
      disableBlur.value = true;
      loading.value = true;
      sendAmount();
      event.target.blur();
    };
    // 操作 Blur 事件
    const handleBlur = () => {
      if (disableBlur.value) return (disableBlur.value = false);
      sendAmount();
    };

    return {
      handleFocus,
      handleEnter,
      handleBlur,
    };
  };
  // 設定新的產品狀態
  const setProduct = (newPd) => (product.value = newPd);
  // 設定新的產品數量
  const setNewQty = (qty) => (theAmount.value = qty);

  return {
    theAmount,
    loading,
    setProduct,
    preventBlurEvent,
    productOperate,
    sendAmount,
    setNewQty,
  };
};

// 訂閱商品

const userChangeSubscriptionDeliveryday = function (initialValues) {
  const fields = z.object({
    deliveryday: emptyStr,
  });
  const handleSubmit = createHandleSubmit(fields, initialValues);
  return {
    handleSubmit,
  };
};

const userHandleSubscription = function (initialValues) {
  const fields = z.object({
    quantity: emptyStr,
    frequency: emptyStr,
    deliveryday: emptyStr,
    changeNextDate: emptyStr,
  });

  const handleSubmit = createHandleSubmit(fields, initialValues);
  return {
    handleSubmit,
  };
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
  userLoginPassword,
  userLoginEmail,
  // profile page
  profileUserField,
  profileUserAddress,
  profileUserDriverInstructions,
  profileUserEmail,
  // order
  userHandleProductItem,
  // subscribe
  userChangeSubscriptionDeliveryday,
  userHandleSubscription,
};
