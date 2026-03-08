const carousel = document.querySelector(".cert-carousel");
const cards = document.querySelectorAll(".cert-card");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let currentIndex = 0; // Changed to 0 to start from the first HP certificate

function updateCarousel() {
    cards.forEach((card, index) => {
        card.classList.remove("active");
        if (index === currentIndex) {
            card.classList.add("active");
        }
    });

    const cardWidth = cards[0].offsetWidth + 30; 
    const containerWidth = document.querySelector(".cert-wrapper").offsetWidth;
    const centerOffset = (containerWidth / 2) - (cardWidth / 2);
    const totalMove = -(currentIndex * cardWidth) + centerOffset;

    carousel.style.transform = `translateX(${totalMove}px)`;
}

rightBtn.onclick = () => {
    currentIndex++;
    if (currentIndex >= cards.length) { currentIndex = 0; }
    updateCarousel();
};

leftBtn.onclick = () => {
    currentIndex--;
    if (currentIndex < 0) { currentIndex = cards.length - 1; }
    updateCarousel();
};

window.addEventListener('resize', updateCarousel);
updateCarousel();