const listOfAccordion = document.querySelectorAll(".accordion");
const listOfAccordionBody = document.querySelectorAll(".accordionBody");

const addActive = (element) => {
  element.classList.add("active");
};

const removeActive = (element) => {
  element.classList.remove("active");
};

const findActiveAccordion = () => {
  let indexOfActiveAccordion = -1;

  listOfAccordionBody.forEach((element, index) => {
    if (element.classList.contains("active")) {
      indexOfActiveAccordion = index;
    }
  });

  return indexOfActiveAccordion;
};

listOfAccordion.forEach((accordion, index) => {
  accordion.addEventListener("click", (event) => {
    const indexOfActive = findActiveAccordion();
    console.log(event.currentTarget);

    if (indexOfActive === index) {
      removeActive(listOfAccordionBody[indexOfActive]);
    } else if (listOfAccordionBody[indexOfActive]) {
      removeActive(listOfAccordionBody[indexOfActive]);
      addActive(listOfAccordionBody[index]);
    } else {
      addActive(listOfAccordionBody[index]);
    }
  });
});
