// --- Part 2: Functions with parameters & return ---
function calculateArea(width, height) {
  return width * height; // returns a value
}

function logScopeDemo() {
  let localVar = "I’m local!";
  console.log("Global variable: ", window.globalVar);
  console.log("Local variable: ", localVar);
}
let globalVar = "I’m global!";

// --- Box Bounce Toggle ---
const box = document.getElementById("box");
document.getElementById("bounceBtn").addEventListener("click", () => {
  box.classList.toggle("bounce");
  console.log("Box area:", calculateArea(100, 100)); // function in use
});

// --- Dark Mode Toggle ---
const toggleThemeBtn = document.getElementById("toggleTheme");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  console.log("Theme toggled!");
});

// --- Modal Control ---
const modal = document.getElementById("modal");
document.getElementById("openModal").addEventListener("click", () => {
  modal.classList.add("show");
});
document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.remove("show");
});

// --- Demonstrate Scope ---
logScopeDemo();
