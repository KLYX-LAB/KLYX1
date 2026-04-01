gsap.registerPlugin(ScrollTrigger);

// HERO animación entrada
gsap.from("#title1", {
  y: 100,
  opacity: 0,
  duration: 1
});

gsap.from("#title2", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.3
});

gsap.from("#subtitle", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.6
});

// SCROLL CINEMÁTICO
gsap.utils.toArray(".animate").forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      scrub: 1
    },
    y: 150,
    opacity: 0
  });
});

// CONTACTO
function goContact(){
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// FORM + CONVERSIÓN
document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  alert("Te contactamos en breve 🚀");

  window.open("https://wa.me/34600000000", "_blank");
});
