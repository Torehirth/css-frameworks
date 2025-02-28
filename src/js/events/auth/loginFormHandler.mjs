import { loginUser } from "../../api/auth/loginUser.mjs";

export const loginFormHandler = () => {
  const loginForm = document.querySelector("#login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", handleLoginFormSubmit);
  }
};

export const handleLoginFormSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const userData = Object.fromEntries(formData);

  if (userData.email) {
    userData.email = userData.email.toLowerCase();
  }
  loginUser(userData);
};
