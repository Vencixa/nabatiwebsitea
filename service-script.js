document.getElementById("side-form").addEventListener("submit", function(e) {
    const service = document.getElementById("service");
    if (service.value === "") {
        e.preventDefault();
        alert("Please choose a service.");
        service.focus();
    }
});