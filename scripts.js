// script.js

let currentSlide = 0;

function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Update current slide index
    currentSlide = (n + slides.length) % slides.length;

    // Display the current slide
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Optional: Auto slide every 3 seconds
setInterval(nextSlide, 3000);