import { fillWithData, getDataFromURL, newPost, createPost } from "./app.js";

let username = localStorage.getItem("username")
if (username) {
    document.getElementById("username-display").innerText = username;
}

fillWithData(getDataFromURL(window.location.href));
document.getElementById("add-button").addEventListener("click", newPost);

document.getElementById("createPost").addEventListener("click", async () => {
    document.getElementById("error-msg").innerText = await createPost()
    document.getElementById("error-field").classList.remove("hidden")
})