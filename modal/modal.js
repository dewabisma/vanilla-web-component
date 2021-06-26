const modalOpenBtn = document.querySelector(".modalBtn");
const modalWrapper = document.querySelector(".modalWrapper");
const modalCloseBtn = document.querySelector(".modalCloseBtn");
const modalFooterBtn = document.querySelector(".modalFooterBtn");
const modal = document.getElementById("modal");

modalOpenBtn.addEventListener("click", (event) => {
  modalWrapper.style.display = "block";
});

modalCloseBtn.addEventListener("click", (event) => {
  modalWrapper.style.display = "none";
});

modalFooterBtn.addEventListener("click", (event) => {
  modalWrapper.style.display = "none";
});

modalWrapper.addEventListener("click", (event) => {
  if (event.target === modalWrapper) modalWrapper.style.display = "none";
});
