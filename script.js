/// ------------------------
// Animace při scrollu
// ------------------------
const animSelectors = ['.animace', '.animace1', '.animace2', '.animace3'];

function checkElements() {
    animSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            const position = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            el.classList.toggle('active', position < screenPosition && position > 0);
        });
    });
}

window.addEventListener('load', checkElements);
window.addEventListener('scroll', checkElements);


// ------------------------
// Slider animace
// ------------------------
window.addEventListener('load', () => {
    const slides = document.querySelectorAll(".slide");
    const leftBtn = document.querySelector(".arrow.left");
    const rightBtn = document.querySelector(".arrow.right");
    let currentIndex = 0;

    function showSlide(newIndex, direction) {
        if (newIndex === currentIndex) return;

        const currentSlide = slides[currentIndex];
        const newSlide = slides[newIndex];

        currentSlide.classList.remove("active");
        currentSlide.classList.add(direction === "right" ? "to-left" : "to-right");

        newSlide.classList.remove("to-left", "to-right");
        newSlide.classList.add("active");

        currentIndex = newIndex;
    }

    leftBtn.addEventListener("click", () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(newIndex, "left");
    });

    rightBtn.addEventListener("click", () => {
        const newIndex = (currentIndex + 1) % slides.length;
        showSlide(newIndex, "right");
    });
});


// ------------------------
// Mobilní menu toggle
// ------------------------
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.tlacitko-container');

menuToggle.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});


