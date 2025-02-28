import { addPostDataToForm } from "../../../events/posts/addPostDataToForm.mjs";

const displayUpdateModal = (e) => {
  const editModal = document.querySelector("#edit-modal-container");
  const editButton = e.target.closest("#edit-button");

  if (editButton && editModal.classList.contains("hidden")) {
    editModal.classList.remove("hidden");
    addPostDataToForm();
  } else if (
    !e.target.closest("#edit-post-form") &&
    e.target.closest("#edit-modal-container") &&
    !editModal.classList.contains("hidden")
  ) {
    editModal.classList.add("hidden");
  }
};

export const displayUpdateModalListener = () => {
  document.addEventListener("click", displayUpdateModal);
};
