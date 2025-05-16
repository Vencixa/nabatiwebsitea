const appointmentForm = document.getElementById("form");
const shadow = document.getElementById("shadow");

function toggleForm() {
    appointmentForm.classList.toggle("active");
    shadow.classList.toggle("active");
}