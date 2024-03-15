import useProfileInfoStore from "@/store/modules/profile/profileStore.js";
import TWzipcode from "twzipcode.js";
import { supabase } from "@/config/FarmPruductsItemManage.js";

const store = useProfileInfoStore();
let handleContry, handleDistrict, handleZipcode;

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
      throw error;
    }
  } catch (err) {
    console.error(`TwZipCode Error ${err.message}`);
  }
};

// Helper function to initialize TWzipcode with reactive properties
const initializeTWzipcode = (element, countyRef, districtRef, zipCodeRef) =>
  setupTWzipcode(element, countyRef, districtRef, zipCodeRef);

const defineHandleFn = (contry, district, zipcode) => {
  handleContry = contry;
  handleDistrict = district;
  handleZipcode = zipcode;
};

const setupTWzipcode = (element) => {
  if (!handleContry || !handleDistrict || !handleZipcode) return;

  if (element) {
    return (element = new TWzipcode({
      combine: false,
      county: {
        value: store.deliveryAddress.user_City
          ? store.deliveryAddress.user_City.val
          : "",
        onChange: function (id) {
          const { county } = this.nth(id).get();
          county === ""
            ? (() => {
                handleContry("");
                handleDistrict("");
                handleZipcode("");
              })()
            : handleContry(county);
        },
      },
      district: {
        onChange: function (id) {
          const { district, zipcode } = this.nth(id).get();
          handleDistrict(district);
          handleZipcode(+zipcode);
        },
      },
      islands_hidden: true,
    }));
  }
};

export { queryZipCode, initializeTWzipcode, defineHandleFn };
