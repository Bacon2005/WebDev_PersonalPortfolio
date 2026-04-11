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
  const isOpen = document.body.classList.contains("show-mobile-menu");
  document.body.classList.toggle("show-mobile-menu");
  if (document.body.classList.contains("show-mobile-menu")) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
  console.log("Burger pressed");
});

menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
  document.body.classList.remove("no-scroll");
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

// Navigation links auto-close menu
document.querySelector(".navigation-content").addEventListener("click", (e) => {
  const link = e.target.closest(".navigation-content a");

  if (!link) return;

  const url = link.getAttribute("href");

  if (!url || url.startsWith("#") || url.startsWith("mailto:")) return;

  e.preventDefault();

  document.body.classList.remove("show-mobile-menu");
  document.body.classList.remove("no-scroll");

  setTimeout(() => {
    window.location.href = url;
  }, 300);
});

//faq script
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const icon = item.querySelector(".faq-icon");
  item.querySelector(".faq-question").addEventListener("click", () => {
    // Close other items if needed (optional)
    faqItems.forEach((other) => {
      if (other !== item) {
        other.classList.remove("active");
        other.querySelector(".faq-icon").textContent = "+";
      }
    });

    // Toggle this item
    item.classList.toggle("active");

    // Update icon
    icon.textContent = item.classList.contains("active") ? "–" : "+";
  });
});
