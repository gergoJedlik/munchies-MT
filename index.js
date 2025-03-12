import { newPost, fillCardContainer } from "./app.js";

fillCardContainer()
document.getElementById("add-button").addEventListener("click", newPost);