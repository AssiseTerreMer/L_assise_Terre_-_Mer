// Attendre que le DOM soit entièrement chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel img');
    let currentIndex = 0;
    
    // Fonction pour afficher la diapositive active
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active'); // Retirer la classe 'active' de toutes les images
            if (i === index) {
                slide.classList.add('active'); // Ajouter la classe 'active' à l'image courante
            }
        });
    }

    // Fonction pour passer à la diapositive suivante
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Boucle sur les diapositives
        showSlide(currentIndex);
    }

    // Fonction pour revenir à la diapositive précédente
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Boucle sur les diapositives
        showSlide(currentIndex);
    }

    // Initialiser le diaporama
    showSlide(currentIndex);

    // Ajouter les événements pour les boutons précédent et suivant
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    
    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }

    // Lancer le défilement automatique
    setInterval(nextSlide, 5000); // Change la diapositive toutes les 5 secondes
});

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel .slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    // Fonction pour afficher la diapositive active
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });

        // Mettre à jour les indicateurs
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    // Fonction pour passer à la diapositive suivante
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Fonction pour revenir à la diapositive précédente
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Initialiser le diaporama
    showSlide(currentIndex);

    // Ajouter les événements pour les boutons précédent et suivant
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Lancer le défilement automatique
    setInterval(nextSlide, 5000); // Change la diapositive toutes les 5 secondes
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi immédiat du formulaire pour validation

    const email = document.getElementById("email").value;
    const notRobot = document.getElementById("notRobot").checked; // Vérifie si coché

    let isValid = true;

    // Réinitialiser les messages d'erreur
    document.getElementById("emailError").textContent = "";
    document.getElementById("notRobotError").textContent = "";

    // Vérification de la case "Je ne suis pas un robot"
    if (!notRobot) {
        document.getElementById("notRobotError").textContent = "Vous devez confirmer que vous n'êtes pas un robot.";
        isValid = false;
    }

    // Validation Prénom, Nom, Email (déjà existant)
    if (email === "") {
        document.getElementById("emailError").textContent = "L'email est requis.";
        isValid = false;
    } else {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "L'adresse email n'est pas valide.";
            isValid = false;
        }
    }


    // Si tout est valide, envoi du formulaire
    if (isValid) {
        alert("Votre demande a été envoyée avec succès !");
        event.target.submit();
    }
});

