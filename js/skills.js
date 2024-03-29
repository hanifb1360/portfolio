gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".bar1",
  start: "top 70%",
  end: 110000,
  toggleClass: { className: "bar1-scrolled", targets: ".bar1" },
});
ScrollTrigger.create({
  trigger: ".bar3",
  start: "top 90%",
  end: 99999,
  toggleClass: { className: "bar2-scrolled", targets: ".bar2" },
});
ScrollTrigger.create({
  trigger: ".bar3",
  start: "top 90%",
  end: 99999,
  toggleClass: { className: "bar3-scrolled", targets: ".bar3" },
});
ScrollTrigger.create({
  trigger: ".bar4",
  start: "top 70%",
  end: 99999,
  toggleClass: { className: "bar4-scrolled", targets: ".bar4" },
});
ScrollTrigger.create({
  trigger: ".bar5",
  start: "top 60%",
  end: 99999,
  toggleClass: { className: "bar5-scrolled", targets: ".bar5" },
});
ScrollTrigger.create({
  trigger: ".bar6",
  start: "top 70%",
  end: 99999,
  toggleClass: { className: "bar6-scrolled", targets: ".bar6" },
});
ScrollTrigger.create({
  trigger: ".bar7",
  start: "top 60%",
  end: 99999,
  toggleClass: { className: "bar7-scrolled", targets: ".bar7" },
});
ScrollTrigger.create({
  trigger: ".bar6",
  start: "top 50%",
  end: 99999,
  toggleClass: { className: "bar8-scrolled", targets: ".bar8" },
});
ScrollTrigger.create({
  trigger: ".bar9",
  start: "top 90%",
  end: 99999,
  toggleClass: { className: "bar9-scrolled", targets: ".bar9" },
});
ScrollTrigger.create({
  trigger: ".bar8",
  start: "top 50%",
  end: 99999,
  toggleClass: { className: "bar10-scrolled", targets: ".bar10" },
});

ScrollTrigger.create({
  trigger: ".bar11",
  start: "top 100%",
  end: 99999,
  toggleClass: { className: "bar11-scrolled", targets: ".bar11" },
});
ScrollTrigger.create({
  trigger: ".bar12",
  start: "top 90%",
  end: 99999,
  toggleClass: { className: "bar12-scrolled", targets: ".bar12" },
});
ScrollTrigger.create({
  trigger: ".bar13",
  start: "top 70%",
  end: 99999,
  toggleClass: { className: "bar13-scrolled", targets: ".bar13" },
});
ScrollTrigger.create({
  trigger: ".bar14",
  start: "top 70%",
  end: 99999,
  toggleClass: { className: "bar14-scrolled", targets: ".bar14" },
});
ScrollTrigger.create({
  trigger: ".bar15",
  start: "top 70%",
  end: 99999,
  toggleClass: { className: "bar15-scrolled", targets: ".bar15" },
});
ScrollTrigger.create({
  trigger: ".bar15",
  start: "top 70%",
  end: 99999,
  toggleClass: { className: "bar16-scrolled", targets: ".bar16" },
});

gsap.to("#period1", {
  x: 1000,
  duration: 1,
  scrollTrigger: {
    trigger: "#period1",
    start: "top 100%",
    end: "top 40%",
    // ease: "back.out(1.7)",
    scrub: 2,
    toggleActions: "restart none none none",
  },
});
gsap.to("#period2", {
  x: 1000,
  duration: 6,
  scrollTrigger: {
    trigger: "#period2",
    start: "top 100%",
    end: "top 40%",
    scrub: 2,
    toggleActions: "restart none none none",
  },
});
gsap.to("#period3", {
  x: 1000,
  duration: 6,
  scrollTrigger: {
    trigger: "#period3",
    start: "top 100%",
    end: "top 40%",
    scrub: 2,
    toggleActions: "restart none none none",
  },
});
gsap.to("#period4", {
  x: 1000,
  duration: 2,
  scrollTrigger: {
    trigger: "#period4",
    start: "top 100%",
    end: "top 40%",
    scrub: 1,
    toggleActions: "restart none none none",
  },
});
gsap.to("#period5", {
  x: 1000,
  duration: 2,
  scrollTrigger: {
    trigger: "#period5",
    start: "top 100%",
    end: "top 40%",
    scrub: 1,
    toggleActions: "restart none none none",
  },
});
gsap.to("#period6", {
  x: 1000,
  duration: 2,
  scrollTrigger: {
    trigger: "#period6",
    start: "top 100%",
    end: "top 40%",
    scrub: 1,
    toggleActions: "restart none none none",
  },
});
gsap.to("#period7", {
  x: 1000,
  duration: 2,
  scrollTrigger: {
    trigger: "#period7",
    start: "top 100%",
    end: "top 40%",
    scrub: 1,
    toggleActions: "restart none none none",
  },
});
gsap.to("#period8", {
  x: 1000,
  duration: 2,
  scrollTrigger: {
    trigger: "#period8",
    start: "top 100%",
    end: "top 40%",
    scrub: 1,
    toggleActions: "restart none none none",
  },
});
gsap.to("#period9", {
  x: 1000,
  duration: 2,
  scrollTrigger: {
    trigger: "#period9",
    start: "top 100%",
    end: "top 40%",
    scrub: 1,
    toggleActions: "restart none none none",
  },
});
gsap.to("#period10", {
  x: 1000,
  duration: 2,
  scrollTrigger: {
    trigger: "#period10",
    start: "top 100%",
    end: "top 40%",
    scrub: 1,
    toggleActions: "restart none none none",
  },
});

gsap.to(".arrow", {
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".toTop",
    start: "bottom 100%",
    end: "bottom 40%",

    toggleActions: "restart none none none",
  },
});
