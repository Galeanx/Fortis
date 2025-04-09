let user = JSON.parse(localStorage.getItem("user")) || localStorage.setItem("user",JSON.stringify({
    user: "admin",
    pass: 1234,
    logged: true,
    progreso: 0

}))

const progreso = document.querySelector('#progreso')



progreso.textContent = `${user.progreso}%`