// Write your code here!
const div = document.getElementById("main");
div.remove();
const newHeader = document.createElement("h1");

newHeader.setAttribute("id", "victory");
const yourName = "Nicholas njeru";
newHeader.textContent = "YOUR-NAME is the champion";