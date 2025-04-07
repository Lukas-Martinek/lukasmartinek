const fotoParts = document.querySelectorAll('.foto_part');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.5 // 50% prvku musí být vidět, jinak ho nezapne
});

fotoParts.forEach(part => {
    observer.observe(part);
});