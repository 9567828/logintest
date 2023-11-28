const form = document.querySelector("#login_form")
const loginInput = document.querySelector("#login_form input")
const enterForm = document.querySelector("#greeting")
const btn = document.querySelector("#btn_login")

const HIDDEN_CLASS = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit (event) {
  event.preventDefault();
  form.classList.add(HIDDEN_CLASS)
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username)
  paintGreeting(username)
}

function paintGreeting (username) {
  enterForm.innerText = `반갑습니다 ${username}님 :)`
  enterForm.classList.remove(HIDDEN_CLASS)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)
if(savedUsername === null) {
  form.classList.remove(HIDDEN_CLASS)
  form.addEventListener("submit", onLoginSubmit)
} else {
  paintGreeting(savedUsername)
}

let idcheck = false;

loginInput.addEventListener('keyup', activeEvent)

function activeEvent () {
  switch(!(loginInput.value)) {
    case true : btn.disabled = true; break;
    case false : btn.disabled = false; break;
  }
}