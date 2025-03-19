for (const button of document.querySelectorAll(".button")) {
    button.addEventListener("click", async () => {
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        if (button.id == "register") {
            try {
                await Register(username, password);
                const userID = await Login(username, password);
                localStorage.setItem("userID", userID);
                location = "/"
            }
            catch (error) {
                console.log(error)
                document.getElementById("error-msg").innerText = error;
                document.getElementById("error-field").classList.remove("hidden");
            }
        }
        else if (button.id == "login") {
            try {
                const userID = await Login(username, password);
                localStorage.setItem("userID", userID);
                location = "/"

            }
            catch (error) {
                console.log(error)
                document.getElementById("error-msg").innerText = error;
                document.getElementById("error-field").classList.remove("hidden");
            }
        }
    })
}

async function Login(username, password) {
    const res = await fetch(`https://munchiesdb.vercel.app/api/users?username=${username}&password=${password}`);
    const id = await res.text()
    return id

}

async function Register(username, password) {
    fetch(`https://munchiesdb.vercel.app/api/users`, {
        method: "POST",
        body: JSON.stringify({
            username: username,
            password: password
        })
    })

}

