document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".row").forEach(row => {
        let speed = 0.3; // Nižší hodnota = pomalejší pohyb
        let isPaused = false;
        let translateX = 0;
        let velocity = -speed;

        // Duplikujeme obsah řady pro nekonečný efekt
        row.innerHTML += row.innerHTML;

        function moveRow() {
            if (isPaused) {
                velocity *= 0.97; // Postupné zpomalování
                if (Math.abs(velocity) < 0.05) velocity = 0; // Úplné zastavení
            } else {
                velocity = -speed; // Reset rychlosti při opuštění myší
            }

            translateX += velocity;
            row.style.transform = `translateX(${translateX}px)`;

            // Resetujeme pozici, aby smyčka pokračovala
            if (Math.abs(translateX) >= row.scrollWidth / 2) {
                translateX = 0;
            }

            requestAnimationFrame(moveRow);
        }

        row.addEventListener("mouseenter", () => isPaused = true);
        row.addEventListener("mouseleave", () => isPaused = false);

        moveRow();
    });
});
