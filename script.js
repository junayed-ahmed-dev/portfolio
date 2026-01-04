const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// 3D tilt for cards with class "tilt"
document.querySelectorAll(".tilt").forEach((card) => {
  const maxTilt = 10; // degrees

  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    const px = (x / r.width) * 2 - 1;  // -1 .. 1
    const py = (y / r.height) * 2 - 1; // -1 .. 1

    const rotY = px * maxTilt;
    const rotX = -py * maxTilt;

    card.style.transform =
      `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-2px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});
