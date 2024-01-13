let container = document.getElementById("outer");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let inner = document.getElementById("inner");

function changeColor(e) {
  let str = "0123456789abcdef";
  let finalStr = "#";

  for (let i = 0; i < 6; i++) {
    let randomIdx = Math.floor(Math.random() * str.length);
    finalStr += str[randomIdx];
  }
  console.log(finalStr);

  container.style.backgroundColor = finalStr;
}

btn1.addEventListener("click", changeColor);

function changeShape(e) {
  let shape = [
    "triangle-up",
    "triangle-down",
    "square",
    "star",
    "diamond",
    "circle",
  ];
  let chosen = Math.floor(Math.random() * shape.length);
  inner.setAttribute("id", shape[chosen]);
  console.log("HUmm");
}

btn2.addEventListener("click", changeShape);
