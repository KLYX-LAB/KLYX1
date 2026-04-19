gsap.registerPlugin(ScrollTrigger);

/* SCROLL STORY */
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

/* TYPEWRITER */
const el = document.querySelector(".type");
const text = el.innerText;
el.innerText = "";

let i = 0;
function type() {
  if (i < text.length) {
    el.innerHTML += text[i];
    i++;
    setTimeout(type, 50);
  }
}
type();

/* SCROLL CONTACT */
function goContact(){
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

/* FORM */
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  window.open("https://wa.me/34600000000", "_blank");
});

/* -------------------------------
   🎧 PARTICLES (TESLA STYLE LIGHT)
--------------------------------*/
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    dx: (Math.random() - 0.5),
    dy: (Math.random() - 0.5)
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();
