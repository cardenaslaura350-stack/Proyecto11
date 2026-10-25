document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-btn");

    // 1. Verificar si el usuario ya aceptó las cookies anteriormente
    const cookieAccepted = localStorage.getItem("cookieConsent");

    if (!cookieAccepted) {
        // Si no ha dado consentimiento, mostramos el banner removiendo la clase 'hidden'
        cookieBanner.classList.remove("hidden");
    }

    // 2. Manejar el evento de clic en el botón de aceptar
    acceptBtn.addEventListener("click", () => {
        // Guardar la preferencia en localStorage
        localStorage.setItem("cookieConsent", "true");

        // Ocultar el banner añadiendo la clase 'hidden' (Manipulación del DOM)
        cookieBanner.classList.add("hidden");
    });
});