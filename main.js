document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-list a");

    //state effect on scroll
    function updateActiveLink() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= (sectionTop - 150)) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    }

    updateActiveLink();

    window.addEventListener("scroll", updateActiveLink);

    // clics sur les liens de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

const heroSubtitle = document.getElementById('profession-rotation');
    // Professions for typewriter effect
    const professions = [
        'A Bachelor IT Student',
        'Also an Artist',
        'And a Gamer too'
    ];

    // Typewriter Effect
    let professionIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;

    function typeWriter() {
        if (!heroSubtitle) return;

        const currentProfession = professions[professionIndex];

        if (isDeleting) {
            heroSubtitle.innerHTML = currentProfession.substring(0, charIndex - 1) + '<span class="cursor">|</span>';
            charIndex--;
            typingSpeed = 75;
        } else {
            heroSubtitle.innerHTML = currentProfession.substring(0, charIndex + 1) + '<span class="cursor">|</span>';
            charIndex++;
            typingSpeed = 150;
        }

        if (!isDeleting && charIndex === currentProfession.length) {
            typingSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            professionIndex = (professionIndex + 1) % professions.length;
            typingSpeed = 500; // Pause before next word
        }

        setTimeout(typeWriter, typingSpeed);
    }

    typeWriter();

    // carousel functionality
    const carousel = document.querySelector('.projects-grid');
                const prevBtn = document.querySelector('.prev-btn');
                const nextBtn = document.querySelector('.next-btn');
                const cards = document.querySelectorAll('.project-card');
                const cardWidth = 370; // Largeur d'une carte + gap (350px + 20px de gap)

                let currentIndex = 0;
                const visibleCards = calculateVisibleCards();

                const maxIndex = cards.length - visibleCards;

                // Fonction pour calculer le nombre de cartes visibles
                function calculateVisibleCards() {
                    if (window.innerWidth >= 1200) return 3;
                    if (window.innerWidth >= 768) return 2;
                    return 1;
                }

                // Fonction pour mettre à jour le carousel
                function updateCarousel() {
                    if (currentIndex > maxIndex) currentIndex = maxIndex;
                    if (currentIndex < 0) currentIndex = 0;

                    const offset = currentIndex * cardWidth;
                    document.querySelector('.projects-grid-container').scrollTo({ top: 0, left: offset, behavior: 'smooth'});

                    // Désactive les boutons si on est au début ou à la fin
                    prevBtn.style.opacity = currentIndex === 0 ? 0.5 : 1;
                    prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
                    nextBtn.style.opacity = currentIndex >= maxIndex ? 0.5 : 1;
                    nextBtn.style.cursor = currentIndex >= maxIndex ? 'not-allowed' : 'pointer';
                }

                // Fonction pour aller à un slide spécifique
                function goToSlide(index) {
                    currentIndex = index;
                    updateCarousel();
                }

                // Événements pour les boutons
                prevBtn.addEventListener('click', () => {
                    if (currentIndex > 0) {
                        currentIndex--;
                        updateCarousel();
                    }
                });

                nextBtn.addEventListener('click', () => {
                    if (currentIndex < maxIndex) {
                        currentIndex++;
                        updateCarousel();
                    }
                });

                // Gestion du redimensionnement
                window.addEventListener('resize', () => {
                    const newVisibleCards = calculateVisibleCards();
                    if (newVisibleCards !== visibleCards) {
                        visibleCards = newVisibleCards;
                        updateCarousel();
                    }
                });

                // Initialisation
                updateCarousel();

});

// Menu Hamburger
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
    this.classList.toggle('active');
});

