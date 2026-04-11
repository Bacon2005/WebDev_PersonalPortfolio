//particles script

const container = document.getElementById("particle-container");
const particleCount = 40; // Change this number to add more!

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement("div");
  particle.className = "particle";

  // Randomize starting position (0 to 100% of screen width)
  const x = Math.random() * 100;

  // Randomize size (between 5px and 15px)
  const size = Math.random() * 10 + 5;

  // Randomize speed/duration (between 5s and 15s)
  const duration = Math.random() * 10 + 5;

  // Randomize delay so they don't all start at once
  const delay = Math.random() * 10;

  // Apply styles directly
  particle.style.left = `${x}%`;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.animationDuration = `${duration}s`;
  particle.style.animationDelay = `-${delay}s`; // Negative delay starts them mid-animation

  container.appendChild(particle);
}
