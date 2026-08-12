// script.js

console.log("Hello World!");

function init() {
  const header = document.querySelector("header");
  const main = document.querySelector("main");

  header.addEventListener("click", () => {
    alert("Header clicked!");
  });

  main.addEventListener("click", () => {
    alert("Main content clicked!");
  });
}

init();