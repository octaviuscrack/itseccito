// Formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("confirmation").style.display = "block";
    this.reset(); // Reinicia el formulario
});

// Cambiar tema de claro a oscuro
let darkMode = false;
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    darkMode = !darkMode;
    document.querySelector("#theme-toggle").innerText = darkMode ? "Modo Claro" : "Modo Oscuro";
}

// Crear botón de cambio de tema en el footer
const themeToggleButton = document.createElement("button");
themeToggleButton.innerText = "Modo Oscuro";
themeToggleButton.id = "theme-toggle";
themeToggleButton.onclick = toggleTheme;
document.querySelector("footer").appendChild(themeToggleButton);