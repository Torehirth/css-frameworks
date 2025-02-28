import { getFromStorage } from "../../events/common/utils/getFromStorage.mjs";
import { API_KEY } from "../../constants/api.mjs";

export const createAPIRequestHeader = (method = "GET", formData) => {
  const { accessToken } = getFromStorage("user");
  const options = {
    method: method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-Noroff-API-Key": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  return options;
};
