document.addEventListener("DOMContentLoaded", () => {
    const bannerCookies = document.getElementById("banner-cookies");
    const botonAceptar = document.getElementById("boton-aceptar");

    // 1. Verificar si el usuario ya aceptó las cookies anteriormente en localStorage
    const cookiesAceptadas = localStorage.getItem("consentimientoCookies");

    if (!cookiesAceptadas) {
        // Si no ha dado consentimiento, mostramos el banner quitando la clase 'oculto'
        bannerCookies.classList.remove("oculto");
    }

    // 2. Manejar el evento de clic cuando el usuario hace clic en el botón
    botonAceptar.addEventListener("click", () => {
        // Guardar la preferencia del usuario en el almacenamiento local
        localStorage.setItem("consentimientoCookies", "true");

        // Ocultar el banner añadiendo la clase 'oculto' (Manipulación del DOM)
        bannerCookies.classList.add("oculto");
    });
});