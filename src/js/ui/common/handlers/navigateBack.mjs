import { getFromSessionStorage } from "../../../events/common/utils/getFromSessionStorage.mjs";

export const navigateBack = () => {
  const backBtn = document.querySelector("#back-btn-wrapper");

  backBtn.addEventListener("click", (e) => {
    if (e.target.closest("#back-btn-wrapper")) {
      const previousPage = getFromSessionStorage("previousPage");
      window.location.href = previousPage;
    }
  });
};
