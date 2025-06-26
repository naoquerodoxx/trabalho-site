gsap.registerPlugin(ScrollTrigger);

gsap.from("#titulo", {
  duration: 1,
  y: -60,
  opacity: 0,
  ease: "power3.out"
});

gsap.from("#subtitulo", {
  duration: 1,
  y: 30,
  opacity: 0,
  delay: 0.5,
  ease: "power2.out"
});

// Animações ao rolar
gsap.utils.toArray("section").forEach((section, i) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      toggleActions: "play none none reverse"
    }
  });
});

// Animação da timeline
gsap.utils.toArray(".timeline li").forEach((item, index) => {
  gsap.from(item, {
    x: index % 2 === 0 ? -100 : 100,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: item,
      start: "top 90%",
      toggleActions: "play none none reverse"
    }
  });
});

gsap.utils.toArray(".col-md-4").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 40,
    delay: i * 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: card,
      start: "top 65%",
      toggleActions: "play none none reverse"
    }
  });
});

gsap.utils.toArray("#portfolio .col-md-4").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: i * 0.2,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// Voltar ao topo
scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Feedback visual ao enviar formulário
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const btn = this.querySelector("button");
  btn.innerHTML = "Enviado!";
  btn.classList.remove("btn-primary");
  btn.classList.add("btn-success");
  setTimeout(() => {
    btn.innerHTML = "Enviar";
    btn.classList.remove("btn-success");
    btn.classList.add("btn-primary");
    this.reset();
  }, 3000);
});
