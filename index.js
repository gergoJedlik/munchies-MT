import { newPost, fillCardContainer, setSort } from "./app.js";

fillCardContainer();
document.getElementById("add-button").addEventListener("click", newPost);

function sortbutton() {
  if (!document.getElementById("dropdown-content").classList.contains("hidden")) {
    document.getElementById("dropdown-content").classList.add("hidden");
    return
  }
  document.getElementById("dropdown-content").classList.remove("hidden");
}

document.getElementById("dropbtn").addEventListener("click", sortbutton);
document.getElementById("dropdown-content").addEventListener("click", sortbutton);

// document.getElementById("basic").addEventListener("click", () => {
//   setSort("basic");
//   document.getElementById("dropbtn").innerText = "basic"
// });
// document.getElementById("reverse").addEventListener("click", () => {
//   setSort("reverse");
//   document.getElementById("dropbtn").innerText = "reverse"
// });
// document.getElementById("oldest").addEventListener("click", () => {
//   setSort("oldest");
//   document.getElementById("dropbtn").innerText = "oldest"
// });

for (const element of document.querySelectorAll(".sortOption")) {
  element.addEventListener("click", () => {
    setSort(element.id);
    document.getElementById("dropbtn").innerText = element.id;
  }
  )
} 