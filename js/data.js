document.addEventListener("DOMContentLoaded", () => {

    const storedData = localStorage.getItem("dato");

    document.getElementById("data").textContent = storedData ? storedData : "No hay dato guardado";
});