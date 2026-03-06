const video = document.getElementById("introVideo");
const intro = document.querySelector(".intro");
const main = document.querySelector(".main-content");

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// video.addEventListener("ended", () => {
//   intro.classList.add("fade-out");
//   main.classList.add("show");

//   setTimeout(() => {
//     intro.style.display = "none";
//   }, 3000); // match your 3s CSS transition
// });

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  nav.classList.toggle("open");
});

//carousel
const carousel = document.getElementById("carousel");

let isDown = false; // is mouse pressed
let startX; // starting X coordinate
let scrollLeftStart; // initial scrollLeft when drag starts

// Mouse down → start drag
carousel.addEventListener("mousedown", (e) => {
  isDown = true;
  carousel.classList.add("dragging");

  startX = e.pageX - carousel.offsetLeft;
  scrollLeftStart = carousel.scrollLeft;
});

// Mouse leave or up → stop drag
carousel.addEventListener("mouseup", () => {
  isDown = false;
  carousel.classList.remove("dragging");
});

carousel.addEventListener("mouseleave", () => {
  isDown = false;
  carousel.classList.remove("dragging");
});

// Mouse move → drag scroll
carousel.addEventListener("mousemove", (e) => {
  if (!isDown) return;

  e.preventDefault(); // prevent text selection

  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed multiplier
  carousel.scrollLeft = scrollLeftStart - walk;
});

// Optional: scroll wheel to horizontal scroll
carousel.addEventListener("wheel", (e) => {
  e.preventDefault();
  carousel.scrollLeft += e.deltaY;
});
