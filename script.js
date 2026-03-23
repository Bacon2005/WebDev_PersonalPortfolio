const video = document.getElementById("introVideo");
const intro = document.querySelector(".intro");
const main = document.querySelector(".main-content");

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

AOS.init({
  once: true, // true = animate only once; false = repeat when scrolling
  offset: 100, // offset (px) from the trigger point
  duration: 1000, // default duration
});

// video.addEventListener("ended", () => {
//   intro.classList.add("fade-out");
//   main.classList.add("show");

//   setTimeout(() => {
//     intro.style.display = "none";
//   }, 3000); // match your 3s CSS transition
// });

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
  console.log("Burger pressed");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// toggle.addEventListener("click", () => {
//   toggle.classList.toggle("active");
//   nav.classList.toggle("open");
// });

const elements = document.querySelectorAll(".name, .desc");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("play");
      }
    });
  },
  {
    threshold: 0.5,
  },
);

elements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_kxija51", "template_oowoyk8", this).then(
        () => {
          alert("Message sent!");
          this.reset();
        },
        (error) => {
          alert("Failed: " + error.text);
        },
      );
    });
});

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
