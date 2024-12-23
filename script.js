function showHeroSectionOnly() {
    // Header ve diğer bölümleri gizle
    document.querySelectorAll("header, #about, #projects, footer").forEach(section => {
        section.style.display = "none"; /* Diğer bölümleri gizle */
    });

    // 3 saniye sonra diğer bölümleri göster
    setTimeout(() => {
        document.querySelectorAll("header, #about, #projects, footer").forEach(section => {
            section.style.display = ""; /* Normal görünüme geri döndür */
        });
    }, 3000); // 3 saniye (3000 milisaniye)
}
// Logoya tıklama etkinliği
document.querySelector('.logo-link').addEventListener('click', (event) => {
    event.preventDefault(); // Varsayılan bağlantı davranışını engeller
    window.scrollTo({
        top: 0, // Sayfanın en üstüne kaydır
        behavior: 'smooth' // Yumuşak kaydırma efekti
    });
});
