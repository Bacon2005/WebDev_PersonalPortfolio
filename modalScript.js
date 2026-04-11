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
