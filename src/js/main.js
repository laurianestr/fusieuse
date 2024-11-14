/* instalations */

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* animations de chacunes des scènes et de leurs détailles */

const scene1 = gsap.timeline();
scene1
  .from(".scene-1 .plan-2", { xPercent: -100, duration: 20 }, 0)
  .from(".scene-1 .plan-3", { xPercent: 100, duration: 20 }, 10)
  .from(".scene-1 .plan-4", { yPercent: -100, duration: 30 }, 20);

const scene2 = gsap.timeline();
scene2
  .from(".scene-2 .plan-2", { yPercent: 100, duration: 20 }, 0)
  .from(".scene-2 .plan-3", { xPercent: -100, duration: 30 }, 20)
  .from(".scene-2 .plan-4", { yPercent: 100, duration: 20 }, 0)
  .to(".scene-2 .plan-5", { x: 15, y: -10, duration: 20 }, 40);

const scene3 = gsap.timeline();
scene3
  .from(".scene-3 .plan-2", { yPercent: 100, duration: 20 }, 0)
  .from(".scene-3 .plan-3", { xPercent: 100, duration: 20 }, 14)
  .from(".scene-3 .plan-4", { xPercent: -100, duration: 20 }, 28)
  .from(".scene-3 .plan-5", { yPercent: -100, duration: 30 }, 42);

const scene4 = gsap.timeline();
scene4
  .from(".scene-4 .plan-2", { xPercent: -100, duration: 30 }, 0)
  .from(".scene-4 .plan-3", { yPercent: 100, duration: 20 }, 10)
  .from(".scene-4 .plan-4", { yPercent: -100, duration: 20 }, 30);

const scene5 = gsap.timeline();
scene5
  .from(".scene-5 .plan-2", { xPercent: -100, duration: 20 }, 30)
  .from(".scene-5 .plan-3", { yPercent: 100, duration: 30 }, 60)
  .from(".scene-5 .plan-4", { yPercent: 100, duration: 20 }, 0);

const scene6 = gsap.timeline();
scene6
  .from(".scene-6 .plan-2", { yPercent: 100, duration: 30 }, 10)
  .from(".scene-6 .plan-3", { xPercent: 100, duration: 30 }, 30)
  .from(".scene-6 .plan-4", { yPercent: -100, duration: 30 }, 60)
  .from(".scene-6 .plan-5", { xPercent: -100, duration: 30 }, 40);

const scene7 = gsap.timeline();
scene7
  .from(".scene-7 .plan-2", { xPercent: -100, duration: 20 }, 10)
  .from(".scene-7 .plan-3", { xPercent: 100, duration: 30 }, 30)
  .from(".scene-7 .plan-4", { yPercent: -100, duration: 30 }, 50)
  .from(".scene-7 .plan-5", { yPercent: 100, duration: 0 }, 60);

const scene8 = gsap.timeline();
scene8
  .from(".scene-8 .plan-2", { yPercent: 100, duration: 20 }, 35)
  .from(".scene-8 .plan-3", { xPercent: 100, duration: 20 }, 8)
  .from(".scene-8 .plan-4", { yPercent: 100, duration: 20 }, 60)
  .from(".scene-8 .plan-5", { yPercent: -100, duration: 20 }, 40);

const scene9 = gsap.timeline();
scene9
  .from(".scene-9 .plan-2", { xPercent: -100, duration: 20 }, 10)
  .from(".scene-9 .plan-3", { yPercent: 100, duration: 20 }, 30)
  .from(".scene-9 .plan-4", { yPercent: -100, duration: 20 }, 60)
  .from(".scene-9 .plan-5", { yPercent: 100, duration: 30 }, 90);

/* transitions entre chacunes des scènes */

const tl = gsap.timeline();
tl.add(scene1)
  .to(".scene-1", { rotate: 0, duration: 20 })
  .from(".scene-2", { xPercent: 100, duration: 20 })
  .add(scene2)
  .to(".scene-2", { rotate: 0, duration: 20 })
  .from(".scene-3", { xPercent: 100, duration: 20 })
  .add(scene3)
  .to(".scene-3", { rotate: 0, duration: 20 })
  .from(".scene-4", { xPercent: 100, duration: 20 })
  .add(scene4)
  .to(".scene-4", { rotate: 0, duration: 20 })
  .from(".scene-5", { xPercent: 100, duration: 20 })
  .add(scene5)
  .to(".scene-5", { rotate: 0, duration: 20 })
  .from(".scene-6", { xPercent: 100, duration: 20 })
  .add(scene6)
  .to(".scene-6", { rotate: 0, duration: 20 })
  .from(".scene-7", { xPercent: 100, duration: 20 })
  .add(scene7)
  .to(".scene-7", { rotate: 0, duration: 20 })
  .from(".scene-8", { xPercent: 100, duration: 20 })
  .add(scene8)
  .to(".scene-8", { rotate: 0, duration: 20 })
  .from(".scene-9", { xPercent: 100, duration: 20 })
  .add(scene9)
  .to(".scene-9", { rotate: 0, duration: 20 });

/* liens entre les animations et le scroll */

ScrollTrigger.create({
  animation: tl,
  trigger: ".storytelling",
  start: "top top",
  end: "+=10000",
  scrub: 1,
  pin: true,
  anticipatePin: 1,
});

/* changement entre le texte créateur et le résumé */
const resume = document.querySelector(".resume");
const textResume = document.querySelector(".text-resume");

const crea = document.querySelector(".crea");
const texteCreator = document.querySelector(".text-creator");

function verifierCondition() {
  if (resume.classList.contains("lien-gros")) {
    crea.addEventListener("click", function () {
      texteCreator.classList.toggle("text-hide"),
        textResume.classList.toggle("text-hide"),
        crea.classList.toggle("lien-gros"),
        resume.classList.toggle("lien-gros");
    });
  } else {
    resume.addEventListener("click", function () {
      texteCreator.classList.toggle("text-hide"),
        textResume.classList.toggle("text-hide"),
        crea.classList.toggle("lien-gros"),
        resume.classList.toggle("lien-gros");
    });
  }
  setTimeout(verifierCondition, 200);
}

verifierCondition();
