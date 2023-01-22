const sliderParent = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider .slide");
const indicatorItems = document.querySelectorAll(".slider .indicator .item");

const slider = (current, next) => {
  slides[current].classList.remove("active");
  indicatorItems[current].classList.remove("active");
  slides[next].classList.add("active");
  indicatorItems[next].classList.add("active");
};

const sliderCount = (i) => {
  const checkActive = (slide) => {
    return Array.from(slide.classList).includes("active");
  };
  let currentSlide = Array.from(slides).findIndex(checkActive);
  let nextSlide;
  if (i === -1 && currentSlide === 0) {
    nextSlide = slides.length - 1;
  } else if (i === 1 && currentSlide === slides.length - 1) {
    nextSlide = 0;
  } else {
    nextSlide = currentSlide + i;
  }

  slider(currentSlide, nextSlide);
};

setInterval(() => {
  sliderCount(1);
}, 5000);
