const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("login-form input")
const greeting = document.querySelector("greeting")

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.ariaValueMax;
    localStorage.setItem("USERNAME_KEY", username)
    paintGreetings(savedUsername)
}

const savedUsername = localStorage.getItem("USERNAME_KEY")
const USERNAME_KEY = "username";

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.innerText = `Hello ${username}`
}

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings();
}