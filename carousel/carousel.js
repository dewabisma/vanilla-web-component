const carouselItems = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".carousel-prev-button");
const nextBtn = document.querySelector(".carousel-next-button");

const findActiveIndex = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains("active")) return i;
  }

  return undefined;
};

const removeActiveClass = (element) => {
  element.classList.remove("active");
};

const addActiveClass = (element) => {
  element.classList.add("active");
};

const nextSlide = () => {
  const activeIndex = findActiveIndex(carouselItems);
  const nextItemIndex = (activeIndex + 1) % carouselItems.length;

  const activeElement = carouselItems[activeIndex];
  const nextElement = carouselItems[nextItemIndex];

  removeActiveClass(activeElement);
  addActiveClass(nextElement);
};

const prevSlide = () => {
  const activeIndex = findActiveIndex(carouselItems);
  const prevItemIndex =
    activeIndex - 1 === -1 ? carouselItems.length - 1 : activeIndex - 1;

  const activeElement = carouselItems[activeIndex];
  const prevElement = carouselItems[prevItemIndex];

  removeActiveClass(activeElement);
  addActiveClass(prevElement);
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
