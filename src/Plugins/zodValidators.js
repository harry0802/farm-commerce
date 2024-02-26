import * as z from "zod";
import { initializeTWzipcode, defineHandleFn } from "@/Plugins/zipCode.js";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm, useField } from "vee-validate";

// 通用 Zod 設定
const emptyStr = z.string().min(1, {
  message: "* 不可空白",
});

const zipCodeLimit = z
  .string()
  .min(1, {
    message: "* 不可空白",
  })
  .max(3, { message: "限制3碼" });

const emailStr = z.string().email({ message: "請輸入正確的格式" });

// 通用 HandleSubmit 流程
const createHandleSubmit = (fields, initialValue = null) => {
  const formSchema = toTypedSchema(fields);
  const { handleSubmit } = useForm({
    validationSchema: formSchema,
    initialValues: initialValue,
  });
  return handleSubmit;
};
// Account 資料 （註冊中）

// Account 資料 （已登陸）
const profileUserField = (initialValues) => {
  const fields = z.object({
    userFirstName: emptyStr,
    userLastName: emptyStr,
    phone: emptyStr,
  });
  const handleSubmit = createHandleSubmit(fields, initialValues);
  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });
  return {
    fields,
    onSubmit,
  };
};
const profileUserAddress = (initialValues) => {
  const fields = z.object({
    streetAddress: emptyStr,
    unitNo: emptyStr,
    countys: emptyStr,
    districts: emptyStr,
    zipCodeDefault: zipCodeLimit,
  });
  const handleSubmit = createHandleSubmit(fields, initialValues);

  const onSubmit = handleSubmit((values) => {});
  const initializeZipcodeWithPage = (zipCheckPage) =>
    initializeTWzipcode(zipCheckPage);

  return {
    fields,
    initializeZipcodeWithPage,
    onSubmit,
    defineHandleFn,
  };
};

const profileUserDriverInstructions = (initialValues) => {
  const fields = z.object({
    about: emptyStr,
  });

  const handleSubmit = createHandleSubmit(fields, initialValues);
  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });
  return {
    onSubmit,
  };
};

const profileUserEmail = (initialValues) => {
  const fields = z.object({
    userEmail: emailStr,
  });

  const handleSubmit = createHandleSubmit(fields, initialValues);
  const onSubmit = handleSubmit((values) => {
    console.log(values);
  });
  return { onSubmit };
};

export {
  useField,
  // register page
  // profile page
  profileUserField,
  profileUserAddress,
  profileUserDriverInstructions,
  profileUserEmail,
};
