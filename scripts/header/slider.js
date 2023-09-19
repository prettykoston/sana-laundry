import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export default function initSlider() {
  new Swiper(".header-slider", {
    breakpoints: {
      // when window width is >= 320px
      321: {
        direction: "vertical",
      },
    },

    modules: [Navigation, Pagination],
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".header-slider__pagination",
      clickable: true,
      bulletActiveClass:
        "swiper-pagination-bullet-active header-slider__bullet-active",
      bulletClass: "swiper-pagination-bullet header-slider__bullet-inactive",
    },

    navigation: {
      nextEl: ".header-slider__next",
      prevEl: ".header-slider__prev",
    },
  });
}
