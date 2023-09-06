const hamburgeBtn = document.querySelector(".hamburger-icon");
const nav = document.getElementById("responsive-nav");
const body = document.querySelector("body");
hamburgeBtn.addEventListener("click", hamburgerHandler);
const element = document.createElement("div");
element.addEventListener("click", elementHandler);

function hamburgerHandler() {
  console.log("hi");
  nav.classList.add("open");
  element.classList.add("backdrop");
  body.insertBefore(element, body.firstChild);
}

function elementHandler() {
  console.log("bye");
  nav.classList.remove("open");
  element.remove();
}
