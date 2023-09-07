import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const vanPic = document.querySelector(".section-service__van");
const serviceSection = document.querySelector(".section-service");

export default function initVan() {
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(max-width: 120em)",
      isTabLandscape: "(max-width: 79.6875em)",
      isTabPortrait: "(max-width: 48em)",
      isPhone: "(max-width: 20em)",
    },
    (context) => {
      let { isDesktop, isTabLandscape, isTabPortrait, isPhone } =
        context.conditions;

      /* 
      Desktop 
      */
      if (isDesktop) {
        const vanDesktop = gsap.timeline();

        vanDesktop
          .to(vanPic, { x: "-20rem" })
          .to(vanPic, { duration: ".1", rotation: "-0.5" })
          .to(vanPic, { duration: ".1", rotation: "0" });

        ScrollTrigger.create({
          animation: vanDesktop,
          trigger: serviceSection,
          scrub: 1,
          start: "center center",
          end: "+=1700",
          pin: ".pin-van-animation",
        });
      }

      /* 
      Tablet Landscape Mode
      */
      if (isTabLandscape) {
        const vanTabLandscape = gsap.timeline();
        vanTabLandscape
          .to(vanPic, { x: "-5rem" })
          .to(vanPic, { duration: ".1", rotation: "-0.5" })
          .to(vanPic, { duration: ".1", rotation: "0" });
        ScrollTrigger.killAll();
        ScrollTrigger.create({
          animation: vanTabLandscape,
          trigger: serviceSection,
          start: "top center",
          end: "+=800",
        });
      }

      /* 
      Tablet Portrait Mode
      */
      if (isTabPortrait) {
        const vanTabPortrait = gsap.timeline();

        vanTabPortrait
          .to(vanPic, { x: "2rem" })
          .to(vanPic, { duration: ".1", rotation: "-0.5" })
          .to(vanPic, { duration: ".1", rotation: "0" });

        ScrollTrigger.killAll();
        ScrollTrigger.create({
          animation: vanTabPortrait,
          trigger: serviceSection,
          start: "top center",
          end: "bottom",
        });
      }

      /* 
      Phone
      */
      if (isPhone) {
        const vanPhoneTl = gsap.timeline();

        vanPhoneTl
          .to(vanPic, { x: "-.5rem" })
          .to(vanPic, { duration: ".1", rotation: "-0.5" })
          .to(vanPic, { duration: ".1", rotation: "0" });

        ScrollTrigger.killAll();
        ScrollTrigger.create({
          animation: vanPhoneTl,
          trigger: serviceSection,
          start: "top top",
          end: "bottom",
        });
      }
    }
  );
}
