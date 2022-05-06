const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slider__item");
const prevButton = slider.querySelector(".slider__toggle--prev");
const nextButton = slider.querySelector(".slider__toggle--next");
let currentSlideIndex = 0;

prevButton.addEventListener("click", () => {
  slides[currentSlideIndex].classList.remove("slider__item--current");
  currentSlideIndex = currentSlideIndex === 0 ? 2 : currentSlideIndex - 1;
  slides[currentSlideIndex].classList.add("slider__item--current");
});

nextButton.addEventListener("click", () => {
  slides[currentSlideIndex].classList.remove("slider__item--current");
  currentSlideIndex = currentSlideIndex === 2 ? 0 : currentSlideIndex + 1;
  slides[currentSlideIndex].classList.add("slider__item--current");
});
