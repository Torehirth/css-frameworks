import { personalTag } from "../../../constants/api.mjs";
import { createPost } from "../createPost.mjs";

export const createPostHandler = () => {
  const createPostForm = document.querySelector("#create-post-form");

  if (createPostForm) {
    createPostForm.addEventListener("submit", handlePostFormEvent);
    createPostForm.reset();
  }
};

const handlePostFormEvent = (e) => {
  e.preventDefault();
  const createPostForm = e.target;
  const formData = new FormData(createPostForm);
  const postData = Object.fromEntries(formData);

  if (postData.media) {
    postData.media = {
      url: postData.media,
      alt: `Could be an image of ${postData.title} and/or ${postData.body}`,
    };
  } else {
    // If image URL isn't entered into form, delete media to not get 400 response from API
    delete postData.media;
  }
  postData.tags = [personalTag];
  createPost(postData);
};
