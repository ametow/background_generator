var css = document.querySelector("asd");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body =  document.getElementById("gradient");
function change() {
    body.style.background = 
    "Linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
}

// color1.addEventListener("input", change);
// color2.addEventListener("input", change);