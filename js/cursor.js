document.addEventListener('DOMContentLoaded', () => {
    const cursorStar = document.querySelector('.cursor-star');

    let starX = 0, starY = 0;

    document.addEventListener('mousemove', (e) => {
        starX = e.clientX;
        starY = e.clientY;
        cursorStar.style.transform = `translate(${starX}px, ${starY}px)`;
    });

    function animateStar() {
        requestAnimationFrame(animateStar);
    }

    animateStar();
});