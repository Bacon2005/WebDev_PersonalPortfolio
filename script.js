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
const modal = document.getElementById("project-modal");
const closeBtn = document.querySelector(".close-btn");

const title = document.getElementById("modal-title");
const context = document.getElementById("modal-context");
const tools = document.getElementById("modal-tools");
const images = document.getElementById("modal-images");
const reflection = document.getElementById("modal-reflection");

// PROJECT DATA
const projects = {
  bank: {
    title: "JavaFX Bank Simulation",
    context:
      "Simulates a bank with customers, tellers, and transactions. Includes a GUI and multithreading. Customers arrive randomly, wait in line, and are served by tellers. The system tracks transactions and balances. Shows the importance of synchronization and thread safety in a concurrent environment with valuable data.",
    tools: "Java, JavaFX, Multithreading Concepts",
    images: ["../images/project3.jpg"],
    reflection:
      "Improve interaction so that Users may perform their own transactions and add more complex banking features like loans and interest.",
  },
  casino: {
    title: "Casino Simulation",
    context:
      "A game simulation using Blackjack and Slots. Includes GUI and basic AI for dealer behavior. Multiple threads in the background to handle game logic, user interface, animaitions, and sound effects. Demonstrates OOP principles and JavaFX capabilities.",
    tools: "Java, JavaFX, OOP concepts, Multithreading",
    images: ["../images/project2.jpg"],
    reflection:
      "Add animations and better AI for gameplay. Add more games like Poker and Roulette.",
  },
  portfolio: {
    title: "Portfolio Website",
    context:
      "Personal portfolio to showcase my work. With a Minecraft theme. Built with pure HTML, CSS, and JavaScript. Features a responsive design, interactive elements, and smooth animations. Highlights my projects, skills, and contact information in a visually appealing way.",
    tools: "HTML, CSS, JavaScript",
    images: ["../images/project1.jpg"],
    reflection: "Improve responsiveness and add more animations.",
  },
  laitte: {
    title: "Laitte Inventory System",
    context:
      "A simple restaurant inventory management system built with JavaFX and PostgreSQL as its database.",
    tools: "Java, JavaFX, PostgreSQL",
    images: ["../images/project4.jpg"],
    reflection:
      "Add reporting features and improve UI/UX. Fix bugs and optimize database queries.",
  },
};

// OPEN MODAL
document.querySelectorAll(".preview-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const projectKey = btn.dataset.project;
    const project = projects[projectKey];

    if (!project) return; // safety check

    title.textContent = project.title;
    context.textContent = project.context;
    tools.textContent = project.tools;
    reflection.textContent = project.reflection;

    // images
    images.innerHTML = "";
    project.images.forEach((img) => {
      images.innerHTML += `<img src="${img}" />`;
    });

    modal.style.display = "block";

    // 🔥 PREVENT SCROLL
    document.body.classList.add("no-scroll");
  });
});

// CLOSE MODAL FUNCTION (reuse this)
function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("no-scroll"); // 🔥 restore scroll
}

// CLOSE BUTTON
closeBtn.onclick = closeModal;

// CLICK OUTSIDE MODAL
window.onclick = (e) => {
  if (e.target === modal) {
    closeModal();
  }
};

// OPTIONAL: ESC KEY CLOSE (pro feature)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Fade IN when page loads
window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  const loader = document.getElementById("loader");
  loader.classList.add("hidden");
});

// Fade OUT when leaving page
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const url = this.href;

    // Ignore if opening new tab or anchor link
    if (this.target === "_blank" || url.includes("#")) return;

    e.preventDefault();

    document.getElementById("loader").classList.remove("hidden");

    setTimeout(() => {
      window.location.href = url;
    }, 400); // match CSS transition
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

//video fade in
const bgvideo = document.querySelector(".background-clip");

bgvideo.addEventListener("canplaythrough", () => {
  bgvideo.classList.add("loaded");
});

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
  console.log("Burger pressed");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

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
  const submitButton = document.querySelector("#submit-btn");

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      submitButton.innerText = "Sending...";
      submitButton.disabled = true;

      emailjs.sendForm("service_kxija51", "template_oowoyk8", this).then(
        () => {
          submitButton.innerText = "Message Sent!";
          this.reset();

          setTimeout(() => {
            submitButton.innerText = "Send Message";
            submitButton.disabled = false;
          }, 3000);
        },
        (error) => {
          submitButton.innerText = "Failed";
          submitButton.disabled = false;
          console.error(error);
        },
      );
    });
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
