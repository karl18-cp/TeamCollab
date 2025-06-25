// Buggy main.js
documment.getElementById("title").innerText = "Welcome";

function toggleMenu(){
  alert("Menu toggled") //added buutton
}

document.getElementById("menuBtn").addEventListener("click", toggleMenu);
