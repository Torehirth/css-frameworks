const sortDropdownBtn = document.querySelector("#sort-dropdown");
const sortDropdownMenu = document.querySelector("#sort-menu");

const closeSortDropdownMenu = () => {
  sortDropdownMenu.classList.add("hidden");
};

export const toggleSortDropdownMenu = () => {
  sortDropdownBtn.addEventListener("click", () => {
    sortDropdownMenu.classList.toggle("hidden");
  });
};

export const closeSortDropDownByClickOutside = () => {
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#sort-dropdown")) {
      closeSortDropdownMenu();
    }
  });
};

export const closeSortDropdownByEscKey = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSortDropdownMenu();
    }
  });
};
