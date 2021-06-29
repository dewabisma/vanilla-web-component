const dropdownBtnList = document.querySelectorAll('[data-toggle="dropdown"]');

const toggleDropdown = (dropdownBtn) => {
  const dropdownList = dropdownBtn.nextElementSibling;

  if (dropdownBtn.ariaExpanded === "false") {
    dropdownList.style.display = "block";
    dropdownBtn.ariaExpanded = "true";
  } else {
    dropdownList.style.display = "none";
    dropdownBtn.ariaExpanded = "false";
  }
};

dropdownBtnList.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    toggleDropdown(btn);
  })
);
