import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";


export default function initSlider() {
  new Swiper(".header-slider", {
    direction: "vertical",
    pagination: {
      el: ".header-slider__pagination",
      clickable: true,
    },
  });
}


