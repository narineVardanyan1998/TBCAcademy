const header = document.querySelector(".main-header");
header.style.transition = "opacity 0.5s ease-in-out";

document.addEventListener("scroll", () => {
  header.style.opacity = window.scrollY > 84 ? "0.8" : "1";
});
