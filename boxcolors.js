// Variables
const boxColor = document.querySelectorAll(".box-color");
const bodyColor = document.querySelector("body");
// Recorrer los div (box-color) y obtengo cada uno por individual para manejar
boxColor.forEach(function (currentValue) {
  // Cuando el mouse sale del div, el color por defecto del body es Blanco
  currentValue.addEventListener("mouseleave", function (event) {
    bodyColor.style.backgroundColor = "white";
  });
  // When mouse is enter on the div, the body color is the same of the div (box-color)
  currentValue.addEventListener("mouseenter", function (event) {
    const color = window.getComputedStyle(event.target).backgroundColor;
    bodyColor.style.backgroundColor = color;
  });
});
