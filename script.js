gsap.registerPlugin(ScrollTrigger);

/* HERO */
gsap.from(["#title1", "#title2", "#subtitle"], {
  y: 80,
  opacity: 0,
  duration: 1.2,
  stagger: 0.2,
  ease: "power3.out"
});

/* SCROLL */
gsap.utils.toArray(".animate").forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    y: 120,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});

/* CONTACT */
function goContact(){
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

/* FORM */
document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  const btn = this.querySelector("button");

  btn.innerText = "Enviando...";
  btn.disabled = true;

  setTimeout(() => {
    btn.innerText = "Solicitar acceso";
    btn.disabled = false;

    window.open("https://wa.me/34600000000", "_blank");
  }, 800);
});
