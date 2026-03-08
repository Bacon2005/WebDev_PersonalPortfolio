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

video.addEventListener("ended", () => {
  intro.classList.add("fade-out");
  main.classList.add("show");

  setTimeout(() => {
    intro.style.display = "none";
  }, 3000); // match your 3s CSS transition
});

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  nav.classList.toggle("open");
});

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
