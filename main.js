document.addEventListener('DOMContentLoaded', function() {
// 🔹 Navbar Active Link on Scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-list a");
const heroSubtitle = document.getElementById('profession-rotation');

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
    });

    navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
    });
});

// 🔹 Header Background Change on Scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.style.backgroundColor = window.scrollY > 50 ? "#020411f1" : "#020411d2";
});

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

    // Démarrer l'effet
    typeWriter();
});