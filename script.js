// Scroll to Top Butonunu Göster/Gizle
const scrollToTopButton = document.getElementById("scrollToTop");
let scrollTimeout;

window.addEventListener("scroll", () => {
    // Kaydırma sırasında butonu gizle
    scrollToTopButton.classList.remove("show");

    // Kaydırma durduktan sonra butonu göster
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (window.scrollY > 200) { // Eğer 200px'den fazla kaydırılırsa
            scrollToTopButton.classList.add("show");
        }
    }, 300); // Kaydırma durduktan 300ms sonra buton gösterilecek
});

// Scroll to Hero Section
function scrollToHero() {
    const heroSection = document.getElementById("hero");
    heroSection.scrollIntoView({ behavior: "smooth" });
}
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Toggle active class for hamburger animation
        hamburger.classList.toggle('active');
        // Toggle navigation menu
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Close menu when link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.journey-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
        
        // Optional: Add keyboard accessibility
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                card.classList.toggle('flipped');
            }
        });
    });
});