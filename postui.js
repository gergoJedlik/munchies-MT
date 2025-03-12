import { fillWithData, getDataFromURL, newPost } from "./app.js";

fillWithData(getDataFromURL(window.location.href));
document.getElementById("add-button").addEventListener("click", newPost);