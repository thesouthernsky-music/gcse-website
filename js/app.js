/* ==============================
   GCSE Hub - Core JS
   ============================== */

// Staggered card entrance animations via Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.subject-card, .topic-card');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => observer.observe(card));
    } else {
        cards.forEach(card => card.classList.add('visible'));
    }
});
