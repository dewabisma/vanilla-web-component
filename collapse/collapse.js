const collapseBtnList = document.querySelectorAll('[data-toggle="collapse"]');
console.log(collapseBtnList[0].ariaExpanded);

const toggleCollapse = (btnElement) => {
  const collapseTarget = document.querySelector(btnElement.dataset.target);
  const elementHeight = collapseTarget.children[0].offsetHeight;

  if (btnElement.ariaExpanded === "false") {
    btnElement.ariaExpanded = "true";
    collapseTarget.style.height = `${elementHeight}px`;
  } else {
    btnElement.ariaExpanded = "false";
    collapseTarget.style.height = "0px";
  }
};

collapseBtnList.forEach((element) => {
  element.addEventListener("click", () => {
    toggleCollapse(element);
  });
});
