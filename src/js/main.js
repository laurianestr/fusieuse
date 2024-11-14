import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scene1 = gsap.timeline();
scene1
  .from(".scene-1 .plan-2", { xPercent: -100, duration: 10 })
  .from(".scene-1 .plan-3", { xPercent: 100, duration: 10 })
  .from(".scene-1 .plan-4", { yPercent: -100, duration: 10 });

const scene2 = gsap.timeline();
scene2
  .from(".scene-2 .plan-2", { yPercent: 110, duration: 12 }, 0)
  .from(".scene-2 .plan-3", { xPercent: 300, duration: 15 }, 10)
  .from(".scene-2 .plan-4", { yPercent: 100, duration: 12 }, 0)
  .from(".scene-2 .plan-5", { yPercent: 100, duration: 12 }, 0);

const scene3 = gsap.timeline();
scene3
  .from(".scene-3 .plan-2", { xPercent: 0, duration: 10 }, 0)
  .from(".scene-3 .plan-3", { xPercent: 0, duration: 2 })
  .from(".scene-3 .plan-4", { yPercent: 0, duration: 2 })
  .from(".scene-3 .plan-5", { yPercent: 0, duration: 2 });

const scene4 = gsap.timeline();
scene4
  .from(".scene-4 .plan-2", { xPercent: 0, duration: 2 })
  .from(".scene-4 .plan-3", { xPercent: 0, duration: 2 })
  .from(".scene-4 .plan-4", { yPercent: 0, duration: 2 });

const scene5 = gsap.timeline();
scene5
  .from(".scene-5 .plan-2", { xPercent: 0, duration: 2 })
  .from(".scene-5 .plan-3", { xPercent: 0, duration: 2 })
  .from(".scene-5 .plan-4", { yPercent: 0, duration: 2 })
  .from(".scene-5 .plan-5", { yPercent: 0, duration: 2 });

const scene6 = gsap.timeline();
scene6
  .from(".scene-6 .plan-2", { xPercent: -100, duration: 2 })
  .from(".scene-6 .plan-3", { xPercent: 100, duration: 2 })
  .from(".scene-6 .plan-4", { yPercent: -100, duration: 2 })
  .from(".scene-6 .plan-5", { yPercent: -100, duration: 2 });

const scene7 = gsap.timeline();
scene7
  .from(".scene-7 .plan-2", { xPercent: -100, duration: 2 })
  .from(".scene-7 .plan-3", { xPercent: 100, duration: 2 })
  .from(".scene-7 .plan-4", { yPercent: -100, duration: 2 })
  .from(".scene-7 .plan-5", { yPercent: -100, duration: 2 });

const scene8 = gsap.timeline();
scene8
  .from(".scene-8 .plan-2", { xPercent: 0, duration: 2 })
  .from(".scene-8 .plan-3", { xPercent: 0, duration: 2 })
  .from(".scene-8 .plan-4", { yPercent: 0, duration: 2 })
  .from(".scene-8 .plan-5", { yPercent: 0, duration: 2 });

const scene9 = gsap.timeline();
scene9
  .from(".scene-9 .plan-2", { xPercent: 0, duration: 2 })
  .from(".scene-9 .plan-3", { xPercent: 0, duration: 2 })
  .from(".scene-9 .plan-4", { yPercent: 0, duration: 2 });

const tl = gsap.timeline();
tl.add(scene1)
  .to(".scene-1", { rotate: 0, duration: 10 })
  .from(".scene-2", { xPercent: 100, duration: 10 })
  .add(scene2)
  .to(".scene-2", { rotate: 0, duration: 10 })
  .from(".scene-3", { xPercent: 100, duration: 10 })
  .add(scene3)
  .to(".scene-3", { rotate: 0, duration: 10 })
  .from(".scene-4", { xPercent: 100, duration: 10 })
  .add(scene4)
  .to(".scene-4", { rotate: 0, duration: 10 })
  .from(".scene-5", { xPercent: 100, duration: 10 })
  .add(scene5)
  .to(".scene-5", { rotate: 0, duration: 10 })
  .from(".scene-6", { xPercent: 100, duration: 10 })
  .add(scene6)
  .to(".scene-6", { rotate: 0, duration: 10 })
  .from(".scene-7", { xPercent: 100, duration: 10 })
  .add(scene7)
  .to(".scene-7", { rotate: 0, duration: 10 })
  .from(".scene-8", { xPercent: 100, duration: 10 })
  .add(scene8)
  .to(".scene-8", { rotate: 0, duration: 2 })
  .from(".scene-9", { xPercent: 100, duration: 2 })
  .add(scene9)
  .to(".scene-9", { rotate: 0, duration: 2 });

ScrollTrigger.create({
  animation: tl,
  trigger: ".storytelling",
  start: "top top",
  end: "+=9000",
  scrub: true,
  pin: true,
  anticipatePin: 1,
});
