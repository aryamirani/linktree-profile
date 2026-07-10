// Initialize Feather Icons
feather.replace();

// Staggered animation for link cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.link-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeIn 0.5s ease-out ${0.2 + (index * 0.1)}s forwards`;
    });
});
