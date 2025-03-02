import { removeFromStorage } from "../../../events/common/utils/removeFromStorage.mjs";

const logOutBtn = document.querySelector("#log-out-btn");
const logOutBtnMobile = document.querySelector("#log-out-btn-mobile");

export const logOut = () => {
  // Removes the userdata from local storage when logging out
  if (logOutBtn) {
    logOutBtn.addEventListener("click", () => removeFromStorage("user"));
  }
  if (logOutBtnMobile) {
    logOutBtnMobile.addEventListener("click", () => removeFromStorage("user"));
  }
};


