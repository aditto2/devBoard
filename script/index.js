// the rainbow button:

const colorBtn = document.getElementById("colorBtn");
const body = document.getElementById('body');

const colors = ['red', 'yellow', "orange", "green", 'blue', 'indigo', 'violet', '#f4f7ff'];
let currentColorIndex = 0;

colorBtn.onclick = function changeColor() {
    body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}