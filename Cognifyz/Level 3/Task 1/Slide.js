let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.opacity = '0';
        if (index === slideIndex) {
            slide.style.opacity = '1';
        }
    });
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides();
