document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.vyber_video video');
    
    document.querySelector('.vyber_video').addEventListener('mouseenter', function() {
      video.play(); // Video začne hrát při hoveru
      video.classList.add('playing'); // Přidáme třídu pro animaci
    });
    
    document.querySelector('.vyber_video').addEventListener('mouseleave', function() {
      video.pause(); // Video se pozastaví, když opustíme hover
      video.currentTime = 0; // Video se vrátí na začátek
      video.classList.remove('playing'); // Odstraníme třídu pro animaci
    });
  });