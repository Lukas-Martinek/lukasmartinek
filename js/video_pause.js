document.addEventListener('DOMContentLoaded', function () {
    const videoParts = document.querySelectorAll('.video_part');
    const isMobile = window.matchMedia("(pointer: coarse)").matches;

    if (isMobile) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target.querySelector('video');

                if (!video) return;

                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                    video.currentTime = 0;
                }
            });
        }, {
            threshold: 0.6, // čím víc tím striktnější (doporučuju 0.5 - 0.7)
            rootMargin: "-30% 0px -30% 0px" // nahoře a dole 30% ignoruju
        });

        videoParts.forEach(part => {
            observer.observe(part);
        });
    } else {
        const videos = document.querySelectorAll('.video_part video');

        videos.forEach(video => {
            const videoPart = video.closest('.video_part');

            videoPart.addEventListener('mouseenter', function () {
                video.play();
            });

            videoPart.addEventListener('mouseleave', function () {
                video.pause();
                video.currentTime = 0;
            });
        });
    }
});