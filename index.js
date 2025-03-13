import { newPost, fillCardContainer } from "./app.js";

fillCardContainer();
document.getElementById("add-button").addEventListener("click", newPost);

function sortbutton() {
  document.getElementById("dropdown-content").classList.remove("hidden");
}

document.getElementById("dropbtn").addEventListener("click", sortbutton);
