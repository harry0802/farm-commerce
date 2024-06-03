import { ref, reactive, computed } from "vue";
import { initializeTWzipcode } from "@/Plugins/zipCode.js";
import useAccountStore from "@/store/modules/account/accountStore.js";
import { pinia } from "@/store/pinia.js";

export const store = useAccountStore(pinia);
export const showMewMew = ref(false);

// 輔助函數
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,47}$/;
const checkEnter = (value) => Number(value) && value.length === 3;
const validateFields = (fields) =>
  Object.values(fields).map((field) => field.validate());

// 用戶表單驗證
function useFieldValidator(initialValue = "", validationFn = null) {
  const field = reactive({
    userEnter: initialValue,
    userError: false,
  });
  function validate() {
    if (validationFn) {
      const isValid = validationFn(field.userEnter);
      handleUserEnter(!isValid);
      return isValid;
    }
    return handleUserEnter(field.userEnter === "");
  }

  function handleUserEnter(checking) {
    return (field.userError = checking);
  }

  return { field, validate, handleUserEnter };
}

//////////帳戶註冊//////////////
// 個人資訊
export const userFields = () => {
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
  const fields = {
    userFirstName: useFieldValidator(),
    userLastName: useFieldValidator(),
    userEmail: useFieldValidator("", (value) => emailPattern.test(value)),
    userEmailDup: useFieldValidator(
      "",
      (value) => value === fields.userEmail.field.userEnter
    ),
    userPassword: useFieldValidator("", (value) => passwordPattern.test(value)),
    userPasswordDup: useFieldValidator(
      "",
      (value) => value === fields.userPassword.field.userEnter
    ),
  };
  const allUserChecks = () => validateFields(fields).includes(false);
  return {
    fields,
    passwordIcon,
    passwordType,
    showPassword,
    allUserChecks,
  };
};

// 用戶地址
export const addressFields = () => {
  const fields = {
    streetAddress: useFieldValidator(),
    unitNo: useFieldValidator(),
    about: useFieldValidator(),
    phone: useFieldValidator(),
    driverTips: useFieldValidator(),
    countys: useFieldValidator(),
    districts: useFieldValidator(),
    zipCodeDefault: useFieldValidator("", (value) => checkEnter(value)),
  };

  const allAddressChecks = () => {
    return validateFields(fields).includes(false);
  };

  function initializeZipcodeWithPage(zipCheckPage) {
    const { countys, districts, zipCodeDefault } = fields;
    initializeTWzipcode(zipCheckPage, countys, districts, zipCodeDefault);
  }

  return {
    fields,
    allAddressChecks,
    initializeZipcodeWithPage,
  };
};

// 用戶登入

export const accountFields = () => {
  const fields = {
    verifyCode: useFieldValidator(),
  };
  return {
    fields,
  };
};

//////////用戶檔案更改//////////////

// 用戶資料
export const profileUserField = () => {
  const fields = {
    userFirstName: useFieldValidator(),
    userLastName: useFieldValidator(),
    phone: useFieldValidator(),
  };

  const calcFieldsError = {
    calcFirstName: computed(() =>
      fields.userFirstName.validate() ? "enterError" : ""
    ),
    calcLastName: computed(() =>
      fields.userLastName.validate() ? "enterError" : ""
    ),
    calcPhone: computed(() => (fields.phone.validate() ? "enterError" : "")),
  };

  const allUserChecks = () => validateFields(fields).includes(false);
  return {
    fields,
    calcFieldsError,
    allUserChecks,
  };
};

// 用戶住址

export const profileUserAddress = () => {
  const fields = {
    streetAddress: useFieldValidator(),
    unitNo: useFieldValidator(),
    countys: useFieldValidator(),
    districts: useFieldValidator(),
    zipCodeDefault: useFieldValidator("", (value) => checkEnter(value)),
  };

  const calcFieldsError = {
    calcStreetAddress: computed(() =>
      fields.streetAddress.validate() ? "enterError" : ""
    ),
    calcUnitNo: computed(() => (fields.unitNo.validate() ? "enterError" : "")),
    calcCountys: computed(() =>
      fields.countys.validate() ? "enterError" : ""
    ),
    calcDistricts: computed(() =>
      fields.districts.validate() ? "enterError" : ""
    ),
    calcZipCodeDefault: computed(() =>
      !fields.zipCodeDefault.validate() ? "enterError" : ""
    ),
  };

  const allAddressChecks = () => {
    return validateFields(fields).includes(false);
  };

  function initializeZipcodeWithPage(zipCheckPage) {
    const { countys, districts, zipCodeDefault } = fields;
    return initializeTWzipcode(
      zipCheckPage,
      countys,
      districts,
      zipCodeDefault
    );
  }

  return {
    fields,
    calcFieldsError,
    allAddressChecks,
    initializeZipcodeWithPage,
  };
};

// 配送提醒
export const profileUserDriverInstructions = () => {
  const fields = {
    about: useFieldValidator(),
  };
  const calcFieldsError = {
    calcAbout: computed(() => (fields.about.validate() ? "enterError" : "")),
  };
  return { fields, calcFieldsError };
};

// 更改電子郵件
export const profileUserEmail = () => {
  const fields = {
    userEmail: useFieldValidator("", (value) => emailPattern.test(value)),
  };
  const calcFieldsError = {
    calcEmail: computed(() =>
      fields.userEmail.validate() ? "" : "enterError"
    ),
  };
  return { fields, calcFieldsError };
};

// 帳單地址
export const profileUserBillingAddress = () => {
  const fields = {
    streetAddress: useFieldValidator(),
    unitNo: useFieldValidator(),
    about: useFieldValidator(),
    countys: useFieldValidator(),
    districts: useFieldValidator(),
    zipCodeDefault: useFieldValidator("", (value) => checkEnter(value)),
  };
  const allAddressChecks = () => {
    return validateFields(fields).includes(false);
  };

  function initializeZipcodeWithPage(zipCheckPage) {
    const { countys, districts, zipCodeDefault } = fields;
    initializeTWzipcode(zipCheckPage, countys, districts, zipCodeDefault);
  }

  return {
    fields,
    allAddressChecks,
    initializeZipcodeWithPage,
  };
};

// 密碼
export const profileUserPassword = () => {
  const fields = {
    userOldPassword: "",
    userPassword: useFieldValidator("", (value) => passwordPattern.test(value)),
    userPasswordDup: useFieldValidator(
      "",
      (value) => value === fields.userPassword.field.userEnter
    ),
  };
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
  const allUserChecks = () => validateFields(fields).includes(false);
  return {
    fields,
    passwordIcon,
    passwordType,
    showPassword,
    allUserChecks,
  };
};
