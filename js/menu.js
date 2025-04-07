function toggleMobileMenu() {
    let menu = document.getElementById("mobileMenu");
    let body = document.body;

    if (menu.style.display === "block") {
        menu.style.display = "none";
        body.style.overflow = ""; // Obnovíme scrollování
        body.classList.remove("menu-open");
    } else {
        menu.style.display = "block";
        body.style.overflow = "hidden"; // Zakážeme scrollování
        body.classList.add("menu-open");
    }
}

// Funkce pro zavření menu při kliknutí na odkaz
let menuLinks = document.querySelectorAll('.mobile-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        let menu = document.getElementById("mobileMenu");
        let body = document.body;

        menu.style.display = "none"; // Zavřeme menu
        body.style.overflow = ""; // Obnovíme scrollování
        body.classList.remove("menu-open");
    });
});