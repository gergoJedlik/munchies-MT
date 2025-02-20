function newPost() {
    
    let window = document.getElementById("post-window")
    let postmenu = document.getElementById("postmenu")
    if (window.classList.contains("footnote-open")) {
        window.classList.remove("footnote-open")
        postmenu.classList.remove("shown")
        return
    }
    window.classList.add("footnote-open")
    postmenu.classList.add("shown")
    postmenu.classList.add("overflow-on")
}

function setProgress(value) {
    if (value < 1 || value > 10) return;
    const progressBar = document.querySelector('.progress-barar');
    const progressText = document.querySelector('.progress-textar');
    
    const percentage = (value / 10) * 100;
    progressBar.style.width = percentage + "%";
    progressText.textContent = `${value}/10`;
}

setProgress(5);

function setProgressall (value) {
    if (value < 1 || value > 40) return;
    const progressBar = document.querySelector('.progress-barall');
    const progressText = document.querySelector('.progress-textall');
    
    const percentage = (value / 40) * 100;
    progressBar.style.width = percentage + "%";
    progressText.textContent = `${value}/40`;
}

setProgressall(10);