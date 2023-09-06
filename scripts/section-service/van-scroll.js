import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const vanPic = document.querySelector(".section-service__van");
const serviceSection = document.querySelector(".section-service");

export default function initVan() {
  gsap.registerPlugin(ScrollTrigger);
  const vanTl = gsap.timeline();

  vanTl.to(vanPic, { x: "-25rem" });

  ScrollTrigger.create({
    animation: vanTl,
    trigger: serviceSection,
    scrub: true,
    start: "-=300",
    end: "+=900",
  });
}
