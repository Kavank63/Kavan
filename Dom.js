let a = document.getElementById("kavan");
let b = document.getElementById("btn");
function toogle() {
  if (b.innerText == "green") {
    a.style.backgroundColor = "green";
    b.innerText = "blue";
  } else {
    a.style.backgroundColor = "blue";
    b.innerText = "green";
  }
}
