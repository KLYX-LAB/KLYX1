gsap.registerPlugin(ScrollTrigger);

/* HERO */
gsap.from(".hero h1, .hero p", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  stagger: 0.2
});

/* STORY SCROLL */
gsap.utils.toArray(".reveal").forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      scrub: true
    },
    y: 100,
    opacity: 0
  });
});

gsap.from(".form-card", {
  scrollTrigger: {
    trigger: ".form-card",
    start: "top 80%"
  },
  y: 60,
  opacity: 0,
  duration: 1
});

/* CTA SCROLL */
function goContact(){
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

/* FORM */
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  window.open("https://wa.me/34600000000", "_blank");
});
