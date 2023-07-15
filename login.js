const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

let popup = document.getElementById("popup");
let loginSubmit = document.getElementById("loginSubmit");

function openPopup() {
  popup.classList.add("open-popup");
  loginSubmit.classList.remove("close-wrapper");
}

function closePopup() {
  popup.classList.remove("open-popup");
}
