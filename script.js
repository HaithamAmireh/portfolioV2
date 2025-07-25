// Select all project cards
const cards = document.querySelectorAll(".project-card");
const terminal = document.getElementById("interactive-terminal");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 10; // Max 10deg
    const rotateX = ((centerY - y) / centerY) * 10;

    gsap.to(card, {
      duration: 0.4,
      rotateY: rotateY,
      rotateX: rotateX,
      transformPerspective: 1000,
      transformOrigin: "center",
      boxShadow: `${-rotateY * 2}px ${rotateX * 2}px 30px rgba(255, 255, 255, 0.1)`,
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      duration: 0.4,
      rotateY: 0,
      rotateX: 0,
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    });
  });
});

const glitch = () => {
  gsap
    .timeline()
    .to("#interactive-terminal", { x: 2, duration: 0.05 })
    .to("#interactive-terminal", { x: -2, duration: 0.05 })
    .to("#interactive-terminal", { x: 0, duration: 0.05 });
};

terminal.addEventListener("mouseenter", glitch);
