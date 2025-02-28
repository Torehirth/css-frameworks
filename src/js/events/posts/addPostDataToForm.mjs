import { fetchAPI } from "../../api/utils/fetchAPI.mjs";
import { API_POSTS_URL } from "../../constants/api.mjs";
import { getQueryParameter } from "../common/utils/getQueryParameter.mjs";

// Loads the post data (title, body, media url) to the edit form modal for the PUT request
export const addPostDataToForm = async () => {
  const postTitleInput = document.querySelector("#post-title");
  const postBodyTextarea = document.querySelector("#post-body");
  const postImageURLInput = document.querySelector("#post-image");

  const idQueryParameter = getQueryParameter("id");
  const Url = `${API_POSTS_URL}/${idQueryParameter}`;
  const data = await fetchAPI(Url, "GET");
  const post = data?.data || {};

  postTitleInput.value = post?.title;
  postBodyTextarea.value = post?.body;
  // If image URL is missing from post, add an empty string to the form image URL
  postImageURLInput.value = post?.media?.url || "";
};
