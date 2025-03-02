import { API_POSTS_URL } from "../../../constants/api.mjs";
import { getQueryParameter } from "../../../events/common/utils/getQueryParameter.mjs";
import { getFormDataFromModal } from "../../../events/posts/getFormDataFromModal.mjs";
import { displayMessage } from "../../../ui/common/displayMessage.mjs";
import { isFieldsetDisabled } from "../../../ui/common/utils/isFieldsetDisabled.mjs";
import { createAPIRequestHeader } from "../../utils/createAPIRequestHeader.mjs";

export const initUpdatePost = () => {
  document.addEventListener("submit", (e) => {
    updatePostHandler(e);
  });
};

const updatePostHandler = async (e) => {
  e.preventDefault();
  const id = getQueryParameter("id");

  if (!id) {
    console.error("ID not found as query parameter");
    return;
  }

  const Url = `${API_POSTS_URL}/${id}`;
  const postData = getFormDataFromModal(e);

  try {
    isFieldsetDisabled(true, 0.7, "Publishing..");

    const options = createAPIRequestHeader("PUT", postData);
    const response = await fetch(Url, options);
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.errors?.[0]?.message || "Publishing the post failed. Please try again later..");
    }

    document.querySelector("#edit-label").innerHTML = "";
    document.querySelector("#post-wrapper").innerHTML = "";

    displayMessage("#info-message", "success", "Post edited successfully!");

    if (response.ok) {
      setTimeout(() => {
        location.reload();
      }, 1500);
    }
  } catch (err) {
    console.error(err);
    displayMessage("#info-message", "error", err.message || "Could not edit post");
  }
};
