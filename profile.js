localStorage.clear();

for (const button of document.querySelectorAll(".button")) {
    button.addEventListener("click", async () => {
        const loginUsername = document.getElementById("username").value
        const password = document.getElementById("password").value
        if (button.id == "register") {
            try {
                await Register(loginUsername, password);
                const userData = await Login(loginUsername, password);
                localStorage.setItem("userID", userData.userID);
                localStorage.setItem("username", userData.username);
                location = window.location.href.replace("login.html", "index.html");
            }
            catch (error) {
                console.log(error)
                document.getElementById("error-msg").innerText = error;
                document.getElementById("error-field").classList.remove("hidden");
            }
        }
        else if (button.id == "login") {
            try {
                const userData = await Login(loginUsername, password);
                localStorage.setItem("userID", userData.userID);
                localStorage.setItem("username", userData.username);
                location = window.location.href.replace("login.html", "index.html");

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
    return await res.json()
}

async function Register(username, password) {
    await fetch(`https://munchiesdb.vercel.app/api/users`, {
        method: "POST",
        body: JSON.stringify({
            username: username,
            password: password
        })
    })

}

