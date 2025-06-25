// Buggy main.js
documment.getElementById("title").innerText = "Welcome";

function toggleMenu(){
  alert("Menu toggled")

const menuBtn = document.getElementById("menuBtn");
if (menuBtn) {
  menuBtn.addEventListener("click", toggleMenu);
} else {
  console.warn('Element with id "menuBtn" not found.')
}
