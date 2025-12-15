function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "admin" && password === "123") {
        localStorage.setItem("login", "true");
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerText = "Username atau password salah!";
    }
}

function checkLogin() {
    if (localStorage.getItem("login") !== "true") {
        window.location.href = "index.html";
    }
}

function logout() {
    localStorage.removeItem("login");
    window.location.href = "index.html";
}
