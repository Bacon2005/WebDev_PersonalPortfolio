//video fade in
const bgvideo = document.querySelector(".background-clip");

bgvideo.addEventListener("canplaythrough", () => {
  bgvideo.classList.add("loaded");
});
