window.onscroll = function() {
    let button = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = 'block';  // Zobrazí tlačítko
    } else {
        button.style.display = 'none';   // Skryje tlačítko
    }
};

// Funkce pro návrat na začátek stránky
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}