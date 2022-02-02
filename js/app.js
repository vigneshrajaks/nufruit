const scroll = ScrollReveal({
  distance: "100px",
  duration: 2200,
  // reset: true,
});

scroll.reveal(`.hero-title,  .tracking-title, .cta-title`, {
  origin: "left",
  interval: 300,
  opacity: 0,
  easing: "ease",
});

scroll.reveal(` .hero-discription, .cta-dark`, {
  origin: "left",
  delay: 300,
  opacity: 0,
  easing: "ease",
});

scroll.reveal(` .hero-cta`, {
  origin: "left",
  delay: 600,
  opacity: 0,
  easing: "ease",
});

scroll.reveal(` .features-text-box, .calories-img-box, .tracking-subtitle`, {
  origin: "right",
  interval: 300,
  opacity: 0,
  // delay: 1000,
  easing: "ease",
});

scroll.reveal(`.tracking-points-box--1`, {
  origin: "right",
  delay: 300,
  opacity: 0,
  // delay: 1000,
  easing: "ease",
});

scroll.reveal(`.tracking-points-box--2`, {
  origin: "right",
  delay: 600,
  opacity: 0,
  // delay: 1000,
  easing: "ease",
});

scroll.reveal(`.features-img-box, .calories-text-box`, {
  origin: "left",
  interval: 300,
  opacity: 0,
});

scroll.reveal(`.company-img, .emoji-align-v-start, .logo`, {
  origin: "bottom",
  interval: 300,
  opacity: 0,
  easing: "ease",
});

scroll.reveal(`.company-img, .emoji-align-v-end, .cta-app-screen, .nav-btn`, {
  origin: "bottom",
  delay: 300,
  interval: 300,
  opacity: 0,
  easing: "ease",
});
