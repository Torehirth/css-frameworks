// Gets the form data from the edit modal and prepares it for PUT (update) request
export const getFormDataFromModal = (e) => {
  const updatePostForm = e.target.closest("#edit-post-form");
  const formData = new FormData(updatePostForm);
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
  return postData;
};
