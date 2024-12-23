const scrollToTopButton = document.getElementById("scrollToTop");
let scrollTimeout;

window.addEventListener("scroll", () => {
    // Kaydırma sırasında butonu gizle
    scrollToTopButton.classList.remove("show");

    // Kaydırma durduktan sonra butonu göster
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (window.scrollY > 200) {
            scrollToTopButton.classList.add("show"); // Kaydırma 200px'den fazla olursa buton görünür
        }
    }, 300); // Kaydırma durduktan 300ms sonra buton gösterilecek
});

// Scroll to Hero Section
function scrollToHero() {
    const heroSection = document.getElementById("hero");
    heroSection.scrollIntoView({ behavior: "smooth" });
}
