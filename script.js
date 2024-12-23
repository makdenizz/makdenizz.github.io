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

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.nav-overlay');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Overlay'e tıklandığında menüyü kapat
    overlay.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Menü linklerine tıklandığında menüyü kapat
    const menuLinks = document.querySelectorAll('.nav-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
});