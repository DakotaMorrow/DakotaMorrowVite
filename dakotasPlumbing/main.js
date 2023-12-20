import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

window.onload = function () {
  setWidthHeight();

  window.addEventListener("resize", () => {
    setWidthHeight();
  });
};

gsap.registerPlugin(ScrollTrigger);

window.onload = function () {
  showWidthHeight();

  window.addEventListener("resize", () => {
    showWidthHeight();
  });
  initialize();
  unBlurBackground();
  staggerServices();
  displayPhone();
  scrollTrigger();
};

function scrollTriggerTimeline() {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#commercial",
      start: "200px bottom",
      // end: "+=1000",
      scrub: 1,
      // pin: true,
      markers: true,
    },
  });

  timeline.to("#commercial", { opacity: 100, duration: 3 });
}

function scrollTrigger() {
  let commercial = "#commercial";
  let residential = "#residential";
  let newConstruction = "#newConstruction";
  let industrial = "#industrial";

  let ids = [commercial, residential, newConstruction, industrial];

  ids.forEach(function (id) {
    console.log(id);
    gsap.to(id, {
      opacity: 1,
      scrollTrigger: {
        trigger: id,
        start: "200px bottom",
        end: "top 100px",
        scrub: true,
        // markers: true,
        id: "scrub",
      },
    });
  });
}

function initialize() {
  document.getElementById("backgroundImage").style.filter = "blur(3Px)";
  // document.getElementById("landing").style.filter = "grayscale(100%)";
}

function unBlurBackground() {
  let backgroundImage = document.getElementById("backgroundImage");
  gsap.to(backgroundImage, {
    opacity: 1,
    filter: "blur(0) grayscale(0%)",
    duration: 2,
    delay: 0,
    ease: "ease-in-out",
  });
}

function staggerServices() {
  gsap.to(".service", {
    opacity: 1,
    duration: 1,
    delay: 2,
    stagger: {
      each: 0.5,
      from: "top",
    },
  });
}
function displayPhone() {
  gsap.to(".phone", {
    opacity: 1,
    duration: 1,
    delay: 1,
  });
}
// function displayServices() {
//   gsap.to(".services", {
//     opacity: 1,
//     filter: "blur(0)",
//     duration: 1,
//     delay: 2,
//   });
// }

// let timeline = gsap.timeline();

// timeline
//   .to(".box1", { duration: 2, x: 100 }) //notice that there's no semicolon!
//   .to(".box2", { duration: 1, y: 200 })
//   .to(".box3", { duration: 3, rotation: 360 });

// gsap.to(".service", {
//   opacity: 1,
//   stagger: .5, // 0.1 seconds between when each ".box" element starts animating
// });

function showWidthHeight() {
  let windowInnerWidth = window.innerWidth;
  let windowInnerHeight = window.innerHeight;
  let elementClientWidth = document.documentElement.clientWidth;
  let elementClientHeight = document.documentElement.clientHeight;
  let elementOffsetWidth = document.documentElement.offsetWidth;
  let elementOffsetHeight = document.documentElement.offsetHeight;

  let vh = windowInnerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  let vw = elementClientWidth * 0.01;
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
