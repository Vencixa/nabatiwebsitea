const appointmentForm = document.getElementById("form");
const shadow = document.getElementById("shadow");
const header = document.getElementById("header");
const headerText = document.getElementById("header-text");

function toggleForm() {
    appointmentForm.classList.toggle("active");
    shadow.classList.toggle("active");
}

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
        headerText.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
        headerText.classList.remove("scrolled");
    }
})