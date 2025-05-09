// Sélectionner tous les diaporamas
const carousels = document.querySelectorAll('.diaporama');

// Fonction pour afficher une image active dans le diaporama
carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll('.carousel-images img');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    
    let currentIndex = 0; // L'index de l'image actuellement affichée
    
    // Fonction pour mettre à jour l'affichage des images
    function updateCarousel() {
        images.forEach((img, index) => {
            img.style.display = index === currentIndex ? 'block' : 'none'; // Afficher ou masquer l'image
        });
    }

    // Événements pour les boutons de navigation
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    // Initialiser le diaporama
    updateCarousel();
});
